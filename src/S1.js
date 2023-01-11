import React from "react";
function S1(){
    function myInfo(...names) { 
        console.log(`hello ${names}`);
    }
    myInfo("HI","Sumit","Mohan");
    return (
    <div>
        <h1>hello Sumit</h1>
        <p>hfdhff</p>
   
    </div>
    );
}
export default S1;
