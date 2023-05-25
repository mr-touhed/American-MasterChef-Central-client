
import HeaderBanner from "./HeaderBanner";
import ChefContainer from "./ChefContainer";
import FaberContent from "./FaberContent";
import FoodSlider from "./FoodSlider";


const Home = () => {
    
    
    return (
        <div>
            <HeaderBanner/>
           
    
            <div className="bg-slate-200 border rounded-sm">
            <ChefContainer/>
           
            </div>
            <FaberContent/>
            <FoodSlider/>
        </div>
    );
};

export default Home;