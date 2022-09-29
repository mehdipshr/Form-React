import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super();
        this.state = {
            
            firstName : '',
            lastName : '',
            postCode: '',
            email:'',
            password:'',
            users: []

        }
    }

    submitForm = (e) => {
        e.preventDefault();
        let currentUsers = this.state.users;
        let newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            postCode: this.state.postCode,
            email: this.state.email, 
            password: this.state.password,
            
        }
        currentUsers.push(newUser);
        this.setState( { users: currentUsers } )
        console.log(this.state);
    }
    handleChange = (e) => {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value})
    }
    
    render() {
        console.log(this.state)
        return (
            <div id='form'>
                <form className="col s12" onSubmit={this.submitForm}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name='firstName'  placeholder="FirstName" id="first_name" type="text" className="validate" onChange={ this.handleChange} required/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name='lastName' id="last_name" type="text" className="validate" onChange={ this.handleChange} required/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name='postCode' id="disabled" type="text" className="validate" onChange={ this.handleChange} required/>
                            <label htmlFor="disabled">Post Code </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name='password' id="password" type="password" className="validate" onChange={ this.handleChange} required/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name='email' id="email" type="email" className="validate" onChange={ this.handleChange} required />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button onSubmit={this.submitForm}>submit</button>
                </form>
                <br/>
                <hr/>
                <div>
                    {this.state.users && this.state.users.map( (user, index) => {
                        return(
                            // baraye in div ke be tedade namahdod tekrar mishe bayad az class baraye style stefade konim
                        <div key={index} className="user-info" id={`user-${index}`}> 
                            {index}
                            <p>First Name : {user.firstName} </p>
                            <p>Last Name : {user.lastName} </p>
                            <p>Email : {user.email} </p>
                            <p>Post Code : {user.postCode} </p>
                            <p>Password : {user.password} </p>
                            <button>Delete</button>
                            <hr/>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

