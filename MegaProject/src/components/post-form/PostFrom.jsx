import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        // ?use form provide many funcnalities ,like setValue , control is for(RTE), getvalues and watch 
        defaultValues: {
    // ! we want a post which is passe as prop as above and aftrer that we quering that either we want to edit to enter a default value we are getting from app write 
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
            // ? if we have a post. then show it or else keep it empty 
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        //?if we have a post then now we can update it OR else we have to make a new entry on clicking submit 
        if (post) {
            // ? here we are handeling file  in such a way that we update it and after updating we have to delet it
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }
            // ? post.${id} has a slug in that here we are updating db with the data 
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });
            // !navigate to the post 
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            // ! we dont have post then  we will make a new entry 
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                // updating appwrute here 
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
                // here we crateing a new post with data and passing it as a spread operator here with user id as this arguement in appwrite 
                if (dbPost) {
                    // if we get a db post thwn redirct it to post with post id 
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };
// ! Here what we are doing we are getting title nad transforming it to slug  we are using useing call back we as to optimise it 
// !becuase callback functions resides in cache 

    const slugTransform = useCallback((value) => {
        // here we are checking if we have a value then checkit type and now doing our changing it to slug part 
        if (value && typeof value === "string"){
            return value
        //! .toLowerCase().replace(| |g,'-')setValue('slug',slug) another syntax
                .trim()
                .toLowerCase()
                //! here regx is used 
                .replace(/[^a-zA-Z\d\s]+/g, "-")//? its like that a-zA-Z\d\s if get these values then donot remove it 
                .replace(/\s/g, "-");
        }

        return "";
    }, []);

    React.useEffect(() => {
        // ! use effect is used here if to because it is here before any rendering 
        const subscription = watch((value, { name }) => {
            // if we have a title then we are setting the value there with slug transform 
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });
        // ! Unsubscribes from the watcher when the component unmounts or dependencies change.
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            {/* ! in the below code we have made the struture with html ccs  */}
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}