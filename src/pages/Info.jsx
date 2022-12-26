import React, { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {
  checkEmailIsValid,
  checkNameIsValid,
  checkPhoneNumberIsValid,
} from "../utils/validations";

const Info = ({ nextPage, handleInfo, name, email, phone }) => {
  const [userInfo, setUserInfo] = useState({
    name: name,
    email: email,
    phone: phone,
  });

  const [userInfoError, setUserInfoError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const { formIsValid, setFormIsValid } = useState(false);

  const handleChangeName = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value.trimStart() });
    checkNameIsValid(e.target.value);
    console.log(checkNameIsValid(e.target.value));
  };

  const handleChangeEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value.trimStart() });
    checkEmailIsValid(e.target.value);
    console.log(checkEmailIsValid(e.target.value));
  };

  const handleChangePhone = (e) => {
    setUserInfo({ ...userInfo, phone: e.target.value });
    checkPhoneNumberIsValid(e.target.value);
    console.log(checkPhoneNumberIsValid(e.target.value));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  // };

  const checkIfInputIsEmpty = (input, inputName) => {
    const targetElement = document.getElementById(inputName);
    const targetParentElement = targetElement.closest(".form__element");

    console.log(input);
    if (input === "") {
      // console.log("ola");
      targetParentElement.classList.add("error");
      // formElement.classList.add("error");
      // const inputId = input.split(".");
      // console.log(inputId);
      // console.log(inputName);
      switch (inputName) {
        case "name":
          console.log("name");
          setUserInfoError({
            ...userInfoError,
            name: "This field is required!",
          });
          return true;
        case "email":
          console.log("email");

          setUserInfoError({
            ...userInfoError,
            email: "This field is required!",
          });
          return true;
        case "phone":
          console.log("phone");

          setUserInfoError({
            ...userInfoError,
            phone: "This field is required!",
          });
          return true;
        default:
          console.error("there is an error");
          break;
      }
      return false;
    }
  };

  const checkIfInputIsNotValid = (elementToCheck, inputName, callback) => {
    const targetElement = document.getElementById(inputName);
    const targetParentElement = targetElement.closest(".form__element");

    if (!callback(elementToCheck)) {
      targetParentElement.classList.add("error");
      switch (inputName) {
        case "name":
          setUserInfoError({ ...userInfoError, name: "Invalid user name." });
          return true;
        case "email":
          setUserInfoError({ ...userInfoError, email: "Invalid email!" });
          return true;
        case "phone":
          setUserInfoError({
            ...userInfoError,
            phone: "Invalid phone number!",
          });
          return true;

        default:
          console.error("there is an error");
          break;
      }
      return;
    }
  };

  const handleBlur = (e, elementToCheck, callback) => {
    const formElement = e.target.closest(".form__element");
    const inputId = e.target.id;
    // console.log(elementToCheck);

    if (checkIfInputIsEmpty(elementToCheck, inputId)) {
      return;
    }

    if (checkIfInputIsNotValid(elementToCheck, inputId, callback)) {
      return;
    }
    formElement.classList.remove("error");
    // handleError(false);
    switch (inputId) {
      case "name":
        setUserInfoError({ ...userInfoError, name: "" });
        break;
      case "email":
        setUserInfoError({ ...userInfoError, email: "" });
        break;
      case "phone":
        setUserInfoError({ ...userInfoError, phone: "" });
        break;

      default:
        console.error("there is an error");
        break;
    }
  };

  useEffect(() => {
    const checkIfError = () => {
      Object.keys(userInfoError).map((error) => {
        if (userInfoError[error] !== "") {
          return true;
        }
        return false;
      });
    };

    setError(checkIfError());

    // handleError(checkIfError());
  }, [userInfoError]);

  // console.log(userInfoError);

  const checkForm = () => {
    // checkIfInputIsEmpty(userInfo.name, "name");
    // checkIfInputIsEmpty(userInfo.email, "email");
    // checkIfInputIsEmpty(userInfo.phone, "phone");
    const errors = {
      name: "",
      email: "",
      phone: "",
    };

    let formIsValid = true;

    if (userInfo.name === "") {
      const targetElement = document.getElementById("name");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.add("error");

      errors.name = "This is required";
      formIsValid = false;
    }
    if (!checkNameIsValid(userInfo.name)) {
      const targetElement = document.getElementById("name");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.add("error");

      errors.name = "Invalid name";
      formIsValid = false;
    }
    if (checkNameIsValid(userInfo.name)) {
      const targetElement = document.getElementById("name");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.remove("error");

      errors.name = "";
    }

    if (userInfo.email === "") {
      const targetElement = document.getElementById("email");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.add("error");

      errors.email = "This is required";
      formIsValid = false;
    }
    if (!checkEmailIsValid(userInfo.email)) {
      const targetElement = document.getElementById("email");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.add("error");

      errors.email = "Invalid email";
      formIsValid = false;
    }
    if (checkEmailIsValid(userInfo.email)) {
      const targetElement = document.getElementById("email");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.remove("error");

      errors.email = "";
    }

    if (userInfo.phone === "") {
      const targetElement = document.getElementById("phone");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.add("error");

      errors.phone = "This is required";
      formIsValid = false;
    }
    if (!checkPhoneNumberIsValid(userInfo.phone)) {
      const targetElement = document.getElementById("phone");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.add("error");

      errors.phone = "Phone number invalid";
      formIsValid = false;
    }
    if (checkPhoneNumberIsValid(userInfo.phone)) {
      const targetElement = document.getElementById("phone");
      const targetParentElement = targetElement.closest(".form__element");
      targetParentElement.classList.remove("error");

      errors.phone = "";
    }

    setUserInfoError(errors);
    return formIsValid;
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (checkForm()) {
      handleInfo(userInfo);
      // nextPage();
    }
  };

  return (
    <div>
      <section className="section section--info">
        <Header
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        <form
          className="form"
          method="post"
          // onSubmit={handleSubmit}
          // action="/form/plan"
        >
          <div className="form__element">
            <label className="form__element__label" htmlFor="name">
              Name
            </label>
            <input
              className="form__element__input"
              type={"text"}
              id="name"
              name="name"
              placeholder="e.g. Stephen King"
              onChange={handleChangeName}
              onBlur={(e) => handleBlur(e, userInfo.name, checkNameIsValid)}
              value={userInfo.name}
              // required
              maxLength={30}
            />
            <span className="form__element__error-message">
              {userInfoError.name}
            </span>
          </div>
          <div className="form__element">
            <label className="form__element__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__element__input"
              type={"email"}
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              onChange={handleChangeEmail}
              onBlur={(e) => handleBlur(e, userInfo.email, checkEmailIsValid)}
              value={userInfo.email}
              // required
              maxLength={30}
            />
            <span className="form__element__error-message">
              {userInfoError.email}
            </span>
          </div>
          <div className="form__element">
            <label className="form__element__label" htmlFor="phone">
              Phone number
            </label>
            <input
              className="form__element__input"
              type={"text"}
              id="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              onChange={handleChangePhone}
              value={userInfo.phone}
              onBlur={(e) =>
                handleBlur(e, userInfo.phone, checkPhoneNumberIsValid)
              }
              // onBlur={console.log(checkPhoneNumberIsValid(userInfo.phone))}
              // required
            />
            <span className="form__element__error-message">
              {userInfoError.phone}
            </span>
          </div>

          {/* <input type="submit" value="Submit" onSubmit={handleSubmit}></input> */}
          <Footer
            path={"/form/info"}
            error={error}
            // checkForm={checkForm}
            handleClick={handleClick}
          />
        </form>
      </section>

      {/* <Footer path={currentPage} /> */}
    </div>
  );
};

export default Info;
