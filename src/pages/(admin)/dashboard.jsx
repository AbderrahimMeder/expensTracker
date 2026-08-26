import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Dashboard(){
    const navigate = useNavigate()
    useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log(token)
    if(!token){
        navigate('/login')
        return
    }
    fetch("http://localhost:8000/api/current-user",{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.status !==200){
        navigate('/login')
      }
    }).catch(err => {
      navigate('/login')
    })
  },[])
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}