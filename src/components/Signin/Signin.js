import React,{useState} from 'react';
import './Signin.css';


function Signin({onRouteChange}) {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleclick= () =>{
      fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email:email,
        password:password
      })
    })
     .then(response => response.json())
     .then(dat =>{ 
        if(dat==='ok') {
          console.log(dat)
          onRouteChange('home');
        }
        })
  }
  const handleChangeEmail = (event) =>{
   setEmail(event.target.value);
  }
 
  const handleChangePassword =(event) =>{
	setPassword(event.target.value);
  }

  return (
       <div className='signin'>
        <div className='form'>
          <h1>Email:</h1>
      		<input type="text" className="email" value={email} onChange={handleChangeEmail} /> 
      		<h1>Password:</h1>
      		<input type="text" name="" value={password} onChange={handleChangePassword } />
      		<button onClick={handleclick}> submit</button>
        </div>
        New user? <span className='board__registerbutton' onClick={(e)=>  onRouteChange('register')}> Click to register </span> 
       </div> 
  );
}

export default Signin;