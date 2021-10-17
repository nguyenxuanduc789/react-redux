const giatris={
    giatri: true
  }
  const giatrireduce=(state=giatris, action)=>{
    switch (action.type){
      case "inranguoclai":
        return {...state,giatri: !state.giatri} 
    }
    return state
  }
export default giatrireduce;