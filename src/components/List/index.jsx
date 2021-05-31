import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
    render() {
        const {passTodos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    passTodos.map((eachTodo) => {
                        return <Item key = {eachTodo.id}{...eachTodo} updateTodo = {updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
