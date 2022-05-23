import React from 'react';
import auth from '../../firebase.init';
import BannerImg from '../../images/banner-img.jpg'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || googleUser);

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    }


    if (loading || googleLoading) {
        return <p>Loading..</p>
    }

    let getError;
    if (error || googleError) {
        getError = <p>{error?.message || googleError?.message}</p>
    }

    if (token) {
        navigate('/');
    }



    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl font-bold text-center">Welcome to TOOL ARTISAN</h1>
                    <img className='w-full' src={BannerImg} alt="" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className="text-3xl text-center text-purple-600">Login Here</h1>
                        <form className='m-3' onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full ">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide valid email'
                                    }
                                })}
                                    type="text"
                                    placeholder="Your Email"
                                    class="input input-bordered w-full"
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' && <p>{errors.email.message}</p>}
                                    {errors.email?.type === 'pattern' && <p>{errors.email.message}</p>}
                                </label>
                            </div>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 or longer'
                                    }
                                })}
                                    type="password"
                                    placeholder="Your password"
                                    class="input input-bordered w-full"
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <p>{errors.password.message}</p>}
                                    {errors.password?.type === 'minLength' && <p>{errors.password.message}</p>}
                                </label>
                            </div>
                            {getError}
                            <input className='btn btn-primary w-full' type="submit" value='Sign In' />
                        </form>
                    </div>
                    <p className='text-center'>New to Tools Artsian?<Link to='/signup'>Sign Up</Link></p>
                    <div class="divider p-5">OR</div>
                    <div className='mx-auto mb-5'>
                        <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline'>Sign in with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;