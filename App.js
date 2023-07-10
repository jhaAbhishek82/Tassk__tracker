// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos}from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, { useState , useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
// import userEvent from '@testing-library/user-event';
import{About} from "./MyComponents/About";

// import {  Switch } from "react-router";

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";



function App() {
  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
      initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    // console.log("I am ondelete","todo");
    // let index = todos.indexOf(todo);
    // todos.splice(index , 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
   
    

    localStorage.setItem("todos",JSON.stringify(todos));


  }

  const addTodo = (title , desc)=>{
    console.log("i a " ,title , desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
       sno = todos[todos.length -1].sno+1
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos, myTodo]);

   
      
    

 }

  const [todos , setTodos] = useState(initTodo);
   

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    document.body.style.background = ' #e6ffff';


  } , [todos])
  

  return (
   <>
      
      <BrowserRouter>

      
        <Header title="Task Tracker" searchBar={false} />
        
       
             {/* <AddTodo addTodo={addTodo}/>
             <Todos todos={todos} onDelete={onDelete}/> */}
          
        
          <Routes>
            <Route path="/" element={
              <>
               <AddTodo addTodo={addTodo}/>
               <Todos todos={todos} onDelete={onDelete}/>
               </>
            }/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          
            
          
          
         
        
      

        <Footer/>
        </BrowserRouter>
        
   </>
  );
}

export default App;
