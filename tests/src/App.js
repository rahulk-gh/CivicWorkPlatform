import React from "react";
// import HelloReact from "./components/HelloReact";
// import Story from "./components/work";
// import Story2 from "./components/workVars";
// import Story3 from "./components/myprop";
// import Myprop2 from "./components/myprop2";
import MyClass from "./components/myclass";

const storyVar = [
    {id:1,sentc:"This is sentence 1.", myid:0},
    {id:2,sentc:"This is the second sentence.", myid:1},
    {id:3,sentc: "This is the third sentence.",myid:2},
    {id:4,sentc: "this is the 4th sentence.", myid:3}
]

// const App = () => <Story3 stat ="Red" />;
const App = () => <MyClass stat = {storyVar}/>;

export default App;
