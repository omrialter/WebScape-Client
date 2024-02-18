import { useEffect, useState } from "react";
import { TOKEN_KEY, URL, doApiGet } from "../services/apiService";

export const useUserData = () => {

  const [userData, setUserData] = useState({});


  const doApiUser = async () => {

    try {
      const url = URL + "/users/userInfo";
      const data = await doApiGet(url);
      setUserData(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage[TOKEN_KEY]) {
      doApiUser();
    }
  }, []);



  const userSignOut = () => {
    if (window.confirm("Are you sure you want to log out")) {
      deleteToken();
    }
  };

  const deleteToken = async () => {
    try {
      // setIsLoading(true);
      await localStorage.removeItem(TOKEN_KEY); // Remove the token from localStorage
      await localStorage.removeItem("tokenExpiration"); // Remove the token expiration time
      setUserData({});
      // window.location.href = "/signin";
      // setIsLoading(false);
    } catch (error) {
      console.error("Error deleting token:", error);
    }
  };

  return { userData, userSignOut };
};
