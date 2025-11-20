chahe hum vite se kaam kare yha phir npx se function ka naam capital rakho !
vite file ka naam extension jsx rakhio agar html return ho rha hai toh 
React has its own virtual DOM , means react has its own tree like structure 
which is updated simuntaneously as as we make any changes n number of time which behind the scene react uses react fibre 
//! reconcilation algorithm is recursive based Algorithm ,which compare browser tree and react dom tree , and make changes
where needed 

Context api is used in such a way for passing and sending data through components whuch can bew done using global object 
// we can do this using redux toolkit   //! it is used for state management 
<!-- <!--  -->
?Important  
! React and the Virtual DOM
!Virtual DOM:

What It Is: The Virtual DOM is a lightweight, in-memory representation of the actual DOM. When you build a React application, React creates this Virtual DOM to track changes to the user interface.
Purpose: The key purpose of the Virtual DOM is to improve performance. Directly manipulating the actual DOM (also called the "real DOM") can be slow, especially in large applications with complex UIs. The Virtual DOM allows React to minimize the number of direct updates to the real DOM.
How It Works:

Initial Render:
When your React app first loads, React creates a Virtual DOM that mirrors the structure of the real DOM.
State Changes or Updates:
When the state of a component changes (due to user interaction, data fetching, etc.), React updates the Virtual DOM instead of the real DOM immediately.
Diffing Algorithm:
React uses a diffing algorithm (reconciliation) to compare the previous Virtual DOM with the new Virtual DOM after a state change.
This comparison identifies exactly what parts of the Virtual DOM have changed.
Batching Updates:
Instead of updating the real DOM immediately for every single change, React batches multiple changes together. This further enhances performance by reducing the number of direct manipulations to the real DOM.
Updating the Real DOM:

After determining what has changed, React updates the real DOM selectively. Only the parts of the DOM that have actually changed (as determined by the diffing process) are updated, rather than re-rendering the entire page.
Rendering:

Once the necessary updates are made to the real DOM, the browser paints the changes on the screen. This process makes the UI reflect the current state of the application.
Key Concepts:
Reconciliation: The process React uses to compare the previous and current Virtual DOM, identify changes, and apply those changes to the real DOM.
Efficiency: React's approach with the Virtual DOM minimizes the number of direct manipulations to the real DOM, which can be a slow operation. By only updating the parts of the DOM that have changed, React ensures that your application remains fast and responsive.
Your Understanding:
You were correct in thinking that React has its own "DOM" (the Virtual DOM), which it uses to track changes.
The Virtual DOM is indeed compared with the previous version (also a Virtual DOM) to determine what changes need to be applied to the real DOM.
React then applies these updates to the real DOM as efficiently as possible, triggering the necessary re-renders.
