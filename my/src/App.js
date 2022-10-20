import react from 'react';

 function  App (){


function getData(){
    let data = document.getElementById("Walcome")
    alert("Walcome :"+data.value)
  }



return(
<div className='App'>
<h1>Walcome to My Page</h1>
<input type='text' id='Walcome' placeholder='Enter Your Name'></input><br/><br/>
<button type='submit' onClick={getData}>ClickMe </button>
</div>
)
}
export default App;







































// // import logo from './logo.svg';
// import './App.css';
// import { getData } from './User';
// import react, { useState } from 'react';


// function App() {
//   let [Data, setname] = useState(0)
//   function UpdateData() {
//     setname(Data + 1)
//   }
//   return (
//     <div className="App">
//       <h1> You have click {Data}ti</h1>
//       <button onClick={UpdateData}>Submit</button>
//     </div>
//   );
// }
// export default App;
