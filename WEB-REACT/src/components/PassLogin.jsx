import React from "react";

const PassLogin = ({ keyLogin }) => {
  return (
    <div className="login-field" style={{ paddingTop: "6px" }}>
      <label className="login-label">{keyLogin}</label>
      <input className="login-input" placeholder={keyLogin} type="password" />
    </div>
  );
};
export default PassLogin;
