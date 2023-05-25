import { Document,Page,Text,StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body:{
        paddingTop: 40,
        paddingHorizontal: 40,
        paddingBottom: 70
    },
    header:{
        fontSize: 35,
        textAlign: "center",
        display:"Block"
    },
    box:{
        marginVertical: 15,
        padding:25,
        display: "block"
    },
    title:{
        fontSize: 25,
        display: "block",
        marginBottom: 15
    },
    text:{
        textAlign:"justify",
        lineHeight: 2,
        display: "block"

    }

})


const PDF = () => {
    return (
        <Document>
            <Page style={styles.body}>
                
            <Text style={styles.header}>answer the following questions</Text>
            <Text style={styles.box}>
                <Text style={styles.title}>Tell us the differences between uncontrolled and controlled components.</Text>
                <Text style={styles.text}>Controlled components are components whose behavior is fully controlled by the application's state management, while uncontrolled components are components whose state is managed by the component itself. The main difference between the two approaches is that controlled components offer more predictability and control for the application, while uncontrolled components offer more flexibility and simplicity. Controlled components are useful in complex forms or data-driven applications</Text>
            </Text>
            <Text style={styles.box}>
                <Text style={styles.title}>How to validate React props using PropTypes</Text>
                <Text style={styles.text}>When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console</Text>
            </Text>
            <Text style={styles.box}>
                <Text style={styles.title}>Tell us the difference between nodejs and express js.</Text>
                <Text style={styles.text}>Node.js is a runtime environment for running JavaScript on the server-side, while Express.js is a web framework built on top of Node.js that provides a set of abstractions and features for building web applications. Node.js is more low-level, while Express.js is more high-level and provides more structure and functionality for building web applications.</Text>
            </Text>
            <Text style={styles.box}>
                <Text style={styles.title}>What is a custom hook, and why will you create a custom hook?</Text>
                <Text style={styles.text}>A custom hook is a function in React that allows you to encapsulate reusable logic that can be shared between components. Custom hooks are created by using the existing React hooks or other custom hooks. They are prefixed with the word use to indicate that they are hooks.</Text>
            </Text>
            </Page>
        </Document>
    );
};

export default PDF;