import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from "../context/myContext";
import { useParams } from "react-router-dom";
import { doApiGet, URL } from '../services/apiService';

function Profile() {
    const { userData } = useContext(MyContext);
    const [userInfo, setUserInfo] = useState({});

    console.log(userData);
    const { userName } = useParams();


    const doApiPageUser = async (userName) => {
        try {
            console.log(userName)
            const url = URL + "/users/search?s=" + userName;
            console.log(url);
            const data = await doApiGet(url);
            setUserInfo(data);
            console.log(userInfo);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        doApiPageUser(userName);
    }, [userName])



    return (
        <div>
            <div>{userData._id}</div>
            <div>{userData.user_name}</div>
            <div>{userInfo.user_name}</div>
            <img src={userData.profilePic} alt="pic" />




        </div>

    )
}

export default Profile