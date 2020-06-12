import React from "react";

export const isValidEmail = (email) => {
  if (email !== "") {
    if (email && /(^\w.*@\w+\.\w)/.test(email)) {
      return null;
    } else {
      return <p className="error"> It must be like example@example.com </p>;
    }
  }
};

export const isValidName = (name) => {
  if (name.length <= 2 && name.length !== 0) {
    return <p className="error"> name must be at least 3 characters </p>;
  }
};

export const isValidPassword = (password) => {
  if (password.length <= 5 && password.length !== 0) {
    return <p className="error">password must be at least 5 characters</p>;
  }
};

export const displayError = (error) => {
  if (error !== null) {
    return <p className="error">{error}</p>;
  }
};

export const operationSuccess = (success) => {
  if (success !== null) {
    return <p className="success">{success}</p>;
  }
};
