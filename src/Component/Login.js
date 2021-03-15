import React from 'react';
import styled from 'styled-components';


const Login = ({handleDashboard}) =>{

  return(
    <HeaderComponent>
      <button >Login</button>
      <div>
        <label onClick={()=>handleDashboard('app')}>
          <input type='radio' name='options' value='App'/> 
          App
        </label> 
        <label onClick={()=>handleDashboard('admin')}>
          <input type='radio' name='options' value='Admin'/> 
          Admin
        </label> 
      </div>
    </HeaderComponent>
  )
}
export default Login;

const HeaderComponent = styled.div `
  padding: 5px;
  display: flex;
  width: 70%;
  margin: 2% auto;
  flex-flow: row nowrap;
  justify-content: space-between;

  button{
    padding: 1px 15px;
    background: #028eec;
    border-radius: 5px;
    font-size: 1.8em;
    font-weight: 800;
    color: #fff;
    width:13rem;
    border:none;
    cursor: pointer;
  }
  button:hover{
    background: #fff;
    color: #028eec;
    border: 1px solid #028eec;
    transition: all ease 2s;
  }
  button:focus{
    outline-color: #028eec;
  }
  div{
    padding:5px;
    display:flex;
    flex-direction: column;
  }
  label{
    margin:3% 15px;
    font-size: 1.2em;
    font-weight: bold;
  }
`