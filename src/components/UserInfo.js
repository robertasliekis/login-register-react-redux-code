import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

function UserInfo({ users, setActiveUser, onChange, loginStatus }) {
  const { register, handleSubmit, getValues, errors } = useForm();

  const onSubmit = (data) => {
    Object.values(users).forEach((user) => {});
  };

  //if (loginStatus) {
  if (loginStatus) {
    const emailValue = setActiveUser.email;

    function update(event) {
      // setText(event.target.value);
      if (typeof onChange === "function") {
        onChange(event.target.value);
      }
    }
    return (
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-heading">EDIT USER INFO</h1>
        <div className="form-input">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={emailValue}
              onChange={update}
              ref={register({
                required: "*Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
          </div>

          <div className="error-message">{errors.email && errors.email.message}</div>
        </div>
        <div className="form-input">
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              ref={register({ required: "*Password is required" })}
            />
          </div>

          <div className="error-message">{errors.password && <p>{errors.password.message}</p>}</div>
        </div>

        <div className="form-input">
          <div>
            <label htmlFor="repeat_password">Repeat Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="repeat_password"
              ref={register({
                required: "*Password is required",
                validate: (value) => {
                  if (value === getValues()["password"]) {
                    return true;
                  } else {
                    return "The passwords do not match";
                  }
                },
              })}
            />
          </div>

          <div className="error-message">
            {errors.repeat_password && <p> {errors.repeat_password.message}</p>}
          </div>
        </div>
        <div className="message-container">
          <div className="error-message green-text">Save successful</div>
        </div>
        <button className="btn btn-submit" type="submit">
          SAVE
        </button>
      </form>
    );
  } else {
    return (
      <div>
        <h1>You have to log-in</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.addUser.users,
  setActiveUser: state.setActiveUser.userId,
  loginStatus: state.isLoggedIn.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
