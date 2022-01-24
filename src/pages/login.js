import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Lottie from "react-lottie";

import useWindowDimensions from "../hooks/useWindowDimensions";
import Icon from "../assets/Icons";
import { login, requestAccess, changePassword } from "../api/auth";
import successAnimation from "../assets/animations/success.json";
import "./login.css";

const defaultOptionsAnimation = (animationData) => {
  return {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Please Enter Your Email"),
  password: yup
    .string()
    .required("Please Enter Your Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain Atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const newPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Please Enter Your Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain Atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  repeatNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

const requestAccessFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please Enter Your Name")
    .min(8, "Too Short!")
    .max(60, "Too Long!"),
  email: yup.string().email().required("Please Enter Your Email"),
  comment: yup
    .string()
    .required("Please enter your comment")
    .min(25, "Too Short!")
    .max(500, "Too Long!"),
});

const loginForm = (
  loading,
  setLoading,
  error,
  setError,
  setForm,
  setEmail,
  setPassword
) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setError(false);
        setLoading(true);
        try {
          const { data } = await login(values.email, values.password);
          if (data.status === "FAILED") setError(data.message);
          if (
            data.status === "SUCCESS" &&
            data.message === "Change Password!"
          ) {
            setForm("setPassword");
            setEmail(values.email);
            setPassword(values.password);
          }
          if (data.token) {
            localStorage.setItem("x-auth-token", data.token);
            window.location.reload();
          }
        } catch (ex) {
          console.log(ex);
        }
        setSubmitting(false);
        setLoading(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          {loading && <div className="form-header">Logging In ...</div>}
          {error && (
            <div className="form-header" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <div className="input-container">
            <div className="input-icon">
              <Icon name="email" />
            </div>
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="field-error">
            {errors.email && touched.email && errors.email}
          </div>
          <div className="input-container">
            <div className="input-icon">
              <Icon name="key" />
            </div>
            <input
              className="input-field"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          <div className="field-error">
            {errors.password && touched.password && errors.password}
          </div>
          <div className="btn-container">
            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

const changePasswordForm = (
  email,
  oldPassword,
  loading,
  setLoading,
  error,
  setError
) => {
  return (
    <Formik
      initialValues={{ newPassword: "", repeatNewPassword: "" }}
      validationSchema={newPasswordSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setError(false);
        try {
          setLoading(true);
          const { data } = await changePassword(
            email,
            oldPassword,
            values.newPassword
          );
          if (data.status === "FAILED") setError(data.message);
          if (data.token) {
            localStorage.setItem("x-auth-token", data.token);
            window.location.reload();
          }
        } catch (ex) {
          console.log(ex);
        }
        setLoading(false);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          {!loading && !error && (
            <div className="form-header">Change Password</div>
          )}
          {loading && <div className="form-header">Logging In ...</div>}
          {error && (
            <div className="form-header" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <div className="input-container">
            <div className="input-icon">
              <Icon name="key" />
            </div>
            <input
              className="input-field"
              type="password"
              name="newPassword"
              placeholder="New Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.newPassword}
            />
          </div>
          <div className="field-error">
            {errors.newPassword && touched.newPassword && errors.newPassword}
          </div>
          <div className="input-container">
            <div className="input-icon">
              <Icon name="key" />
            </div>
            <input
              className="input-field"
              type="password"
              name="repeatNewPassword"
              placeholder="Repeat New Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.repeatNewPassword}
            />
          </div>
          <div className="field-error">
            {errors.repeatNewPassword &&
              touched.repeatNewPassword &&
              errors.repeatNewPassword}
          </div>
          <div className="btn-container">
            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Save and Login
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

const requestAccessForm = (
  loading,
  setLoading,
  error,
  setError,
  setSuccess
) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", comment: "" }}
      validationSchema={requestAccessFormSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setError(false);
        try {
          setLoading(true);
          const { data } = await requestAccess(
            values.email,
            values.name,
            values.comment
          );
          if (data.status === "FAILED") setError(data.message);
          if (
            data.status === "SUCCESS" &&
            data.message === "User requested / updated successfully"
          )
            setSuccess(true);
        } catch (ex) {
          console.log(ex);
        }
        setLoading(false);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        handleReset,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {!loading && !error && <div className="form-header">Nice!</div>}
          {loading && <div className="form-header">Requesting ...</div>}
          {error && (
            <div className="form-header" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <div className="input-container">
            <div className="input-icon">
              <Icon name="account2" size="30" />
            </div>
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          <div className="field-error">
            {errors.name && touched.name && errors.name}
          </div>
          <div className="input-container">
            <div className="input-icon">
              <Icon name="email" />
            </div>
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="field-error">
            {errors.email && touched.email && errors.email}
          </div>

          <div className="input-text-container">
            <div className="input-icon">
              <Icon name="comment" />
            </div>
            <textarea
              className="input-field-text-area"
              type="text"
              name="comment"
              rows="7"
              placeholder="Kindly mention your interest in this venture"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
            />
          </div>
          <div className="field-error">
            {errors.comment && touched.comment && errors.comment}
          </div>
          <div className="btn-container">
            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Request
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

const LoginPage = () => {
  const { height, width } = useWindowDimensions();
  const [form, setForm] = useState("login"); // login or setPassword or request

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [loginingIn, setLoggingIn] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [reqSuccess, setReqSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="login-container" style={{ minHeight: height }}>
      <div className="coming-soon">COMING SOON</div>
      <div className="logo">
        <Icon name="logo" />
      </div>
      <div className="desc">
        Your authentic avatar using multi-media social content
      </div>
      <div className="form-container">
        <div className="form-title">Potential Investor and Partner Login</div>
        {reqSuccess && (
          <div style={{ marginTop: 10 }}>
            <Lottie
              options={defaultOptionsAnimation(successAnimation)}
              height={150}
              width={150}
            />
            <div className="success-message">
              Thank you for showing your interest in this venture, we will reach
              you shortly!
            </div>
          </div>
        )}
        {form === "login" &&
          !reqSuccess &&
          loginForm(
            loginingIn,
            setLoggingIn,
            error,
            setError,
            setForm,
            setEmail,
            setPassword
          )}
        {form === "setPassword" &&
          !reqSuccess &&
          changePasswordForm(
            email,
            password,
            loginingIn,
            setLoggingIn,
            error,
            setError
          )}
        {form === "request" &&
          !reqSuccess &&
          requestAccessForm(
            requesting,
            setRequesting,
            error,
            setError,
            setReqSuccess
          )}
      </div>
      {form !== "request" ? (
        <div className="req-access">
          Request access{" "}
          <span
            className="req-link"
            onClick={() => {
              setForm("request");
              setError(false);
            }}
          >
            here
          </span>
        </div>
      ) : (
        <div className="req-access">
          Back To{" "}
          <span
            className="req-link"
            onClick={() => {
              setReqSuccess(false);
              setForm("login");
              setError(false);
            }}
          >
            Login
          </span>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
