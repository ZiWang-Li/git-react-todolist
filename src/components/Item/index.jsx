import React, { Component } from 'react'

export default class Item extends Component {

    state = {mouse:false}
    
    handleMouse = (flag) => {
        return () => {
            this.setState ({mouse:flag})
        }
    }

    handleCheck = (id) => {
        return(event) => {
            this.props.updateTodo(id,event.target.checked)
        }
    }
    
    handleClick = (id) => {
        if(window.confirm('确认删除？'))
        this.props.deleteTodo(id);
    }
    
    render() {
        const {id,name,done} = this.props
        return (
            <li style ={{backgroundColor: this.state.mouse ? '#ddd' : 'white'}} onMouseEnter = {this.handleMouse(true)}   onMouseLeave ={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange = {this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick ={()=>this.handleClick(id)} className="btn btn-danger" style={{display: this.state.mouse ? 'block': 'none'}}>删除</button>
            </li>
        )
    }
}
