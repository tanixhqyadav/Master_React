import Login from './components/Login'
import Profile from './components/Profile'
import Tanishq from './components/Tanishq'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <>
    <UserContextProvider>
        {/* Tanishq yadav */}
        <Login/>
        <Profile/>
        <Tanishq/>
    </UserContextProvider>
    </>
  )
}

export default App
