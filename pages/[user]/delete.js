import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

function DeleteUser() {
    const [userid, setUserid] = useState("")
    const navigate = useRouter()

    const handleSubmit = (e) => {
            e.preventDefault()
            axios.delete("http://localhost:3003/user/delete/" + userid)
                .then((res) => {
                    alert("Your Profile Deleted Successfully!")
                    setUserid("")
                    sessionStorage.removeItem("auth");
                    navigate.push("/")
                }).catch(err => {
                    alert("Please Enter the Valid User Id!")
                })

    }



    return (

        <>
        <h1 className="text-[35px] text-center font-bold m-10">Delete Profile</h1>
     
        <div className="flex justify-center mt-4">
            <form className="w-[300px] shadow-2xl p-5">

                <input type="text" placeholder="Enter Your Id to Delete:" value={userid} onChange={(e) => setUserid(e.target.value)} className="w-[80%] h-6 p-5 border border-black rounded-lg m-2" /> <br />

                <button type="submit" onClick={handleSubmit} className="text-md p-4 bg-orange-400 m-2 rounded-lg">Delete Profile</button>
            </form>
        </div>
        </>
    )


}

export default DeleteUser