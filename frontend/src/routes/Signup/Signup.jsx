import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./Signup.scss";
import Title from "../../components/Title/Title";
import {signup} from "../../services/auth-services";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useIdentity } from "../../hooks/IdentityProvider";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};



// And now we can use these
const SignupForm = () => {
  const [error, setError] = useState("");
  const { login } = useIdentity();

  const handleSignup = async (firstName, lastName, email, password) => {
    try {
      const res = await signup(firstName, lastName, email, password);
      login(res.data.access_token, res.data.refresh_token)
    }catch(err){
      setError(err.response.data.message);
    }
  };

  return (
    <div className="auth-card card d-flex margin-bottom-20">
      <Title title="Signup" />
      { error && 
        <div className="alert alert-danger">
        {error}
      </div>
}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          handleSignup(values.firstName, values.lastName, values.email, values.password);
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput
            className="form-control"
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            className="form-control"
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            className="form-control"
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MyTextInput
            className="form-control"
            label="Password"
            name="password"
            type="password"
            placeholder=""
          />

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <div className="text-center">
        Already a Member? <Link to="/login">Sign In.</Link>
      </div>
    </div>
  );
};

export default SignupForm;
