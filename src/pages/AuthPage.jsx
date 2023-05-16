import { useFormik } from 'formik';
import * as yup from 'yup';
import "../resources/css/login.css";
import { useState } from 'react';

const validationSchemaLogin = yup.object({
    nameLogin: yup.string().required('Name is required'),
    emailLogin: yup.string().email('Invalid email').required('Email is required'),
    passwordLogin: yup.string().required('Password is required'),
});
const validationSchemaRegister = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const initialValuesLogin = {
    nameLogin: '',
    emailLogin: '',
    passwordLogin: '',
};

const initialValuesRegister = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
};
export let AuthPage = () => {
    const [formType, setFormType] = useState("login")

    const validationSchema = formType === 'register' ? validationSchemaRegister : validationSchemaLogin;
    const initialValues = formType === 'register' ? initialValuesRegister : initialValuesLogin;

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    console.log({
        validationSchema,
        initialValues
    });
    return (

        <>
            <div className="container-fluid p-5 bg-primary text-white text-center login-cover">
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="shadow-5-strong form-box">
                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li className="nav-item" role="presentation" onClick={() => setFormType('login')}>
                                    <a className="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
                                        aria-controls="pills-login" aria-selected="true">Login</a>
                                </li>
                                <li className="nav-item" role="presentation" onClick={() => setFormType('register')}>
                                    <a className="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
                                        aria-controls="pills-register" aria-selected="false">Register</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="nameLogin"
                                                name="nameLogin"
                                                className="form-control" placeholder="username"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.nameLogin}
                                            />
                                            {formik.touched.nameLogin && formik.errors.nameLogin && <div className="text-danger">{formik.errors.nameLogin}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="emailLogin"
                                                name="emailLogin"
                                                className="form-control"
                                                placeholder='email'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.emailLogin}
                                            />
                                            {formik.touched.emailLogin && formik.errors.emailLogin && <div className="text-danger">{formik.errors.emailLogin}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="passwordLogin"
                                                name="passwordLogin"
                                                className="form-control"
                                                placeholder='password'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.passwordLogin}
                                            />
                                            {formik.touched.passwordLogin && formik.errors.passwordLogin && <div className="text-danger">{formik.errors.passwordLogin}</div>}
                                        </div>
                                        <div className="row mb-4">

                                        </div>
                                        <button type="submit" className="btn btn-main btn-block mb-4">Sign in</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control" placeholder="username"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                            {formik.touched.name && formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder='email'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                            {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="form-control"
                                                placeholder='password'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />
                                            {formik.touched.password && formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="passwordConfirmation"
                                                name="passwordConfirmation"
                                                className="form-control"
                                                placeholder='same password'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.passwordConfirmation}
                                            />
                                            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && <div className="text-danger">{formik.errors.passwordConfirmation}</div>}
                                        </div>
                                        <div className="row mb-4">
                                        </div>
                                        <button type="submit" className="btn btn-main btn-block mb-4">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div >
            </div >
            <div className="foo">
                <footer className="text-center text-white bg-green">
                    <div className="text-center p-3">
                        ©2023 Copyright:AmigosTeam.com
                    </div>
                </footer>
            </div>
        </>
    );
}