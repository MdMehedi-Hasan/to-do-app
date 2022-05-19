import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div className="hero min-h-screen bg-green-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text" >Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" disabled/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" disabled/>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={()=>signInWithGoogle()} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;