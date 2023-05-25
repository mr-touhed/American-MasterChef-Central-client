import { useEffect, useState } from "react";
import Feber from "./Feber";

const FaberContent = () => {
    const [faber, setFaber] = useState([])
    useEffect(()=>{
        fetch('https://american-master-chef-central-server-mr-touhed.vercel.app/faber')
        .then(res => res.json())
        .then(data => setFaber(data))
    },[])
    console.log(faber);
    return (
        <div className="my-8">
            <h2 className="text-center text-4xl font-semibold">Why Chef Feber ?</h2>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
                {
                    faber.map(faber => <Feber key={faber.id} faber={faber}/>)
                }
            </div>
        </div>
    );
};

export default FaberContent;