import React, { Component } from 'react';  
class App extends React.Component {  
  
    constructor(props){
        super(props);
        this.state={value:""};
        this.handlechange= this.handlechange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
    }
        handlechange(event){
            this.setState({value:event.target.value});
        }
        handlesubmit(event){
            alert('login in succeessfull'+this.state.value);
        }
        render(){
            return(
                <form onSubmit={this.handlesubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handlechange}/>
                </label>
                <input type="submit" value="submit"/>
                </form>
            )
        }
        
    }
    export default App