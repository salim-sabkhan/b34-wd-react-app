// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";

function App(){
  // js starts
  // const time = 50min
  // js ends

  // JSX Starts

  // return(
  //   <div className="App">
  //     <Message name="salim"
  //      pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"/>
  //     <Message name="tamim"
  //     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3BL0glU2Ue2rXi8Ikw00p1zD2IKZ-LUtg&usqp=CAU"/>
  //     <Message name="fahim"
  //     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsupI89wVbXLRzxaiHG_rezqk3FrqDeMmog&usqp=CAU"/>
  //   </div>
  // );
  // JSX Ends

  const names = ["salim", "tamim", "fahim"];

  const students = [
     {
      name:"salim",
       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU",
      },
       {
        name:"tamim",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-3BL0glU2Ue2rXi8Ikw00p1zD2IKZ-LUtg&usqp=CAU",
    },
     {
      name:"fahim",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsupI89wVbXLRzxaiHG_rezqk3FrqDeMmog&usqp=CAU",
    },
  ];

  return(
    <div className="App">

      {students.map((student) => (
      <Message name={student.name} pic={student.pic}/> 
        ))}


{/* {names.map((nm) => (
<Welcome name={nm}/> 
  ))} */}


    {/* {names.map((nm) => (<Welcome name={nm}/> ))} */}

      {/* <Welcome name="tamim"/>
      <Welcome name="fahim"/> */}
    </div>
  );
}

export default App;

function Welcome(props){
  console.log(props);
  return(
    <div>
  
   <h1>Hello, {props.name}</h1>
   </div>
   );
}

// Object Destructuring

function Message({pic, name}){
  //console.log(props);
  return(
    <div>
      <img
  className="profile-pic" src={pic} alt={name}></img>
   <h1>Hello, {name} 😎😎</h1>
   </div>
   );
}

