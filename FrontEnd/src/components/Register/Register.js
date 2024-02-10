import React from 'react'
import './Register.css'
import { Outlet,Link} from 'react-router-dom'


const Form = ()=>{
    return(
        <div>
            <div class="wrapper">
                <h1>Hello Again!</h1>
                <p>Enter all your details</p>
                    <form>
                    <input type="text" placeholder="Enter Name"></input>
                    <input type="text" placeholder="Branch Name"></input>
                    <input type="text" placeholder="Salary"></input>
                    <input type="text" placeholder="Position in company"></input>
                    <input type="password" placeholder="Enter a Password"></input>
                    </form>
                    
                    
                <button>Register</button>
            </div>
        </div>
    )
}

export default Form;
