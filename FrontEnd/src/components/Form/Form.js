import React from 'react'
import './Form.css'
import { Outlet,Link, Navigate} from 'react-router-dom'
import {useState,useEffect} from 'react';



const Form = ()=>{

    const [name,setname] = useState('');
    const [password,setpassword] = useState('');    

    const Handlelogin = ()=>{
            Navigate('/');
/*         axios.get(`http://localhost:8080/login/${name}/${password}`).then(response =>{
            if(response.data == true)
            Navigate('/sprint');
        }) */
    }

    return(
        <div>
            <div class="wrapper">
                <h1>Hello Again!</h1>
                <p>Welcome back you've been missed</p>
                    <form>
                    <input type="text" placeholder="Enter username" onChange={e=>setname(e.target.value)}></input>
                        <input type="password" placeholder="Password" onChange={e=>setpassword(e.target.value)}></input>
                            <p class="recover">
                                <a href="#">Recover Password</a>
                            </p>
                    </form>
                    
                    
                <button onClick={Handlelogin}>Sign in</button>
                <div class="not-member">
                Not a member?   <Link to="/home/register"> Register Now </Link>
                </div>
            </div>
        </div>
    )
}

export default Form;
