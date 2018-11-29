import React from "react";
//variables work, but formatting is not recognized
import Story2 from "./workVars.js";


const storyVar = '<div className="dumbo"> <span id="sentence0">Lorem ipsum dolor sit amet</span> <span id="sentence1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span> <span id="sentence2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span> <span id="sentence3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span> <span id="sentence4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>'

// const Story3 = (props) => {
//     let body;
//     if (props.stat == "Red"){
//         body = "The body is red";
//     }
//     else {body = "Everything else"}

//     return<div id ="container">{body}</div>
// }
let boldTag = "<b>";
let boldTagEnd = "</b>";

const Story3 = (props) => {
    let body;
    if (props.stat == "Red"){
        body = <b>+ prop+</b>;

        body = boldTag + body + boldTagEnd;
    }
    else {body = "Everything else"}

    return<div id ="container">{body}
        <p><Story2/></p>
        </div>
}


{/* <div id ="container">{storyVar}</div> */}

export default Story3;