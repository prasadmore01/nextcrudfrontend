import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"


export default function login(){
    
        const[mail,setMail] = useState("")
        const[pass,setPass] = useState("")
        const[tokens,setToken] = useState("")
        const[uname,setUname] = useState("")
        const[img,setImg] = useState("")
        const[err,setErr] = useState("")
        let navigate = useRouter()
     
        const handleSubmit = async (e) => {
            
        e.preventDefault()
        
           await axios.post("http://localhost:3003/user/login",{
                "mail":mail,
                "password":pass,
                headers:{
                    "Content-type":"application/json",
                }
            })
                .then((res) => {
                    setToken(res.data.token)
                    setUname(res.data.uname)
                    console.log(res.data.id)
                    if(res.data.token.length>0){
                
                        navigate.push(`/${res.data.id}/profile`)
                        }
                    setImg(res.data.imgp)
                }).catch(err => {
                    console.log("Error Occurred!")
                })
        }
    
        useEffect(()=>{{
            setToken(tokens)
            sessionStorage.setItem("auth",tokens)
        }})
        
        
        return(
            <div className="flex justify-center mt-4">

                <form className="w-[300px] shadow-2xl p-5">
                    
                    <input type="email" placeholder="Enter Your Email:" value={mail} onChange={(e)=>setMail(e.target.value)} className="p-2 pl-5 rounded-[100px] shadow-lg mb-3"/> <br/>
                    
                    <input type="password" placeholder="Enter Your Password:" value={pass} onChange={(e)=>setPass(e.target.value)} className="p-2 pl-5 rounded-[100px] shadow-lg mb-3"/> <br/>
                    
                    <button type="submit" onClick={handleSubmit} className="text-md p-4 bg-orange-400 m-2 rounded-lg">Log In</button>
                </form>
            </div>
    
        )
    }

