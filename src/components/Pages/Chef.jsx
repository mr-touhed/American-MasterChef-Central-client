import { Link } from "react-router-dom";
import { AcademicCapIcon,  ClipboardDocumentCheckIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import LazyLoad from "react-lazy-load";
const Chef = ({chef}) => {
 
    const {id,name,numRecipes,experience,img,likes} = chef;
    return (
      
        <div className="card  glass">
  <figure>
  <LazyLoad height={300} offset={300} threshold={0.95}>
    <img src={img} alt="Album"/>
    </LazyLoad>
    </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="flex"> <AcademicCapIcon className="h-6 w-6 text-[#75135dba] me-2"/> experience: {experience}</p>
    <p className="flex"> <ClipboardDocumentCheckIcon className="h-6 w-6 text-[#75135dba] me-2"/> recipes: {numRecipes}</p>
    <p className="flex"><HandThumbUpIcon className="h-6 w-6 text-[#75135dba] me-2"/> Like: {likes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> <Link to={`/chef/${id}`}>View Recipes</Link></button>
    </div>
  </div>
</div>

    );
};

export default Chef;