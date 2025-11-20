import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Custom(){
  return (
    <>
      <h1>react + Custom</h1>
    </>
  );
}
const reactelemnet=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'Click me to visit Google '
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Custom/>
    {reactelemnet}
    <App />
  </>
)
