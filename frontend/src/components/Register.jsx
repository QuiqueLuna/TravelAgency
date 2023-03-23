import React,{Component} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

class Register extends Component{

    state={
        name: '',
        email: '',
        password: ''
    }

    onSubmit=async(event)=>{
        event.preventDefault();
        const newMember ={
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        const res = await axios.post('http://localhost:4000/Register', newMember);
        console.log(res.data);
    }
    
    onChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="signup-form">
                <img src="/Images/userImg.png" alt=""/>
                <h1>Sign Up</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="name" className="input-box" placeholder="Your name" name="name" onChange={this.onChange} required/>
                    <input type="email" className="input-box" placeholder="Your email adress" name="email" onChange={this.onChange} required/>
                    <input type="password" className="input-box" placeholder="Enter a password" name="password" onChange={this.onChange} required/>
                    <p><span><input required type="checkbox"/></span> I agree the terms and conditions</p>
                    <button className="buttonLogIn" type="submit">Sign up now!</button>
                    <hr/>
                    <p className="or">OR</p>
                    <p>Do you have an account? <Link to="/Login">Log In</Link></p>
                </form>
            </div>
        )
    }
}

export default Register;