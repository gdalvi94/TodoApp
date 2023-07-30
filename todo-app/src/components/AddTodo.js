import React from "react";

class AddTodo extends React.Component{
    state = {
        name : "",
        desc : ""
    }
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.desc === ""){
            alert("All the filed are mandatory");
            return;
        }
        this.props.addTodoHandler(this.state);
        this.setState({name:"",desc:""});
        
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Todo</h2>
                <form className="ui form" onSubmit={this.add} >
                    <div className="field">
                        <label>Task Title</label>
                        <input type = "text" name="name" placeholder="title" value = {this.state.name} onChange={(e) => this.setState({name : e.target.value})}/>

                    </div>
                    <div className="field">
                        <label>Description</label>
                        <input type = "text" name="desc" placeholder="description" value = {this.state.desc} onChange={(e) => this.setState({desc : e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>

                </form>

            </div>

        );
    }
}
export default AddTodo;