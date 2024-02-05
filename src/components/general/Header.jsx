import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from '../../services/apiService';
import { MyContext } from "../../context/myContext";
import { toast } from 'react-toastify';


function Header() {
    const { userData, userSignOut } = useContext(MyContext);
    const nav = useNavigate();



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
        <header className="px-5 sticky top-0 z-10 py-5 bg-teal-500 shadow-md">
            <div className="flex justify-between items-center w-4/5 mx-auto">
                <div >
                    <h2 className="text-4xl px-5" >WebScape</h2>
                </div>
                <nav>{userData._id &&
                    <ul className="flex justify-evenly">
                        <Link className="text-2xl px-2 hover:text-blue-500" to={"/"}><li>Home</li></Link>
                        <Link className="text-2xl px-2 hover:text-blue-500" to={userData.user_name}><li>Profile</li></Link>
                        <Link className="text-2xl px-2 hover:text-blue-500" to={"/about"}><li>About</li></Link>

                    </ul>

                }
                </nav>
                <div>
                    {localStorage[TOKEN_KEY] && userData ? (<>
                        <button className="text-2xl px-5" onClick={logout} >Log out</button>
                    </>)
                        : (<>
                            <Link className="text-2xl px-5 hover:text-blue-500" to={"/signin"}><button>Sign in</button></Link>

                        </>
                        )
                    }

                </div>
            </div>
        </header>
    )
}

export default Header