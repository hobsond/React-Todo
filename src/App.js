import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Search from './components/Search'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state={
      toDos:[],
      initial:{
        id:'',
        todo:'',
        completed:false

      },
      search:'',
      newtodo :'',
      time:'',
      timeofday:'',
      searchitems:[]
    
    }

  }
  inputChange = evt=>{
    const name =evt.target.name
    const value= evt.target.value
   
    this.setState({newtodo:{...this.state.initial,
      id:Date.now(),
      [name]: value,
      completed:false,

    }})
    
  }

  clickComplete = evt=>{
     const name =evt.target.innerText
    const value= evt.target.value
    
   
    
    const selected = this.state.toDos.findIndex(item=>{
      return item.todo === name
    })
    let newArray = [...this.state.toDos]
    newArray[selected]= {...newArray[selected], completed:!newArray[selected].completed}
    this.setState({toDos:newArray})
    console.log(selected)

    if(evt.target.style.background === 'lightblue'){
      evt.target.style.background = 'none'
      evt.target.style.textDecoration = 'none'


    }
    else{
      evt.target.style.background = 'lightblue'
      evt.target.style.textDecoration = 'line-through'
    }
    
    // this.setState(
    //   {toDos:[

    //   // {...selected[0],completed:!selected[0].completed}
      
      
    //   ]},
      
      
    //   )
    

  
  }

  
  submitChange= evt=>{
    // evt.preventDefault()
    this.setState({toDos:[...this.state.toDos,this.state.newtodo]})
    this.setState({newtodo:this.state.initial})
    
    const todo = this.state.toDos
    
    // mystorage.localstorage.setItem(todo)
    // console.log(Storage.getItem(todo))
    
    
  }
  
  clear = evt =>{
    const filter = this.state.toDos.filter(item=>{
     return item.completed === false
    })
    console.log(filter)
    this.setState({toDos:filter})
    // localStorage.removeItem('Todos')
  }
  searchChange=evt =>{
    this.setState({search:evt.target.value})
    const filter = this.state.toDos.filter(item=>{
     return item.todo.includes(evt.target.value)
    })
    if(evt.target.value ===''){
      this.setState({searchitems:[] })
    }else{
      this.setState({searchitems:filter})
    }
    
  }

  componentWillMount(){
    localStorage.getItem('Todos') && this.setState({toDos:JSON.parse(localStorage.getItem('Todos'))})


  }
  componentDidMount() {
    
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('Todos',JSON.stringify(this.state.toDos))
  }
  
  

  render() {
    return (
      <div>
      <TodoForm inputChange = {this.inputChange} clear={this.clear} newtodo={this.state.newtodo} submitChange={this.submitChange} />
      {this.state.toDos.length >= 2 ?<Search search = {this.searchChange} searchitems={this.state.searchitems} /> : null}
        <TodoList list ={this.state.toDos} complete={this.clickComplete} />
      </div>
    );
  }
}

export default App;
