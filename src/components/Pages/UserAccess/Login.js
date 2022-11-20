import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import SocialButton from './SocialButton';
import auth from './../../../firebase.init';
import { useLocation } from 'react-router-dom';
import useToken from './../../Hooks/useToken';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);

        e.target.reset();
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>

            <div className="card flex-shrink-0 mx-auto max-w-lg  bg-base-100">
                <h2 className='text-center text-4xl font-semobold pt-3'>Log In</h2>
                <p className='text-center'>Or <Link className='underline' to="/registration">Create an account</Link></p>

                <div className="card-body pt-0">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-xl">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered border-primary rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-xl">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered border-primary rounded-sm" required />
                        </div>

                        {/* error message================================ */}
                        {
                            error && <p className='text-error text-center'>{error.message}</p>
                        }
                        {/* error message================================ */}


                        <div className="form-control mt-6">
                            {
                                loading ? <input type="submit" className="btn btn-primary rounded-sm text-white" value="Loading..." /> :
                                    <input type="submit" className="btn btn-primary rounded-sm text-white" value="Login" />
                            }
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

export default Login;