import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StoreContext } from '../context/store';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { navigate } = useContext(StoreContext)

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: currentState === 'Sign Up' ? Yup.string().required('Name is required') : null,
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    // Initial form values
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    // Form submission handler
    const onSubmitHandler = async (values, { resetForm }) => {
        console.log('Form values:', values);
         // Navigate to the home route
         navigate('/');
        // You can handle login or signup logic here
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitHandler}
        >
            {({ isSubmitting }) => (
                <Form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
                    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                        <p className='prata-regular text-3xl'>{currentState}</p>
                        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
                    </div>
                    {currentState === 'Sign Up' && (
                        <div className='w-full'>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Name"
                                className='w-full px-3 py-2 border border-gray-800'
                            />
                            <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
                        </div>
                    )}
                    <div className='w-full'>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className='w-full px-3 py-2 border border-gray-800'
                        />
                        <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                    </div>
                    <div className='w-full'>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className='w-full px-3 py-2 border border-gray-800'
                        />
                        <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                    </div>
                    <div className='w-full flex justify-between text-sm mt-[-8px]'>
                        <p className='cursor-pointer'>Forgot your password?</p>
                        {currentState === 'Login' ? (
                            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
                        ) : (
                            <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className='bg-black text-white font-light px-8 py-2 mt-4 rounded-sm active:bg-slate-800'
                    >
                        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Login;
