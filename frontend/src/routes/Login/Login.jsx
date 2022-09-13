import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import Title from "../../components/Title/Title";
import { useIdentity } from "../../hooks/IdentityProvider";
import {signin} from "../../services/auth-services";
import { useEffect, useState } from "react";

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

// And now we can use these
const LoginForm = () => {

  const [error, setError] = useState("");
  const { login } = useIdentity();

  const handleLogin = async (email, password) => {
    try {
      const res = await signin(email, password);
      login(res.data.access_token, res.data.refresh_token)
    }catch(err){
      setError(err.response.data.message);
    }
  };

  return (
    <div className="auth-card card d-flex margin-bottom-20">
      <Title title="Login" />
      { error && 
        <div className="alert alert-danger">
        {error}
      </div>
}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}

        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          handleLogin(values.email, values.password);
          setSubmitting(false);
        }}
      >
        <Form>

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

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
