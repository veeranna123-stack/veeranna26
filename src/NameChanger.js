import React from 'react';
import { useState } from "react";

function NameChanger(){
    const [name,setName]=useState("python")
    const changeName = ()=> setName("java")
    return(
        <div>
            <h2>Name: {name} </h2>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default NameChanger;