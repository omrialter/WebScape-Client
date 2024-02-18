import { useState } from 'react'
import Router from "../src/routes/Router";
import { MyContext } from "../src/context/myContext";
import { useUserData } from "../src/hooks/useUserData";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  const { userData, setUserData, userSignOut } = useUserData();
  const [loading, setIsLoading] = useState(false);
  return (
    <MyContext.Provider value={{
      userData, setUserData, userSignOut, loading
    }}>
      {loading && <LoadingPage />}
      <Router />
      <ToastContainer theme='colored' />

    </MyContext.Provider>
  )
}

export default App
