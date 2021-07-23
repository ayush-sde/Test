import React from 'react';
import './App.css';
import { incNumber ,decNumber,incNumberAsync } from './actions';
import { useSelector , useDispatch, connect } from 'react-redux';
function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" 
        onClick = { () => dispatch(decNumber())} ><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value = {myState} />
        <a className="quantity__plus" title="Increment" 
        onClick = { () => dispatch(incNumberAsync())} ><span>+</span></a>
      </div>
  
          </div>
        </div>
  )
}
const mapStateToProps = state => { 
  //cconsole.log("ayush" , state)
}
export default connect(mapStateToProps , null )(App);
