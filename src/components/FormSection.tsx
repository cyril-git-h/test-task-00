import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import kitty1 from '../images/kitty1.jpg';
import kitty2 from '../images/kitty2.jpg';
import kitty3 from '../images/kitty3.jpg';

function FormSection(props:any) {
  let { setRequested } = props
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
        "Invalid phone number"
      ),
  })
  return (
    <div className="form-section">
      <div className="form-section__form">
        <div>
          <h1 className="form-section__title">Form</h1>
          <Formik
            initialValues={{ firstName: '', lastName: '', phoneNumber: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setRequested(true)
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ errors }) => (
              <Form>
                <Field className="input" placeholder="First Name" name="firstName" error={!!errors.firstName} helperText={errors.firstName} type="text" as={TextField} />

                <Field className="input" placeholder="Last Name" name="lastName" error={!!errors.lastName} helperText={errors.lastName} type="text" as={TextField} />

                <Field className="input" placeholder="Phone" name="phoneNumber" error={!!errors.phoneNumber} helperText={errors.phoneNumber} type="tel" as={TextField} />

                <Button variant="contained" type="submit">Submit</Button>
              </Form>)}
          </Formik>
        </div>
      </div>
      <div className="form-section__images">
        <img className="image1" src={kitty1} alt="image1" />
        <img className="image2" src={kitty2} alt="image2" />
        <img className="image3" src={kitty3} alt="image3" />
      </div>
    </div>
  );
}

export default FormSection;