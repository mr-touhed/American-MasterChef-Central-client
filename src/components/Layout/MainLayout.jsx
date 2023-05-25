import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { ThreeDots } from "react-loader-spinner";

const MainLayout = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    return (
        <div >
            <Header/>
            <div className="min-h-[calc(100vh-243px)] container w-full">
                
                    {
                      navigation.state === "loading" ? <ThreeDots 
                      height="500" 
                      width="500" 
                      radius="9"
                      color=" #FFFF00" 
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{marginLeft: "25%"}}
                      wrapperClassName=""
                      
                      visible={true}
                       /> :   <Outlet/>}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;