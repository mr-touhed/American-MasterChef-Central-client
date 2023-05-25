import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Recipe = ({recipe}) => {
    const {name,ingredients,cookingMethod} = recipe;
    const [favorite, setFavorite] = useState(false)


    const notify = () =>{
        toast("Added your favorite Recipe")
        setFavorite(true)
    };
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl py-4 my-5">
  <div className="card-body ">
        <h2 className="text-center text-2xl font-semibold text-[#75135dba]" >{name}</h2>
        <div className="space-y-5 leading-5">
            <h2 className="underline">ingredients</h2>
            <ul className="list-disc">
                {
                    ingredients.map(item => <li key={item} className="text-[#75135dba]">{item}</li>)
                }
            </ul>
            <h2 className="text-3xl">Method :</h2>
            {
                cookingMethod.map(item => <span key={item}>{item}</span>)
            }
            
        </div>
        <div className="flex">rating: <Rating
      style={{ maxWidth: 90, marginLeft: "10px"}}
      value={4}
      readOnly
    /> 4</div>
        <button className="btn bg-[#75135dba] hover:bg-[#75135d]" onClick={notify} disabled={favorite}> Favorite</button>
        <ToastContainer />
  </div>
</div>
    );
};

export default Recipe;