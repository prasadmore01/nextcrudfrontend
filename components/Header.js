import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function Header({isLoggedIn,onLogout}) {
    console.log(isLoggedIn);
    const[auth,setAuth] = useState("")
    const navigate = useRouter()
    
    useEffect(()=>{
        setAuth(sessionStorage.getItem('auth'))
    },[])

    const handleLogout = () => {
        // setToken(""); 
        sessionStorage.removeItem("auth"); 
        navigate.push("/login")

      };
    
    return (
        <nav className="w-[100%] h-[60px] bg-orange-400 flex flex-wrap justify-between">
            <div className="p-5 font-bold text-[20px]">
                <h1>LOGO</h1>
            </div>
            <div>
                {isLoggedIn?

                    (<div className="p-5 font-bold flex gap-4" >
                    <Link href="/login" onClick={handleLogout}>Log Out</Link>
                    </div>)
                    :
                   ( <div className="p-5 font-bold flex gap-4">
                    <Link href="/signup">Sign Up</Link>
                    <Link href="/login">Log In</Link>
                    </div>)
                }
            </div>
        </nav>
    )
}