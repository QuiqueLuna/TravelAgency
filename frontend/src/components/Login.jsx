import React,{Component} from "react";
import {Link, Redirect} from 'react-router-dom';
import axios from "axios";

class Login extends Component{
    state={
        name:'',
        email:'',
        password:'',
        activeUser: false
    }

    onSubmit = async(event)=>{
        event.preventDefault();
        const checkMember ={
            email: this.state.email,
            password: this.state.password
        }
        const res = await axios.post('http://localhost:4000/Login', checkMember);
        if(res.data.message==="Incorrect Data"){
            console.log('Incorrect Credentials')
        }else if(res.data.name!==undefined){
            console.log("Welcome",res.data.name);
            this.setState({
                name: res.data.name,
                activeUser: true
            });
            /*const activeUser={
                name: res.data.name,
                email: res.data.email
            }
            export default activeUser;
            */
        }
    }

    onChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        if(this.state.activeUser){
            return <Redirect to={{
                pathname: '/',
                state: this.state
            }}/>
        }
        return(
            <div className="signup-form">
                <img src="/Images/userImg.png" alt=""/>
                <h1>Log In</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="email" className="input-box" placeholder="Email" name="email" onChange={this.onChange} required/>
                    <input type="password" className="input-box" placeholder="Password" name="password" onChange={this.onChange} required/>
                    <button className="buttonLogIn" type="submit" onClick={this.checkLoggedIn}>Log in</button>
                    <hr/>
                    <p className="or">OR</p>
                    <p>You don't have an account? <Link to="/Register">Register</Link></p>
                </form>
            </div>
        )
    }
}

export default Login;