// in thisnwe are  making my Real time editor 
import React from 'react'
import {Editor} from '@tinymce/tinymce-react'// this is react library i have used here for the real time textediitor 
import {Controller} from 'react-hook-form'
export default function RTE({name, control, label, defaultValue =""}) {
    // The Controller component in React Hook Form acts as a bridge between controlled components and the internal state management of the form. Instead of using register directly for uncontrolled components, Controller is used to manage the controlled input’s value and handle the onChange events seamlessly.
    return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        // here controller is used to use the real time ditor more effiecientlty 
    <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />
</div>
    )
}