import React from 'react';
import SocialButton from './SocialButton';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className="card flex-shrink-0 mx-auto max-w-lg  bg-base-100">
                <h2 className='text-center text-4xl font-semobold pt-3'>Create Account</h2>
                <p className='text-center'>Or <Link className='underline' to="/login">Login</Link></p>

                <div className="card-body pt-0">
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-xl">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered border-primary rounded-sm" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-xl">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered border-primary rounded-sm" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-xl">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered border-primary rounded-sm" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-sm text-white">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>

                    </div>
                    <SocialButton></SocialButton>
                </div>
            </div>
        </div>
    );
};

export default Registration;