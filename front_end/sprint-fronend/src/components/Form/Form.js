import React from 'react'
import './Form.css'
import { Outlet,Link, Navigate} from 'react-router-dom'
import ManagerService from '../../services/ManagerService'
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



const Form = ()=>{

    const [name,setname] = useState('');
    const [password,setpassword] = useState('');   
    const navigate = useNavigate();  
 

    const Handlelogin = ()=>{
        if(name !== '' && password !== '')
        var man=ManagerService.getByName(name,password);
        if(man!=undefined)
        navigate('/sprint');
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
