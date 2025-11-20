import React from 'react'

function Container({children}) {
  // Conatiner accepts property as a children 
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container

// Reusable Layout: The Container component is designed to be reusable throughout your application. It ensures that all content placed inside it follows the same layout structure (e.g., a max width, centering, and padding).

// Consistent Styling: By wrapping other components with Container, you ensure that they are consistently styled with the same width and spacing. This is particularly useful when you want a responsive layout where content is centered and has appropriate padding (like with the w-full, max-w-7xl, and px-4 classes).

// Flexible Child Content: The children prop allows any content passed between the opening and closing tags of Container to be rendered inside the div. This makes the component very flexible since you can wrap various child components or elements within it.

// How it's used:
// children prop: In React, children is a special prop that contains any child elements passed inside a component's opening and closing tags. For example:

// jsx
// Copy code
// Here, the <p> element will be passed as the children prop to the Container component and rendered inside the div.