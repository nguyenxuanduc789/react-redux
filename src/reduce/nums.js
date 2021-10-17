const nums={
    num:["nguyenxuanduc",23],
  }
  const numreduce=(state=nums, action)=>{
    switch (action.type){
      case "add" :
        return {...state,num:[...state.num,action.them]}
        
      case "delete":
        return {...state,num:state.num.filter((value,key)=> key!=action.del)}
     
      case "them":
        return {...state,num:state.num.push(action.themcuoi)}
    
    }
    return state
  }
export default numreduce;