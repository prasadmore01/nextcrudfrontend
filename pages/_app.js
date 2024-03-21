import Header from "@/components/Header";
import "@/styles/globals.css";
import { useEffect, useState } from "react"
import { useRouter } from "next/router"


export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("auth");
    if (storedAuth) {
      setAuth(storedAuth);
    } else {
      router.replace("/login"); // Redirect to login page if not authenticated
    }
  }, []);
  
  const handleLogout = () => {
    setAuth(""); // Clear the authentication status
    sessionStorage.removeItem("auth"); // Remove token from sessionStorage
    router.replace("/login"); // Redirect to login page after logout
  };
  return (
    <>
      <Header isLoggedIn={auth.length > 0} onLogout={handleLogout}/>
      <Component {...pageProps} />
    </>
  )
}
