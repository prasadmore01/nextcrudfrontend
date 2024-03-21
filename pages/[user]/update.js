import { useState } from "react"
import axios from "axios"

export default function UpdateUsers() {

    const [userid, setUserid] = useState("")
    const [mail, setMail] = useState("")

    const handleSubmit = (e) => {
            e.preventDefault()

            axios.put(`http://localhost:3003/user/update/${userid}`,{
                "mail":mail
            })
                .then((res) => {
                    alert("Email Successfully Updated!")
                    setUserid("")
                    setMail("")
                    
                }).catch(err => {
                    console.log(err + " this error occured!")
                })
        

    }



    return (
        <>
            <h1 className="text-[35px] text-center font-bold m-10">Update Profile</h1>
        
       
        <div className="flex justify-center mt-4">
            <form className="w-[300px] shadow-2xl p-5">

                <input type="text" placeholder="Enter Your User ID:" value={userid} onChange={(e) => setUserid(e.target.value)} className="w-[80%] h-6 p-5 border border-black rounded-lg m-2" /> <br />

                <input type="text" placeholder="Enter New Email to Update:" value={mail} onChange={(e) => setMail(e.target.value)} className="w-[80%] h-6 p-5 border border-black rounded-lg m-2" /> <br />'

                <button type="submit" onClick={handleSubmit} className="text-md p-4 bg-orange-400 m-2 rounded-lg">Update Profile</button>
            </form>
        </div>
        </>
    )


}

