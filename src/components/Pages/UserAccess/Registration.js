import React from 'react';
import SocialButton from './SocialButton';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { toast } from 'react-toastify';
import useToken from './../../Hooks/useToken';


const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth, { sendEmailVerification: true });
    const [token] = useToken(user)

    const handleSignUp = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password, name)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })

        await e.target.reset();
        await toast.success("account created successfully. Please check your email to verify")


    }
    if (user) {
        console.log(user)
    }
    return (
        <div>
            <div className="card flex-shrink-0 mx-auto max-w-lg  bg-base-100">
                <h2 className='text-center text-4xl font-semobold pt-3'>Create Account</h2>
                <p className='text-center'>Or <Link className='underline' to="/login">Login</Link></p>

                <div className="card-body pt-0">
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary text-xl">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered border-primary rounded-sm" required />
                        </div>
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
                            <input name='password' type="password" placeholder="Password" className="input input-bordered border-primary rounded-sm" />
                        </div>

                        {/* error message================================ */}
                        {
                            error && <p className='text-error text-center'>{error.message}</p>
                        }
                        {/* error message================================ */}

                        <div className="form-control mt-6">
                            {
                                loading ? <input type="submit" className="btn btn-primary rounded-sm text-white" value="Creating account" /> : <input type="submit" className="btn btn-primary rounded-sm text-white" value="Create an account" />
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

export default Registration;