import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from '../../services/apiService';
import { MyContext } from "../../context/myContext";
import { toast } from 'react-toastify';

import { CiSearch } from "react-icons/ci";
import { IoIosHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

function Header() {
    const { userData, userSignOut } = useContext(MyContext);
    const nav = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        nav(`/${searchInput}`); // Navigate to the user's profile
    };

    const logout = async () => {
        try {
            userSignOut()
            toast.info("You logged out bye bye");
            nav("/signin");

        } catch (error) {
            console.error("Error deleting token:", error);
        }

    };

    return (
        <div className="shadow-lg border-b-1 bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl  mx-auto ">
                {/* Left */}
                <div className='relative hidden w-24  cursor-pointer lg:inline-grid'>
                    <Link to={"/"} >
                        <img src="\images\webscapeLOGO22.png"
                            alt="logo"
                            className="object-contain w-full h-full"
                        />
                    </Link>
                </div>
                <div className='relative flex-shrink-0 w-10  cursor-pointer lg:hidden'>
                    <Link to={"/"} >
                        <img src="\images\webscapeLOGO.png"
                            alt="logo"
                            className="object-contain w-full h-full"
                        />
                    </Link>
                </div>

                {/* middle - search  */}
                <div className='relative mt-1 p-3 rounded-md '>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none' >
                        <CiSearch className='text-xl' />
                    </div>
                    <form onSubmit={handleSearch} >
                        <input
                            className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Search"
                        />

                    </form>
                </div>

                {/* right */}
                <div className='flex items-center justify-end space-x-4 px-3'>
                    <Link to="/"> <IoIosHome className='navBtn' /></Link>
                    <Link to={userData?.user_name}><FaUserAlt className='navBtn' /></Link>
                    <IoMenu className='h-10 w-10 md:hidden cursor-pointer' />
                    <FaCamera className='navBtn' />
                    <Link to={userData?.user_name}>
                        <img
                            src={"/images/person3.jpg"}
                            alt="picture"
                            className='h-10 rounded-full'
                        /></Link>

                </div>





            </div>
        </div>
    )
}

export default Header