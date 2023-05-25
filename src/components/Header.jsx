import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const {user,LogOut} = useContext(AuthContext)
  
    return (
        <div className="navbar bg-base-100 justify-between flex-col md:flex-row">
  <div className="">
    <a className="btn btn-ghost normal-case text-xl">American MasterChef</a>
  </div>
  <ul className="menu menu-horizontal px-1">
      <li> <NavLink className={({isActive}) => isActive ? "active" : "menu"} to="/">Home</NavLink> </li>
      <li> <NavLink className={({isActive}) => isActive ? "active" : "menu"} to="/blog">Blog</NavLink> </li>
     
      
    </ul>
  <div className="flex-none">
    
    <div >
      {
        user ? <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user.photoURL} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
          <li>{user.displayName}</li>
          <li><a onClick={LogOut}>Logout</a></li>
        </ul>
      </div> : <Link className="btn btn-secondary" to="/login">Login</Link>
      }
    </div>
  </div>
</div>
    );
};

export default Header;