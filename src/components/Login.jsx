import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Login = () => {
    const [error,setError] = useState('')
    let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
    const {logInWithGoogle ,signInUser,loginGitHub} = useContext(AuthContext)
    const handelSignIn = (e) =>{
        e.preventDefault()
        setError('')
       
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signInUser(email,password)
        .then(result => {
            navigate(from, { replace: true })
        })
        .catch(err =>  setError(err.message))
        
        form.reset()
        
        
    }
    const gitHubSing =() =>{
        loginGitHub()
        .then(result => {
            navigate(from, { replace: true })
        })
        .catch( err => setError(err.message))
    }
    const googleSign = () =>{
        logInWithGoogle()
        .then(result => {
            navigate(from, { replace: true })
        })
        .catch( err => setError(err.message))
       
    }

    
    return (
        <div className="container  bg-gray-600 p-16 md:flex justify-between md:px-80 mt-8">
                
            <form className="md:w-[400px] " onSubmit={handelSignIn}>
            <h2 className="text-center mb-11 text-white font-extrabold text-4xl">Please Login</h2>
                <div className="flex justify-between items-center mb-8">
                    <label htmlFor="" className="text-white mr-8">Email</label>
                <input type="text" placeholder="Enter Your Email" className="input w-full max-w-xs" name="email" required/>
                </div>
                <div className="flex justify-between  items-center">
                    <label htmlFor="" className="text-white mr-4">Password</label>
                <input type="text" placeholder="Enter Your Password" className="input w-full max-w-xs" name="password" required/>
                </div>
                
                <input type="submit" placeholder="Enter Your Password" className="input mx-auto block max-w-xs mt-10" value="Submit" />
                <p className="text-red-400">{error && error}</p>
                <h2 className="text-white mt-6">If you are new to  American Master Chef ??? Please registation <Link className="text-secondary underline" to="/registation"> Registation</Link> </h2>
            </form>
            <div className=" ">
                <h2 className="text-center text-white mb-8 font-semibold text-5xl">Log in With</h2>
            <div className="flex flex-col gap-6">
            <button className="btn btn-outline btn-secondary" onClick={googleSign}> Log in With Google</button>
            <button className="btn btn-outline btn-secondary" onClick={gitHubSing}> Log in With Github</button>
            </div>
            </div>
        </div>
    );
};

export default Login;