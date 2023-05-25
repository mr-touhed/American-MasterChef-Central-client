import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/banner.jpg"
import { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";
const SignUp = () => {
    const [error,setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // handel form submit 
    const handelSubmit = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo_url.value;
        const password = form.password.value;
        
        if(password.length < 6){
            return setError('password must be up to 6 charecter')
        }
        createUser(name,email,photo,password)
        form.reset()
        navigate(from, {replace:true})
    }
    
   
    return (
        <div className="container  bg-gray-500 p-16 md:flex justify-between  mt-8">
                
            <form className="md:w-[400px] flex-1 " onSubmit={handelSubmit}>
            <h2 className="text-center mb-11 text-white font-extrabold text-4xl">Please Registation</h2>
                <div className="flex justify-between items-center mb-8">
                    <label htmlFor="" className="text-white mr-8">Name</label>
                <input type="text" placeholder="Enter Your Name" className="input w-full max-w-xs" name="name" required/>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <label htmlFor="" className="text-white mr-8">Email</label>
                <input type="email" placeholder="Enter Your Email" className="input w-full max-w-xs" name="email" required/>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <label htmlFor="" className="text-white mr-8">Photo Url</label>
                <input type="text" placeholder="Enter Your Photo URL" className="input w-full max-w-xs" name="photo_url" required/>
                </div>
                <div className="flex justify-between  items-center">
                    <label htmlFor="" className="text-white mr-8">Password</label>
                <input type="password" placeholder="Enter Your Password" className="input w-full max-w-xs "  name="password" required/>
                </div>
                <p className="text-red-500">{error && error}</p>
                <input type="submit" placeholder="Enter Your Password" className="input mx-auto block max-w-xs mt-10" value="Submit" />
                
                <h2 className="text-white mt-6">If you have alrady account ?? please <Link className="text-secondary underline" to="/login"> Login</Link> </h2>
            </form>
            <div className="md:w-[800px] md:ml-10 rounded-md overflow-hidden ">
                {/* <h2 className="text-center  mb-8 font-semibold text-5xl">Log in With</h2> */}
                <img src={logo} alt="" className="" />
            
            </div>
        </div>
    );
};

export default SignUp;