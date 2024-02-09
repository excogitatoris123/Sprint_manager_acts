import React from 'react'
import './Form.css'

const Form = ()=>{
    return(
        <div>
            <div class="wrapper">
                <h1>Hello Again!</h1>
                <p>Welcome back you've been missed</p>
                    <form>
                    <input type="text" placeholder="Enter username"></input>
                        <input type="password" placeholder="Password"></input>
                            <p class="recover">
                                <a href="#">Recover Password</a>
                            </p>
                    </form>
                    
                    
                <button>Sign in</button>
                    <p class="or">
                    ----- or continue with -----
                    </p>
                <div class="icons">
                    <i class="fab fa-google"></i>
                    <i class="fab fa-github"></i>
                    <i class="fab fa-facebook"></i>
                </div>
                <div class="not-member">
                Not a member? <a href="#">Register Now</a>
                </div>
            </div>
        </div>
    )
}

export default Form;

