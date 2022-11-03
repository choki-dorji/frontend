
import React from "react";
import Read from "./components/readapi";
// import Create from "./components/Write";
import Create from "./components/Writeapi";
import Addpost from "./components/Writeapi";
import User from "./components/Write";
import './App.css';
import Head from "./components/header";
import Homepage from "./components/homepage";
import Submitted from "./components/file";

class App extends React.Component {
   
   render() {
        return (
        <div className = "App">
            {/* <Head /> */}
            {/* <Read /> */}
            {/* <Create /> */}
            {/* <Addpost /> */}
            {/* <User /> */}
            {/* <Homepage /> */}
            <Submitted />
            
        </div>
    );
}
}
   
export default App;

// import React from "react"
// import Homepage from "./components/homepage"

// export default function App() {
//   return <Homepage />
// }