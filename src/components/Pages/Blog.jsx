import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../../PDF/PDF";

const Blog = () => {
   
    
    return (
        
        <div className="space-y-5 w-3/4 mx-auto my-10">
            <h2 className="text-center text-4xl ">answer the following questions</h2>
            <div>
                <h4 className="text-xl font-semibold">Tell us the differences between uncontrolled and controlled components.</h4>
                <p>Controlled components are components whose behavior is fully controlled by the application`s state management, while uncontrolled components are components whose state is managed by the component itself. The main difference between the two approaches is that controlled components offer more predictability and control for the application, while uncontrolled components offer more flexibility and simplicity. Controlled components are useful in complex forms or data-driven applications</p>
            </div>
            <div>
                <h4 className="text-xl font-semibold">How to validate React props using PropTypes</h4>
                <p>When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console</p>
            </div>
            <div>
                <h4 className="text-xl font-semibold">Tell us the difference between nodejs and express js.</h4>
                <p>Node.js is a runtime environment for running JavaScript on the server-side, while Express.js is a web framework built on top of Node.js that provides a set of abstractions and features for building web applications. Node.js is more low-level, while Express.js is more high-level and provides more structure and functionality for building web applications.</p>
            </div>
            <div>
                <h4 className="text-xl font-semibold">What is a custom hook, and why will you create a custom hook?</h4>
                <p>A custom hook is a function in React that allows you to encapsulate reusable logic that can be shared between components. Custom hooks are created by using the existing React hooks or other custom hooks. They are prefixed with the word use to indicate that they are hooks.</p>
            </div>
            
            <PDFDownloadLink document={<PDF/>} fileName="blogAnswer">
                {({loading}) => loading ? <button className="btn btn-warning" disabled> Loading....</button> : <button className="btn " >DownLoad Pdf</button>}
            </PDFDownloadLink>
        </div>
        
    );
};

export default Blog;