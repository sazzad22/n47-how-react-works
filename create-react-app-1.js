//todo 47-1 Module Introduction Create React App under the hood

//npm - node package manager, eta diye react er different package install , unstall , delete etc kora hoy
//npx- eta dui ta step ekbare kore. Install and create project/execute. check kore dekhe install kora ache kina, na kora thakle install kore niye create project(execute) kore

//create react app - eta ekta single page react application supported by react developers. eta react based web application er jonno ekta full environment create kore dey. Give full developer experience.

//todo 47-2 What is JSX, React Component, babel transpiler

//?JSX- JavaScript XML
// https://reactjs.org/docs/jsx-in-depth.html

// ?JSX has the following advantages:

/* JSX helps us in keeping our code simpler and elegant when writing large pieces of code.

According to the React docs, most people find it helpful as a visual aid when working with UI inside the JavaScript code.

JSX also allows React to show more useful error and warning messages.
If one is familiar with HTML, it is quite easy to use JSX when building React application

Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript. */

//?What is the difference between JSX and Babel?
//Babel is a transpiler that turns input code into "pure" JavaScript. JSX is a syntax sugar over JavaScript.


//todo 47-3 Components and how props works, unidirectional data flow

//? components -
//Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.

//similar in look but different in data, similar or unique type sections in ui of a website

//component 2 type er  - functional and class

//?props - er throung data ek comp theke onno comp e pathano jay. data object dishebe jay

//? Unidirectional flow
// react er performance valo howar ekta karon holo er data er unidirectional flow
// root component theke ,parent and parent theke child component e data pathano jay props er maddhome
function App() {
    return (
      <div className="App">
        <Device name="uphone" price="15000"></Device>
        <Watch></Watch>
      </div>
    );
}
  
// parent comp
const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

//chile comp
const DeviceDetail = (props) => {
    return (
        <div>
            <p>Price: {props.price}</p>
        </div>
    );
};

//here props er value is read only value. Kono change possible na


//todo 47-4 (advanced) How states works, asynchronous, console state

//in the component below useState hook is used to increase the steps number when a button is clicked
//here setSteps func ke jokhon call kora hochhe she state er ekta action ke dispatch kortese
//? setSteps function ta asynchronous
// code shob run shesh e ui update hochhe

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect( ()=>{
        console.log(steps);
    }, [steps]);

    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour............</button>
            <Display name="garmin" steps={steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

//todo 47-5 How React Hook works, send state via props , props vs state

//there are several hooks to be imported from react -useState,useEffect,useRef
// statefull comp is where the comp where state is used initially
// state less/presentational component is received from another comp via porps



//todo 47-6 What is React, when to use it, react vs angular vs vue


//React has better performance than any other library for web application UI
//? Thinking is react
//https://reactjs.org/docs/thinking-in-react.html


//todo 47-7 How react works, Render, virtual dom, diff algorithm, fiber

//! important
//?How react work(Frequently asked in interview)?


//virtual dom

//diff algorithm

//fiber architecture


//todo 47-8 React Class Component, Component lifecycle and rerender

// class component lifecycle https://www.w3schools.com/react/react_lifecycle.asp

