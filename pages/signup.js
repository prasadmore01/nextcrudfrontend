import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

export default function signup() {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")
    const [file, setFile] = useState("")
    const [nerr, setNerr] = useState("")
    const [merr, setMerr] = useState("")
    const [perr, setPerr] = useState("")


    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', file)

        axios.post("http://localhost:3003/user/signup", {
            name: name,
            mail: mail,
            password: pass,
            imgpath: file.name,
            gender: gender,
            dob: date
        }).then((res) => {
            alert("Registration Successfull!")
            router.push("/login")
        }).catch((err => {
            setNerr(() => {
                return <div className="text-red-500 pl-3">{err.response.data.name}</div>
            })
            setMerr(() => {
                return <div className="text-red-500 pl-3">{err.response.data.mail[0]}<br />{err.response.data.mail[1]}</div>
            })
            setPerr(() => {
                return <div className="text-red-500 pl-3">{err.response.data.password[0]}<br />{err.response.data.password[1]}</div>
            })
        }))


        axios.post("http://localhost:3003/user/upload", formData)
            .then((res) => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="flex justify-center mt-4 ">

            <form className="w-[300px] shadow-2xl p-5" encType="multipart/form-data">
                <h1 className="text-center font-bold text-[30px] mb-3">Sign Up</h1>
                <input type="text" className="p-2 pl-5 rounded-[100px] shadow-lg mb-3" placeholder="Enter Your Name " value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
                {nerr}<br />

                <input type="text" className="p-2 pl-5 rounded-[100px] shadow-lg mb-3" placeholder="Enter Your Mail " value={mail} onChange={(e) => { setMail(e.target.value) }} /> <br />
                {merr}<br />

                <input type="text" className="p-2 pl-5 rounded-[100px] shadow-lg mb-3" placeholder="Enter Your Password " value={pass} onChange={(e) => { setPass(e.target.value) }} /> <br />
                {perr}<br />

                <label>Gender</label>
                <input className="m-3" type="radio" name="gender" value="Male" onChange={(e) => { setGender(e.target.value) }} />
                <label>Male</label>
                <input className="m-3" type="radio" name="gender" value="Female" onChange={(e) => { setGender(e.target.value) }} />
                <label>Female</label> <br />

                <label className="m-4">Select Date of Birth</label>
                <input className="m-4 border border-black p-3" type="date" onChange={(e) => { setDate(e.target.value) }} /> <br />

                <label className="m-4">Upload Your Profile Image</label>
                <input className="m-4" type="file" onChange={(e) => { setFile(e.target.files[0]) }} />

                <div className="flex justify-center">
                    <button type="submit" onClick={handleSubmit} className="p-2 bg-orange-500 m-4 pr-3 pl-3 rounded-lg">Submit</button>
                </div>
            </form>
        </div>

    )

}