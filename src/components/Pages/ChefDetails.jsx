import { AcademicCapIcon, ClipboardDocumentCheckIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const ChefDetails = () => {
  const data = useLoaderData();
 
  const { description, experience, img, likes, name, numRecipes, recipes } =
    data;
  return (
    <div className=" mt-10 container ">
      <figcaption className=" details-img">
        <img src={img} alt=""  className=""/>
      </figcaption>
      <h2 className="text-center font-semibold text-6xl my-6">{name}</h2>
      <div className="md:flex md:pl-36  ">
        <div className="md:w-2/4   md:mt-64">
            <div className="text-4xl space-y-4">
            <p className="leading-snug"> <span className="text-6xl text-gray-600 mb-8 ">About :</span> {description}</p>
          <div className="flex text-gray-600 items-center mt-8">
            
            <AcademicCapIcon className="h-8 w-8 text-[#75135dba] me-2" />
            experience: {experience}
          </div>
          <div className="flex text-gray-600 items-center">
            
            <ClipboardDocumentCheckIcon className="h-8 w-8 text-[#75135dba] me-2" />
            recipes: {numRecipes}
          </div>
          <div className="flex text-gray-600 items-center">
            <HandThumbUpIcon className="h-8 w-8 text-[#75135dba] me-2" /> Like:
            {likes}
          </div>
            </div>
        
        </div>
        <div  className="border-l-2 md:pl-10">
            <h2 className="text-center text-2xl text-[#75135dba]">recipes</h2>
            {
                recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe}/>)    
            }
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
