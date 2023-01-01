// @ts-ignore

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header";
import {
  checkEmailIsValid,
  checkNameIsValid,
  checkPhoneNumberIsValid,
} from "../utils/validations";

interface Props {
  handleInfo: Function;
  name: string;
  email: string;
  phone: string;
  step: number;
}

const Info: React.FC<Props> = ({ handleInfo, name, email, phone, step }) => {
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

  // const [error, setError] = useState(false);

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

  const checkIfInputIsEmpty = (
    input: string,
    inputName: string
  ): boolean | void => {
    const targetElement: HTMLInputElement = document.getElementById(
      inputName
    ) as HTMLInputElement;
    const targetParentElement: HTMLElement = targetElement.closest(
      ".form__element"
    ) as HTMLElement;

    if (input === "") {
      targetParentElement.classList.add("error");
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

  const checkIfInputIsNotValid = (
    elementToCheck: string,
    inputName: string,
    callback: Function
  ): boolean | void => {
    const targetElement: HTMLInputElement = document.getElementById(
      inputName
    ) as HTMLInputElement;
    const targetParentElement: HTMLElement = targetElement.closest(
      ".form__element"
    ) as HTMLElement;

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
      //double check originally:
      //return;
      return false;
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

  const checkForm = () => {
    const errors = {
      name: "",
      email: "",
      phone: "",
    };

    let formIsValid = true;

    const targetElements: HTMLInputElement[] = document.querySelectorAll(
      ".form__element__input"
    ) as unknown as HTMLInputElement[];

    targetElements.forEach((targetElement) => {
      const targetElementId = targetElement.id;
      if (userInfo[targetElementId] === "") {
        // const targetElement = document.getElementById("name");
        const targetParentElement: HTMLElement = targetElement.closest(
          ".form__element"
        ) as HTMLElement;
        targetParentElement.classList.add("error");

        errors[targetElementId] = "This is required";
        formIsValid = false;
        return;
      }

      switch (targetElementId) {
        case "name":
          if (!checkNameIsValid(userInfo[targetElementId])) {
            const targetParentElement: HTMLElement = targetElement.closest(
              ".form__element"
            ) as HTMLElement;
            targetParentElement.classList.add("error");

            errors[targetElementId] = "Invalid name";
            formIsValid = false;
          }
          if (checkNameIsValid(userInfo[targetElementId])) {
            const targetParentElement: HTMLElement = targetElement.closest(
              ".form__element"
            ) as HTMLElement;
            targetParentElement.classList.remove("error");

            errors.name = "";
          }

          break;
        case "email":
          if (!checkEmailIsValid(userInfo[targetElementId])) {
            const targetParentElement: HTMLElement = targetElement.closest(
              ".form__element"
            ) as HTMLElement;
            targetParentElement.classList.add("error");

            errors[targetElementId] = "Invalid email";
            formIsValid = false;
          }
          if (checkEmailIsValid(userInfo[targetElementId])) {
            const targetParentElement: HTMLElement = targetElement.closest(
              ".form__element"
            ) as HTMLElement;
            targetParentElement.classList.remove("error");

            errors.email = "";
          }
          break;
        case "phone":
          if (!checkPhoneNumberIsValid(userInfo[targetElementId])) {
            const targetParentElement: HTMLElement = targetElement.closest(
              ".form__element"
            ) as HTMLElement;
            targetParentElement.classList.add("error");

            errors[targetElementId] = "Invalid phone number";
            formIsValid = false;
          }
          if (checkPhoneNumberIsValid(userInfo[targetElementId])) {
            const targetParentElement: HTMLElement = targetElement.closest(
              ".form__element"
            ) as HTMLElement;
            targetParentElement.classList.remove("error");

            errors.phone = "";
          }
          break;
      }
    });

    setUserInfoError(errors);
    return formIsValid;
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (checkForm()) {
      handleInfo(userInfo);
    }
  };

  return (
    <div>
      <section className="section section--info">
        <Header
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        <form className="form" method="post">
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
            />
            <span className="form__element__error-message">
              {userInfoError.phone}
            </span>
          </div>
        </form>
      </section>

      <Footer path={step} handleClick={handleClick} />
    </div>
  );
};

export default Info;
