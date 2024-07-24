import { useEffect, useState } from "react";


const useFetch = (url) => {

    const[data,setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw Error('Error : cannot fech the data.');
                }
                return res.json();
                
            }).then((data)=>{
                setData(data);
                setIsPending(false);
            })
            .catch((err) =>{
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);

    return {data,error,isPending};
}
 
export default useFetch;