import * as yup from "yup";

export const userSchemaLogIn = yup.object().shape({
    name: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(5, 'Password is too short - should be 5 chars minimum.')
        .required('Password is required')
})

export const userSchemaRegister = yup.object().shape({
    name: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(5, 'Password is too short - should be 5 chars minimum.')
        .required('Password is required'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()
})
