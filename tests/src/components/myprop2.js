import React from "react";
//variables work, but formatting is not recognized


const Myprop2 = (props) => {
    console.log(props)


    return(<div id ="container">
        {props.stat.map(item=> (
            <span className = "mappedArray" key={item.id} id={`sentence${item.myid}`}>
            {item.sentc} 
            </span>
        ))}
        </div>)
}


export default Myprop2;