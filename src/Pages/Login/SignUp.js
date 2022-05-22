import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (loading || googleLoading || updating) {
        return <p>Loading..</p>
    }
    if (user || googleUser) {
        navigate('/');
    }
    let getError;
    if (error || googleError || updateError) {
        getError = <p>{error.message || googleError.message || updateError.message}</p>
    }

    return (
        <div className='flex h-screen justify-center items-center my-2'>
            <div class="card w-96 lg:w-1/3 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className="text-3xl text-center text-purple-600">Signup Here</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                            })}
                                type="text"
                                placeholder="Your Name"
                                class="input input-bordered w-full"
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <p>{errors.name.message}</p>}
                            </label>
                        </div>
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
                <p className='text-center mt-0 pt-0'>Have an acount?<Link to='/login'>Login here</Link></p>
                <div class="divider p-5">OR</div>
                <div className='mx-auto mb-5'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline'>Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;