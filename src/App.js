import React,{useState} from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Home from './components/Home/Home';


function App() {
  
  const [route,setRoute]= useState('home')
  const onRouteChange = (route) => {
    if (route === 'home') {
      setRoute(route)
    }
    else if(route==='signin'){
      setRoute(route)
    } 
    else{
      setRoute(route)
    }
  }

  return (
    <div className="App">
    { route==='signin'
      ? <Signin onRouteChange={onRouteChange}/>
      : route==='register'
      ? <Register onRouteChange={onRouteChange} />
      : <Home />
         
    }
   </div>
  );
}
export default App;