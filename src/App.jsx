// import React, { Fragment } from "react";
// import "./style.css";
// const App = () =>{
// return <div>App </div>
// return React.createElement("div",{id:"div"},"hello")
// or 2nd way
// return React.createElement("div",
// {id:"div"},
//  React.createElement("h1",{id:"head"},
// "ReactJs"),
// React.createElement("button",{id:"btn"},
// "cancel"),
// React.createElement("button",{id:"btn2"},
// "submit")

// );
// };

// const App = () => {
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>name</th>
//             <th>subject</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td> yashraj </td>
//             <td>react js</td>
//           </tr>
//           <tr>
//             <td>shri</td>
//             <td>reactjs</td>
//           </tr>
//           <tr>
//             <td>raju</td>
//             <td>reactjs</td>
//           </tr>
//         </tbody>
//       </table>
//       <button id="btn">cancel</button>
//       <button id="btn2">submit</button>
//     </div>
//   );
// };



// import React from "react";
// below example of jsx attribute in jsx class is use as className


// const App =()=>{
//   return(<>
//     <div>
//       <h1 className="head">hi react js</h1>
//       <h1 id="head1"> react js</h1>
//      <h3 style={{backgroundColor:"red"}}>hi </h3>   
//      <h4 style={{fontSize:"20px"}}>hi </h4> 
//      {/* /* other than pixel if you want to give any other unit you have to give in string like " "  */}
//     </div>
//     {}
//     </>
//   );
// };
// export default App;





// ex 2 start below

import React,  {  Component } from 'react';
import Child from "./Child";

export default class App extends Component {
  render() {
    return (<>
      <div>App</div>
      <Child/>
      </>
    )
  }
}     //ex2 end


