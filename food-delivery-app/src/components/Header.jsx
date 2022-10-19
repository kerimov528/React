import React from 'react'
import Logo from "../img/logo.png";
import { Link } from 'react-router-dom'
import { MdShoppingBasket, MdAdd } from 'react-icons/md'

const Header = () => {
    return (
        <div className='fixed w-screen bg-slate-300 p-6 px-14'>
            {/* {deskop && laptop} */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold"> City</p>
                </Link>


                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8 ml-auto'>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                    </ul>
                    <div
                        className="relative flex items-center justify-center"
                    >
                        <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
                        <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <Link to={"/createItem"}>
                            <p
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                            >
                                New Item <MdAdd />
                            </p>
                        </Link>

                        <p
                            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                        >
                        </p>
                    </div>


                </div>



                {/* {mobile} */}
            </div>
        </div >
    )
}

export default Header
