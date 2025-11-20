import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus=useSelector( (state) => state.auth.status)
  // !here we are checking the status of user that he is logedin or not 
  const navigate =useNavigate()

  const navItems = [
    // !in this what we are doing that we are checking that what to show to the user ex like if user is logedin then why to show to login button 
    // ! the status we are getting from use selector from state auth 
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {/* here we are rendering them using map function to render them with a condition if the item is active then to show */}
            {navItems.map( (item) =>
            item.active ? (
              <li key={item.name}>
                {/*here onclicking we are navigating to the site with slug */}
                <button  onClick={ () => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}
                </button>
              </li>
            ) : null
            )}
            {authStatus && (
              // here it is if you are authentictaed then show logout or else mat dikao 
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header