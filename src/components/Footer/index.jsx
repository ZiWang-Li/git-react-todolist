import React, { Component } from 'react'

export default class Footer extends Component {

    handleCheckAll = (evnet) => {
        this.props.checkAllTodo(evnet.target.checked)
    }
    
    handleClearAllDone = () => {
        this.props.clearAllDone();
    }
    
    render() {

        const{passTodos} = this.props;
        const doneCount = passTodos.reduce((pre,todo)=>{return pre + (todo.done ? 1 : 0)},0)//passTodos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
        const total = passTodos.length;
        
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked = {doneCount===total && total !==0 ? true : false} />
                </label>
                <span>
                    <span>已完成：{doneCount}</span> / 全部：{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
        )
    }
}
 