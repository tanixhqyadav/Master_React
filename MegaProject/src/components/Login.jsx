// ? here i have made a login element using react hook form to make it more precise 
// Flow:
// Form submission → handleSubmit collects the input data (email, password).
// login(data) is called:
// authService.login(data): Attempts to authenticate the user in Appwrite.
// If login succeeds: authService.getCurrentUser() retrieves the user's details.
// Redux dispatch: The user's data is dispatched to the Redux store.
// Navigation: The user is redirected to the home page (or another protected page).
// Key Points:
// data contains the user’s email and password passed through inputs.
// authService.login(data) interacts with Appwrite for authentication.
// Redux dispatch updates the global state with the authenticated user’s data.
// Navigation is used to route the user to a different page after successful login.

import React ,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// ? we have taken a link to send it when we link on login along with navigate hook 
import {login as authLogin} from '../store/authSlice'; // used another syntax for understanding 
import {Button,Input, Logo } from './index' // basic components 
import { useDispatch } from 'react-redux'; // dispatch is use to send data to app write and redux store 
import authService from "../appwrite/auth" // to use appwriteservices i have made 
import {useForm} from "react-hook-form" // used in react hookform

function Login() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {register,handleSubmit}=useForm();
    const [error, setError]=useState("")

    const login=async(data)=>{
        setError("")
        try {
            const session=await authService.login(data)
            // !here we are getting data from authService if there is user present or not or else 
            if(session){
                const userData=await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate("/")
// ? here first we are checking if we have a user logedin then if we have a user then dispatching it to the backend here and navigating the current user 
            }
        } catch (error) {
            setError(error.message)
        }
    }
return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {/* ! in the upper section created some section using html and css and further the code is for that if you have a error then d
        display in which i have done in the javascrit box if error then this  or that  after that we made a form */} 
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {/* so here whenever the form is submited then we are giving are own method in handleSubmit that how are form will be submited handle
        submit is a event which manages the state automatically and we use register which will manage input state other state   */}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                // !we are overriding in th input component
                label="Email: "
                placeholder="Enter your email"
                type="email"
                // here ... is used in regsiter to not to change the value in other input 
                {...register("email", {
                    required: true,
                    validate: {
                        // in match pattern we have a regex to match the pattern of mail here with a or condtion 
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
)
}

export default Login

// In your Login component, the handleSubmit function from React Hook Form is playing a crucial role in handling the form submission process.

// How handleSubmit Works:
// handleSubmit(login) is a function that wraps your login function.
// It collects the form data, validates it based on the validation rules defined in register, and then passes the validated data as an argument to the login function.
// Key Functions of handleSubmit:
// Validation Handling:

// It first checks the validity of the input fields registered with register.
// If all fields pass the validation, the login function is called with the form data as its argument.
// Form Data Collection:

// handleSubmit automatically gathers the values from the inputs that are registered with register.
// In your code, it collects the email and password values from the inputs registered via:
// js
// Copy code
// {...register("email", { ... })}
// {...register("password", { ... })}
// Prevents Default Form Submission:

// By default, when an HTML form is submitted, the browser reloads the page. handleSubmit prevents this default behavior and ensures the form submission is handled via JavaScript.
// Error Handling:

// If validation fails (e.g., the email format is wrong or a required field is missing), it won't call your login function. Instead, it will display the errors inside the form’s formState.
// Flow of handleSubmit:
// User submits the form (clicks the "Sign in" button).
// handleSubmit is triggered. It first performs the validation of the inputs registered with register.
// If validation passes, the login function is called with the form data (email and password).
// If validation fails, the errors are displayed, and the login function is not called.
// In your case, handleSubmit(login) will pass the email and password values to the login function when the form is submitted successfully, and you use these values to authenticate the user through your authService.