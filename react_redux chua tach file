import logo from './logo.svg';
import './App.css';

function App() {
  var redux= require('redux')
  var oldstare={
    num:["nguyenxuanduc",23],
    giatri: true
  }
  
  var reduce=(state=oldstare, action)=>{
    switch (action.type){
      case "inranguoclai":
        return {...state,giatri: !state.giatri}
 
      case "add" :
        return {...state,num:[...state.num,action.them]}
        
      case "delete":
        return {...state,num:state.num.filter((value,key)=> key!=action.del)}
     
      case "them":
        return {...state,num:state.num.push(action.themcuoi)}
    
    }
    return state
  }
  var store1=redux.createStore(reduce)
  
  console.log(store1.getState())
    store1.dispatch({
      type:"inranguoclai"
    })
  console.log(store1.getState())
  store1.dispatch({
    type:"add",
    them:"ducbanh"
  })
  console.log(store1.getState())
  store1.dispatch({
    type:"delete",
    del:1 
  })
  console.log(store1.getState())
  store1.dispatch({
    type:"them",
    themcuoi:"duc2k2"
  })
  console.log(store1.getState())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
