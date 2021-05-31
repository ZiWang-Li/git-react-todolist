import React, { Component } from 'react'
import {nanoid} from 'nanoid'


export default class Header extends Component {  
    
    handleKeyUp= (event) => {
        const {keyCode,target} = event
        if(keyCode !== 13) return
        if(target.value.trim() === ''){
            alert('Input invalid')
            return
        }
        //this.props.addTodo(target.value);// why no use addTodoList cause addTodoList retrun a undifine not a fun
        const todoObj ={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)

        target.value = '';
    } 
    
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp = {this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        )
    }
}
