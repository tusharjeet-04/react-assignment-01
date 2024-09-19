import React from 'react'
import './Section.css'
const Section = () => {
    return (
        <>
            <div className="Icons">
                <div className="angular box"></div>
                <div className="react box"></div>
                <div className="vue box"></div>
            </div>
            <div className="paragraph">
                <div className="about">
                    <h2>About the course</h2>
                <p>React.js is a powerful JavaScript library developed by Facebook for building interactive and dynamic user interfaces, primarily for single-page applications (SPAs).<br/>It follows a component-based architecture, allowing developers to create reusable UI elements, which simplifies the development of complex applications. React utilizes a Virtual DOM, which optimizes performance by efficiently updating only the parts of the interface that change, rather than re-rendering the entire page. <br/>With features like JSX for writing HTML within JavaScript and React hooks for managing state and lifecycle methods in functional components, React offers a flexible and efficient way to build responsive, fast, and scalable web applications. Its wide ecosystem, including tools like React Router for navigation and Redux for state management, makes it a popular choice among developers for modern web development.
                </p>
                </div>
                <div className="learn">
                    <h2>What You Will Learn?</h2>
                    <p>By learning React.js, you will gain the skills to build dynamic, interactive user interfaces using a component-based architecture. You'll understand how to manage state and props to control the behavior of individual components, and how to efficiently handle data and UI changes using hooks like useState and useEffect.<br/> You will become proficient in rendering reusable components and integrating APIs to fetch and display data dynamically. Additionally, you will explore routing, allowing for seamless navigation in single-page applications using React Router. React’s Virtual DOM will help you optimize performance, while tools like Redux or the Context API will enhance your ability to manage global state in larger applications. <br/>You will also learn modern JavaScript practices and be able to style components effectively. Ultimately, React will enable you to create fast, scalable, and maintainable web applications while preparing you for roles in the highly sought-after field of front-end development.</p>
                </div>
                <div className="outcome">
                    <h2>Outcome Of React JS</h2>
                    <p>The outcome of learning React.js is the ability to build modern, fast, and dynamic web applications using a component-based architecture. React empowers developers to create reusable and efficient UI components, manage state seamlessly, and handle real-time data with ease. By mastering React, you'll gain a strong understanding of how to optimize application performance with the Virtual DOM and memoization techniques, as well as how to implement routing for single-page applications.<br/> React opens up career opportunities in front-end development, making you a valuable asset in the tech industry, as the demand for React developers is high. Additionally, with React, you'll be equipped to build cross-platform applications using tools like React Native, enhancing your versatility as a developer.</p>
                </div>
            </div>
        </>
    )
}

export default Section