import React from "react";
//variables work, but formatting is not recognized

const styles = {
    test:{
    background: "#e8eaf6"},
    hover:{
        background: "#f4eb42"
    }
}

class MyClass extends React.Component{
    constructor(props) {
        super(props);

    }
    
    state = {
        stat2:0,
        stylevar : "hover"
    };
    foo =()=>{
        console.log("the button was pressed");
        // console.log(this.props.myid);//this line gives us undefined
        this.fah();
        this.setState({stat2: this.state.stat2 + 1});
    }
    fah = () => {console.log(this.props);}
    // fah = () => {console.log(JSON.stringify(this.props);}

    // render(){
    //     console.log(this.props)
    //     return(<div id ="container" style={styles.test}>
    //     {this.props.stat.map(item=> (
    //         <span className = "mappedArray" key={item.id} id={`sentence${item.myid}`} onClick={this.foo}>
    //         {item.sentc} 
    //         </span>
    //     ))}
    //     </div>)
    // }
    
    render(){
        console.log(this.props)
        return(<div id ="container">
        {this.props.stat.map(item=> (
            <span className = "mappedArray" key={item.id} id={`sentence${item.myid}`} onClick={this.foo} style={`styles.${this.state.stylevar}`}>
            {item.sentc} 
            </span>
        ))}
        </div>)
    }

}

export default MyClass;