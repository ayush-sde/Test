
import './App.css';
import Header from './header';
import sidebar from './sidebar';
import Jobfeed from './jobfeed';
import Test from "./test"
import App2 from "./AppPagination"
import App3 from "./AppScroll"
import JobTable from './JobTable';
function App() {
  return (
   
   
    <div class="container-fluid">
      <div class="row">
        <div class="col-md">
          <Header/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-9" >
          <JobTable/>
        </div>
        <div class="col-md-3">
          <App2/>
        </div>
      </div>
      
  </div>
    
     
    
  );
}

export default App;
const Box = props => <div className="box">{props.children} </div>;