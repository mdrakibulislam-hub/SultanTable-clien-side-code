import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed></Text>

                <Text style={styles.text}>




                    1. Differences between uncontrolled and controlled components. <br />

                    Uncontrolled components are typically inputs or elements in a system that are not directly managed or manipulated by the system itself. They can include things like user inputs, environmental factors, or random events that impact the system but are not under its direct control.
                    In contrast, controlled components are those that are managed or manipulated directly by the system. These components can include things like the software code of a program, the hardware components of a device, or the physical processes used in a manufacturing system.
                    Overall, the key difference between uncontrolled and controlled components is that the former are external to the system and beyond its direct control, while the latter are internal and can be actively managed and manipulated by the system itself.


                    <br />


                    2. How to validate React props using PropTypes? <br />

                    PropTypes is a library in React that allows us to validate the props passed to a component. We use it by defining the expected types and requirements for each prop using the propTypes object attached to the component class.
                    <br />



                    3. difference between nodejs and express js? <br />

                    Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript.
                    Express.js, on the other hand, is a web application framework for Node.js that simplifies the process of building web applications. It provides a set of tools and features that allow developers to easily create robust and scalable web applications using Node.js. <br />

                    4. What is a custom hook, and why will you create a custom hook? <br />

                    In React, a custom hook is a function that allows you to extract reusable logic from a component and share it across multiple components. Custom hooks are created by using the use prefix followed by a descriptive name.
                    creating a custom hook can make your code more efficient, reusable, and easier to understand and maintain, particularly for complex or repetitive tasks that are used in multiple places throughout your application.




                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default PDFFile;