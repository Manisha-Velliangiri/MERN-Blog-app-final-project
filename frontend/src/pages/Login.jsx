import { Link } from "react-router-dom"
import Footer from "../components/Footer"


const Login = () =>{
    return (

         <>
<div className="flex items-center mt-2 justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
      <h3><Link to="/register">Register</Link> </h3>
</div>
         <div className="w-full flex justify-center items-center h-[70vh] ">
          <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
            
            <h1 className="text-xl font-bold text-left">Log in to continue</h1>
           
            <input className="w-full px-4 py-2 border-2 border-black outline-0" placeholder="Enter your Email" type="text" />
            <input className="w-full px-4 py-2 border-2 border-black outline-0" placeholder="Enter your Password" type="password" />
            <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">Log in</button>
          
          <div className="flex justify-center items-center space-x-2">
            <p className="">New here?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/Register">Register</Link></p>
          </div>
          </div>
        </div>
        <Footer/>
         </>

        
    )
}
export default Login