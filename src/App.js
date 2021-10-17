import logo from './logo.svg';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  nhapchuot=()=>{
    // var duc=this.props.dispatch;
    // duc({type:"inranguoclai"})      //đây biến đổi true thành false 
    var hoa=this.props.dispatch;
    hoa({type:"add",        // biến đổi thêm mới bắt buộc phai thêm vô "ducbanh" truyền dữ liệu dữ vào store
    them:"ducbanh"
  })
 }
  render() {
    return (
        <div className="App">
      <header className="da">
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
        <button onClick={()=>this.nhapchuot()}> nhan vao </button>
      </header>
    </div>
    );
  }
}
const mapStateToProps=(stare,onwpot)=>{
  return {
    dulieu: stare.num,
    dd:stare.giatri
  }
}
 export default connect(mapStateToProps)(App) ;

