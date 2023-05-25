import { useLoaderData } from "react-router-dom";
import Chef from "./Chef";



const ChefContainer = () => {
    const chefData = useLoaderData()
   
    const {chefs} = chefData;
    return (
        <div className="my-10 md:w-3/4 mx-auto">
            <h2 className="text-center text-4xl font-semibold ">Our Chef</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 container gap-9 mt-10">
            
            {
                chefs.map(chef => <Chef key={chef.id} chef={chef}/>)
            }
            
        </div>
        </div>
    );
};

export default ChefContainer;