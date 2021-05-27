import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function LoginForm(props:any) {
    const validationSchema = Yup.object({
        userName: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('No password provided')
            .min(8, 'Password is too short - should be 8 chars minimum')
    })

    return (
        <div className="form-section">
            <div className="form-section__form">
                <div>
                    <h1 className="form-section__title">Log in to Website</h1>
                    <Formik
                        initialValues={{ userName: '', password: '', }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                if (values.userName === 'admin' && values.password === 'admin123') {
                                    localStorage.setItem('id', '1')
                                    return props.setModalActive(false)
                                }
                                setSubmitting(false);
                                return alert('Try again');
                            }, 400);
                        }}
                    >
                        {({ errors }) => (
                            <Form>
                                <Field className="input" placeholder="Username" name="userName" error={!!errors.userName} helperText={errors.userName} type="text" as={TextField} />

                                <Field className="input" placeholder="Password" name="password" error={!!errors.password} helperText={errors.password} type="password" as={TextField} />

                                <Button variant="contained" type="submit">Submit</Button>
                            </Form>)}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;