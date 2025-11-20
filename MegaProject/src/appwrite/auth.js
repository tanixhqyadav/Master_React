/* eslint-disable no-unused-vars */
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client =new Client();
    account;
    constructor (){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
    this.account=new Account(this.client);
    // * this thing 
    }

    async createAccount({email,password,name}){
        // ! this create Account method can be failed thats why using try catch method for it 
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // !here we calling another method which is like that if user account is made then login it also
                return this.login(email,password)
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Error in Crate Account",error);
        }
    }
    async login({email,password}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            console.log("Error in Login",error);
        }
    }
    async getCurrentUser(){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.get();
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            console.log("Error getCurrentUser!",error);
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Error Logout",error);
        }
    }
}
// ? can be done like this also but for the above code is done for code practise    
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

const authService=new AuthService();
// here we have class a AuthService which has a object authservice the class has methods which can be easily accesible and the code 
// code is also under the hood using this approach
export default authService;



// 1. Why Use a Class (AuthService):
// You are correct that the class-based approach is useful here because it encapsulates all authentication-related methods (e.g., account creation, login, logout) and the Appwrite configuration (like the project ID and API endpoint) in one place.
// This makes your code more organized and DRY (Don’t Repeat Yourself), as you don't need to repeatedly set up the client or Appwrite configuration in multiple parts of the app.
// 2. Async/Await:
// Correct: You’re right that async is needed whenever you're using await inside the method. This makes the function return a promise and allows you to use await to wait for that promise to resolve.
// Difference between await and fetch:
// fetch() is a method used to make API requests and returns a promise. You can use await with fetch to wait for the complete response. It doesn't mean that fetch resolves in chunks by itself—it's just a way to retrieve data asynchronously.
// await pauses the execution until the promise is resolved, so you don’t have to handle promises manually using .then() or .catch(). This makes the code synchronous-looking and easier to read.
// 3. Appwrite API and Asynchronous Code:
// You're using Appwrite's methods, and most of these methods return promises (e.g., create(), createEmailSession(), get(), deleteSessions()).
// That's why you need await to wait for these operations to complete and handle them in a non-blocking way. For example, the createAccount method will wait for Appwrite to finish creating the account and then proceed to log the user in.
// 4. Error Handling:
// Using try-catch is a good practice here because any API call can fail (e.g., due to network issues, invalid credentials, or server errors). By wrapping the code in try-catch, you're able to handle errors gracefully and avoid unhandled promise rejections.
// 5. Explanation of Why Class is Better Here:
// By using the class AuthService, you centralize all Appwrite API interactions and make it easy to reuse the methods in your React app.
// Constructor: It sets up the Appwrite Client only once when the class is instantiated, so you don’t have to manually set it up each time you need to use the account API.
// Encapsulation: You can easily add more methods (e.g., password reset, update user profile) without cluttering other parts of your app.
// Corrections on your interpretation of fetch:
// fetch() does not deliver data in chunks and then render to the page. Instead, it starts the request and returns a promise, which you can use await on to get the complete data. await just ensures that your code waits for that complete promise resolution before continuing.