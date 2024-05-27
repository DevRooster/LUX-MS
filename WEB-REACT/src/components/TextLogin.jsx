import React from "react";

const TextLogin = ({nameLogin}) => {
  return (
    <div className="login-field" style={{ paddingTop: '6px' }}>
      <label className="login-label">{nameLogin}</label>
      <input className="login-input" placeholder={nameLogin} type="text" />
    </div>
  );
};

export default TextLogin;
