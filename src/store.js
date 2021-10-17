import numreduce from "./reduce/nums"
import giatrireduce from "./reduce/giatris"
const redux= require('redux')
const oldstare={
  num:["nguyenxuanduc",23],
  giatri: true
}
const reduce=(state=oldstare, action)=>{
  switch (action.type){
      
    case "add" :
        return {...state,num:[...state.num,action.them]}
        
    case "inranguoclai":
      return {...state,giatri: !state.giatri}

    case "delete":
      return {...state,num:state.num.filter((value,key)=> key!=action.del)}
   
    // case "them":
    //   return {...state,num:state.num.push(action.themcuoi)}
  
  }
  return state
}

const allreduce=redux.combineReducers({
    num:numreduce,
    giatri:giatrireduce
})
const store1=redux.createStore(allreduce)
store1.subscribe(()=>{
    console.log(JSON.stringify(store1.getState()))
})
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
// store1.dispatch({
//   type:"them",
//   themcuoi:"duc2k2"
// })
// console.log(store1.getState())
export default store1;