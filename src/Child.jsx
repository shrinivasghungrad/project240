// ex 2start below

// import React, { Component } from 'react';
// import "./style.css"

// export default class Child extends Component {
//   render() {
//     return (
//       <>
//       <section>
//         <article>

//             <table>

//                    <thead>
//                      <tr>
//                         <th>NAME</th>
//                         <th>SUBJECT</th>
//                         <th>CITY</th>
//                         <th>gender</th>
//                     </tr>
//                    </thead>

//                     <tbody>
//                         <tr>
//                             <td>ram</td>
//                             <td>react</td>

//                             <td>pune</td>
//                             <td>male</td>
//                         </tr>
//                         <tr>
//                             <td>sham</td>
//                             <td>react</td>

//                             <td>pune</td>
//                             <td>male</td>
//                         </tr>
//                         <tr>
//                             <td>raju</td>
//                             <td>react</td>

//                             <td>pune</td>
//                             <td>male</td>
//                         </tr>
//                         <tr>
//                             <td>balu</td>
//                             <td>react</td>

//                             <td>pune</td>
//                             <td>male</td>
//                         </tr>

//                     </tbody>

//             </table>
//         </article>
//       </section>
//       </>
//     )
//   }
// }    //ex2 end

// react hook following ARE EXAMPLE OF FUNCTIONAL BASED COPMPONENT TO CONVER INTO STATFULL COMPONENT

// import React ,{useState} from "react";
// import PRODUCTS from "./products.json";
// import "./style.css";
// import Child from './Child';

// const Child = () => {
//   let [employees, setEmployees]=useState({products:PRODUCTS});

//   return (
//     <> <section id="mainblock">
//             <article>

//                  <table>
//                           <tr>
//                         <thead>
//                              <th>NAME</th>
//                              <th>SUBJECT</th>
//                              <th>CITY</th>
//                              <th>gender</th>
//                          </tr>
//                         </thead>

//                          <tbody>
//                              <tr>
//                                  <td>ram</td>
//                                  <td>react</td>

//                                  <td>pune</td>
//                                  <td>male</td>
//                              </tr>
//                              <tr>
//                                  <td>sham</td>
//                                  <td>react</td>

//                             <td>pune</td>
//                                  <td>male</td>
//                              </tr>
//                              <tr>
//                                <td>raju</td>
//                                  <td>react</td>
//                                  <td>pune</td>
//                                 <td>male</td>
//                              </tr>
//                              <tr>
//                                <td>balu</td>
//                                  <td>react</td>

//                                 <td>pune</td>
//                                 <td>male</td>
//                             </tr>

//                          </tbody>

//                  </table>
//             </article>
//            </section>

//          </>

//   )
// }

// export default Child;

// how we mANIPULATE STATE IN CLASS BASECMPONENT
// AND useState

// import React, { Component } from 'react'

// export default class Child extends Component {
//   state={
//     subject:"react",
//     trainer:"vivek",
//   };
//   changeName=()=>{
//     this.setState({subject:"web",trainer:"shri"})
//   };
//   render() {
//     return (

//       <div>

//       <h1>{this.state.subject}</h1>
//       <h1>{this.state.trainer}</h1>
//       <button onClick={this.changeName}>change</button>

//       </div>

//     );
//   }
// }

//functional way how we can manipulate state in functional way

// import React, { useState } from 'react';

// const Child = () => {
//   let [state, setState ]=useState({subject:"react",trainer:"abhi"});

//   let changeName=()=>{
//     setState({subject:"webtech",trainer:"a"})
//   };

//   let changeName1=()=>{
//     setState({subject:"react",trainer:"vivek"})
//   };

//   return (
//     <div id="div">
//       <h1>
//         {state.trainer}
//       </h1>
//       <h1>
//         {state.trainer}
//       </h1>

//       <button onClick={changeName}>next</button>
//        <button onAuxClick={changeName1}>previous</button>
//     </div>

//   );
// };

// export default Child;

//new exp

// import React, { useState } from "react";

// const Child = () => {
//   let [state, setState] = useState({
//     username: "yashraj",
//   });

//   let changeName1 = () => {
//     setState({ username: "ram" });
//   };
//   let changeName2 = () => {
//     setState({ userName: "shri" });
//   };
//   return (
//     <div>
//       <h1>{state.username}</h1>
//       <button onClick={changeName1}>previous</button>
//       <button onClick={changeName2}>next</button>
//     </div>
//   );
// };

// export default Child;

// useState example by functional based component 
// import React, { useState } from "react";
// import "./style.css";

// const Child = () => {
//   let [count, setCount] = useState(0);

//   let increment = () => {
//     setCount(count + 1);
//   };
//   let decrement = () => {
//     setCount(count - 1);
//   };
//   let reset = () => {
//     setCount(0);
//   };
//   let getColor =()=>{
//     if(count<0){
//       return "red";

//     }
//     else  if(count>0){
//       return "green";
      
//     }
//     else {
//       return "blue";
      
//     }
//   }

//   return (
//     <div>

//       <h1 style={{color:getColor (count)}}>{count}</h1>
//       <button  onClick={increment} id="btn1" >increment</button>
//       <button onClick={decrement} id="btn2">decrement</button>
//       <button onClick={reset} id="btn3">reset</button>
//     </div>
//   );
// };

// export default Child;

//end exaple


//new example 

// import { useState } from 'react';
// import "./style.css";

// const Child = () => {
//   let [value,setValue] =useState(0);
//   let Increment =()=>{
//     setValue(value + 10);
//     setValue(value+20);
//   };
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button id='btn1'  onClick={Increment}>increment</button>
//     </div>
//   );
// };

// export default Child;

//example end in this exaple we are understand value is incresing by 20 not by 10 because 10 first declare after 20 declare means updated value for operation is 20


// new example

// import React from 'react'
// import { useState } from 'react'

// const Child = () => {
//   let [value,setValue] =useState(0);
//   let increment= ()=>{
//     setValue(value => value + 10);
//     setValue(value => value + 20);
//   }
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={increment}increment>inrement</button>
//     </div>
//   );
// };

// export default Child;
//new example end



//props start which is used to send data from parent to child
//destructing
// import React from 'react';

// const Child = () => {
//   let[name,subject,salary]= props ;
//   return (
//     <div>
    
//       <h1>{name}</h1>
//       <h1>{subject}</h1>
//       <h1>{salary}</h1>
//     </div>
//   );
// };

// export default Child;



//below faker example

// import { faker } from '@faker-js/faker'
// import React, { useState } from 'react'


// const Child = () => {
//     let [state,setState]= useState(faker.image.avatar());
//     let[value,setValue]= useState("");

//     let changeImage=()=>{
//         setState(faker.image.avatarLegacy());
//     };

//     let changeName=()=>{
//         setValue(faker.animal.cat());
//     };

//  return (
//     <div>
//         <h1>{"my name is ....."+value}</h1>
//         <img src={state} alt={"hello"} />
//         <button onClick={changeImage}>changeImage</button>
//         <button onClick={changeName}>changeName</button>
//     </div>
//   );
// };

// export default Child;

//faker js end


//below start example of props drilling props drilling means sending data from parent chuld and child its child 
//in below exaple we pass data from app.jsx to child.jsx and from child.jsx to footer.jsx by using props

// 1st way

// import React from 'react'
// import Footer from './Footer';
// import './style.css';

// const Child = (props) => {
//   return (
//     <div>
//         <h1>{props.username}</h1>
//         <h1>{props.subject}</h1>
//         <Footer name="shri" subject="java"/>
//     </div>
//   );
// };

// export default Child;

//end 1st way
//
//2nd way start
// import React from 'react'

// const Child = ({username,subject}) => {
//   return (
//     <div>
//         <h1>{username}</h1>
//         <h1>{subject}</h1>
//     </div>
//   );
// };

// export default Child;
//end 2nd way

//new example of sending data from parent to child in below exaple we send data frpm app.jsx tochild.jsx we send stste,json,

// import React from 'react'

// const Child = props => {
//   return (
//     <div>
//         <section>
//             <article>
//                 {props.JSON.map (m=>{
//                     console.log(m);
//                     return(
//                         <>
//                         <h1>{m.maker}</h1>
//                         <img src={m.img} alt={"hello"} />
//                         <h1>{m.id}</h1>
//                         </>
//                     );
//                 })}
//             </article>
//         </section>
//         <main>{props.state.fullstack}</main>
//     </div>
//   )
// }

// export default Child;
//end exaple

// below event handler by class based component

import React, { Component } from 'react'

export default class Child extends Component {

    click=()=>{
        console.log("hi am click event");
    
    console.log(" hi am idiot fellow");
};
  render() {
    return (
      <div>
        <button onClick={this.click}>click me</button>
      </div>
    );
  }
}
//event handler by class based comopnent end
