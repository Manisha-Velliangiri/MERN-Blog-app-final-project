import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useState } from "react"




const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [user, setUser] = useState(null);
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  //const showMenu=()=>{
  //  setMenu(!menu)
  //}
  
   
    //const {user}=useContext(UserContext)
    
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
    {path==="/" && <div className="flex justify-center items-center space-x-0">
    <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch/></p>
    <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 " placeholder="Search a post" type="text"/>
    
    </div>}
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div >
        <p className="cursor-pointer relative"><FaBars/></p>
        
      </div>:<h3><Link to="/register">Register</Link></h3>}
    </div>
    <div  className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
     
    </div>

    </div>
  )
}

export default Navbar 