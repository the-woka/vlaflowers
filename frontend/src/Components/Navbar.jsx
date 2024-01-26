import React, {useState} from 'react'
import logo from './Assets/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar flex mt-5'>
        <div className="nav-logo flex-none w-16 h-16">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu grow h-16 flex justify-center items-center">
            <li onClick={() => {setMenu("home")}} className='mx-6 cursor-pointer no-underline hover:underline transition duration-150 ease-in-out hover:transition-all'>Home {menu==="home"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("hampers")}} className='mx-6 cursor-pointer no-underline hover:underline transition duration-150 ease-in-out hover:transition-all'>Hampers {menu==="hampers"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("others")}} className='mx-6 cursor-pointer no-underline hover:underline transition duration-150 ease-in-out hover:transition-all'>Others {menu==="others"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("about")}} className='mx-6 cursor-pointer no-underline hover:underline transition duration-150 ease-in-out hover:transition-all'>About {menu==="about"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-user-cart flex w-36 h-16 justify-between items-center">
            <button className='login mx-3 cursor-pointer border border-slate-400 rounded-md px-5 py-3 hover:bg-zinc-300 active:bg-zinc-400'>Login</button>
            <h1 className='shopping-cart ml-3 cursor-pointer'><ShoppingCartOutlinedIcon/></h1>
            <div className="cart-count bg-red-500 text-xs rounded-full px-1 -mt-4 -ml-2">0</div>
        </div>
    </div>
  )
}

export default Navbar