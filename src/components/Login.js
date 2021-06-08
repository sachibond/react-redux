import React, {useDispatch,useState} from 'react';
import axios from 'axios';
import {addLoginDetail} from '../actions/loginAction';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const emailChange = (e)=>{
        setEmail(e.target.value);
    }

    const loginSubmit =(e)=>{
        e.preventDefault();
        axios.post('https://reqres.in/api/login', {email,password})
        .then(res =>{
            console.log(res)
            dispatch(addLoginDetail(email, res.data.token))
        })
        .catch(err=>console.log(err))
    }
    return (
        <form className="row g-3" onSubmit={loginSubmit}>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" value={email} onChange={emailChange}/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div> 
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
        
    )
}
