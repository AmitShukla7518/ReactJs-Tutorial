
import './App.css'
import React, { useState } from 'react';
export default function User() {
    let [values, Setvalue] = useState(null)
    let [Print, SetPrint] = useState(false)
    function getData(val) {
        Setvalue(val.target.value)
        console.warn(val.target.value);
        SetPrint(false)

    }
    return (
        <div className="App">

            {Print ?
                  <h1> {values} </h1>
                : null
            }
            <input type="text" onChange={getData}></input>
            <button onClick={() => SetPrint(true)}>Submit</button>
        </div>
    )


}
