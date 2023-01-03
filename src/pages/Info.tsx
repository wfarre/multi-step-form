import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
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

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

const Info: React.FC<Props> = ({ handleInfo, name, email, phone, step }) => {
  const [userInfo, setUserInfo] = useState<any>({
    name: name,
    email: email,
    phone: phone,
  });

  const [userInfoError, setUserInfoError] = useState<any>({
    name: "",
    email: "",
    phone: "",
  });

  // const [error, setError] = useState(false);

  const handleChangeName = (e: any) => {
    setUserInfo({ ...userInfo, name: e.target.value.trimStart() });
    checkNameIsValid(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setUserInfo({ ...userInfo, email: e.target.value.trimStart() });
    checkEmailIsValid(e.target.value);
  };

  const handleChangePhone = (e: any) => {
    setUserInfo({ ...userInfo, phone: e.target.value });
    checkPhoneNumberIsValid(e.target.value);
  };

  /**
   * The function check if the input is empty.
   * If the input is empty, it will return an error.
   * @param input:string is the input made by the user
   * @param inputName:string is the input type ("name", "email", "phone")
   * @returns boolean
   */
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

  /**
   *
   * @param elementToCheck: string is the input made by the user
   * @param inputName:string is the input type ("name", "email", "phone")
   * @param callback: function is the check funtion will call depending on the type of the input
   * @returns boolean
   */
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

  /**
   * When the input is blurred, the form will be checked. Are the entries valid or not?
   * @param e:element the element blurred
   * @param elementToCheck : string is the input made by the user
   * @param callback : function is the check funtion will call depending on the type of the input
   * @returns boolean
   */
  const handleBlur = (
    e: any,
    elementToCheck: string,
    callback: Function
  ): boolean | void => {
    const formElement = e.target.closest(".form__element");
    const inputId = e.target.id;

    if (checkIfInputIsEmpty(elementToCheck, inputId)) {
      return;
    }

    if (checkIfInputIsNotValid(elementToCheck, inputId, callback)) {
      return;
    }
    formElement.classList.remove("error");
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

  /**
   * check the entire form, if it is valid, then the user can access to the next page.
   * Otherwise, there will be messages of error.
   * @returns boolean
   */
  const checkForm = (): boolean => {
    const errors: any = {
      name: "",
      email: "",
      phone: "",
    };

    let formIsValid = true;

    const targetElements: HTMLInputElement[] = document.querySelectorAll(
      ".form__element__input"
    ) as unknown as HTMLInputElement[];

    targetElements.forEach((targetElement) => {
      const targetElementId: string = targetElement.id;
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

  /**
   * The form will be checked if valid, the user is redirected to the next page.
   *
   * @param e
   */
  const handleClick = (e: any): void => {
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
