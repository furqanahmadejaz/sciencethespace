import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const  {dispatch} = useAuthContext()

    const signup  = async  (email, password) =>{
        setIsLoading(true)
        setError(false)

        const response = await fetch("http://localhost:4000/api/user/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        const json = response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        } else {
            localStorage.setItem("user", JSON.stringify(json))

            dispatch({type:"LOGIN",  payload: json})
            setIsLoading(false)

        }


    }
    return {signup, error, isLoading}
}
 
export default useSignup;