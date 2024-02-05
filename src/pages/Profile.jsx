import React, { useContext } from 'react'
import { MyContext } from "../context/myContext";
import { useParams } from "react-router-dom";

function Profile() {
    const { userData } = useContext(MyContext);
    console.log(userData);

    return (
        <div>
            <div>{userData._id}</div>
            <div>{userData.user_name}</div>


        </div>

    )
}

export default Profile