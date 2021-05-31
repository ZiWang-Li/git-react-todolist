import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
//状态在哪里操作他的方法就在哪里
export default class App extends Component {

    state = {todos:[
        {id:'001',name:'修改用户提出的需求',done:true},
        {id:'002',name:'小组讨论',done:true},
        {id:'003',name:'定制这周的计划',done:false},
        {id:'004',name:'下班晚上吃什么好呢？',done:false},
    ]}

    addTodoList = (todsObj) => {
        const {todos} = this.state;
        const newTodo = [todsObj,...todos];
        this.setState({todos:newTodo})
    } //在原来一大堆todo的前方放一个新的todo（所有属性   
    
    updateTodo = (id,done) => {
        const{todos} = this.state;
        const newTodosObj= todos.map((todoObjUpdate) =>{
            if(todoObjUpdate.id === id) return {...todoObjUpdate,done:done}
            else return todoObjUpdate;
        })

        this.setState({todos:newTodosObj})
    }
    
    deleteTodo = (id) => {
        const  {todos} = this.state;
        const newTodosDele = todos.filter((todoObjDele) =>{
            return todoObjDele.id !== id;
        })

        this.setState({todos:newTodosDele})
    }
    
    checkAllTodo = (done) => {
        const {todos} = this.state;
        const newTodoCheck = todos.map((todoObjCheck)=>{
            return {...todoObjCheck,done:done}
        })
        this.setState({todos:newTodoCheck})
    }
    
    clearAllDone = () => {
        const {todos} = this.state;
        const newTodosClear = todos.filter((todoObjClear)=>{
            return todoObjClear.done ===false;//retutn !todoObjClear.done;
        })

        this.setState({todos:newTodosClear});
    }
    
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">            
                <div className="todo-wrap">
                    <Header addTodo = {this.addTodoList}/>  {/*//父App给子传一个函数（通过Props)addTodo is mount in class Header and return a call fun to Header*/} 
                    <List passTodos = {todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>  {/*//第一个todos，没有this是因为上面已经结构赋值 后面的update没有结构赋值所以需要this*/} 
                    <Footer passTodos = {todos} checkAllTodo ={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
            
        )
    }
}
