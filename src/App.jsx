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

// import React,  {  Component } from 'react';
// import Child from "./Child";

// export default class App extends Component {
//   render() {
//     return (<>
//       <div>App</div>
//       <Child/>
//       </>
//     )
//   } //
// }     //ex2 end

//

// //new example
// import React, { Component } from "react";
// import Child from "./Child";

// import "./style.css";
// import Home from "./Home";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child/>
//         <Home/>
        
//       </div>
//     );
//   }
// }

//new example
// import React, { Component } from 'react'
// import Child from './Child'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>

//     )
//   }
// }

//props start which is used to send data from parent to child
//destructing

// import React, { Component } from 'react';
// import Child from './Child';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child name="shri" subject="react" salary="1cr"/>
//       </div>
//     );
// }
// };




// 
//below faker example

// import React, { Component } from 'react'
// import Child from './Child'


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child/>
//       </div>
//     )
//   };
// };
// //faker js end

//below start example of props drilling props drilling means sending data from parent chuld and child its child 
//in below exaple we pass data from app.jsx to child.jsx and from child.jsx to footer.jsx by using props

//1st way

// import React from 'react'
// import Child from './Child';

// const App = () => {
//   return (
//     <div>
//       <Child username="yashraj" subject="react" />
//     </div>
//   );
// };

// export default App;
//end 1st way

//2nd way start
// import React from 'react'
// import Child from './Child';

// const App = () => {
//   return (
//     <div>
//       <Child username="yashraj" subject="react" />
//     </div>
//   );
// };

// export default App;
//end 2nd way



//new example of sending data from parent to child in below exaple we send data frpm app.jsx tochild.jsx we send stste,json,

// import React from 'react';
// import { useState } from 'react';
// import Child from './Child';
// import JSON from './products.json';
// const App = () => {
//     let [state, setState]= useState({

//         Mernstack:["html","css","javascript"],
//         fullstack:["sql","java"],

//     });
//     let changeName=username=>{
//         return username;
//     };

//   return (
//     <div>
// <Child changeName={changeName} JSON={JSON}
//  state={state}/>

//     </div>
//   );
// };

// export default App;
//end exaple


// below event handler by class based component

import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {
  render() {
    return (
        
      <div>
        <Child/>
      </div>
    );
  }
};
//event handler by class based comopnent end