import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { Router, useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function profilePage(){
    const router = useRouter()
    const[userData,setUserData] = useState("")
    const id = router.query.user


    
    useEffect(()=>{
        axios.get(`http://localhost:3003/user/${id}`)
        .then((res)=>{
            setUserData(res.data)
            
        })
    },[])


    console.log(userData)

    return(
        <>
            <div className="flex flex-wrap flex-col justify-center items-center h-[100vh]">
                <h1 className="text-[40px] font-bold mb-5">Welcome {userData.name} on your Profile!</h1>
                <div className="w-[400px] h-[auto] shadow-2xl border-[3px] p-4 rounded-xl">
                    
                    <img src={`http://localhost:3003/${userData.imgpath}`}></img>
                    <h1 className="text-center font-semibold text-[20px] m-2">Name :- {userData.name}</h1>
                    <h2 className="text-center font-semibold text-[20px] m-2">Email :- {userData.mail}</h2>
                    <h2 className="text-center font-semibold text-[20px] m-2">Date of Birth :- {userData.dob}</h2>
                    <h2 className="text-center font-semibold text-[20px] m-2">Gender:- {userData.gender}</h2>

                </div>
                <div>
                    <Link href={`/${id}/update`}><button className="p-3 bg-orange-400 rounded-md m-3">Update</button></Link>
                    <Link href={`/${id}/delete`}><button className="p-3 bg-orange-400 rounded-md m-3">Delete</button></Link>

                </div>
            </div>
        </>
    
    )

}