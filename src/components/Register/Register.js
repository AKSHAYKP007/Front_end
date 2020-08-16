import React,{useState} from 'react';
import './Register.css';

function Register({onRouteChange}) {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const handleclick= () =>{
      fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      	name:name,
        email:email,
        password:password
      })
    })
     .then(response => response.json())
     .then(dat =>{ 
        if(dat==='ok') {
          onRouteChange('home');
        }else
          return 'Already registered'
        })
  }
  const handleChangeEmail = (event) =>{
   setEmail(event.target.value);
  }
 
  const handleChangePassword =(event) =>{
	setPassword(event.target.value);
  }

  const handleChangeName =(event) =>{
	setName(event.target.value);
  }
  return (
    <div className="register">
      <div className='form'>
            <h1>Name:</h1>
      		<input type="text" value={name} onChange={handleChangeName} />
            <h1>Email:</h1>
      		<input type="text" value={email} onChange={handleChangeEmail} />
      		<h1>Password:</h1>
      		<input type="text" name="" value={password} onChange={handleChangePassword } />
      		<button onClick={handleclick}> Register</button>
       </div>
        <div className='board__div'>Already a user? 
           <span className='board__registerbutton' onClick={e=>onRouteChange('signin')} > 
            Signin to continue </span>
        </div>
      </div> 
  );
}

export default Register;