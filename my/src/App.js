
import  './App.css';

// <<<<<<-------------------------------------Functional Component------------------------------>>>>>>>>>>
/* import { useState } from 'react';
   function App() {
  console.log("hello world");
  let [Data, setData] = useState(0)
  function getData() {

    setData(Data + 1)

  }

  return (
    <div className='App'>
      <h1>Walcome to My Page</h1>
      <h2> you Have click {Data}times</h2>
      <button type='submit' onClick={getData} >ClickMe </button>
    </div>
  )
}
export default App;    */



//<<<<<<<<<<<<<<<<<<<<<<----------------------------------------Class Components------------------------------------>>>>>>>>>>>>>>>>>>>>>>>

/* import React, { Component } from 'react';
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      Fullname: "Amit ",
      Data: 0
    }
  }
  Getdata() {
    this.setState({ Data: this.state.Data + 1 })
  }
  render() {
    return (
       <div className='App'>
        <h1>Walcome to My Page</h1>
        <p> My Name is {this.state.Fullname} </p>
        <h2> you Have click {this.state.Data}times</h2>
        <button type='submit' onClick={() => this.Getdata()}>Update </button>
      </div>
    )
  }
};
export default App; */

// <<<<<<<<<<<<<<<<<<------------------Calass and Function Components ---------------->>>>>>>>>>>>>>>>>>>>

/* import React ,{useState}from 'react';

import Students from './students';
function App() {
  let [Name ,setName] = useState(" !! Kartik Shukla !!")
  let [Name2 ,setName2] = useState(" !! Aneel Singh!!")

function GetUpdates() {
  setName (" Amit Shukla")
  setName2("Aneel Singh")

}
return (
    <div className='App'> Walcome To My Page 
    <Students name ={Name} email = "AmitShukla@gmail.com" other ={{Address : "Gorakhpur " , Mobile :"7518176661"}}/>
    <Students name ={Name2} email = "Aneel@gmail.com"  other ={{Address : "Gorakhpur " , Mobile :"758776661"}}/>
   <button onClick={GetUpdates}> Update</button>
    </div>
  )
}
export default App;
 */



import User from './User'
function App() {



return (
  <div className='App'>

    <User/>
  </div>

  )



}
export default App;







