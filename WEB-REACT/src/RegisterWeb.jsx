import BotonNav from "./components/BotonNav";
import PassLogin from "./components/PassLogin";
import TextLogin from "./components/TextLogin";

export function RegisterWeb() {
  return (
    <article className="login-container">
      <header className="login-header">
        <img
          className="login-avatar"
          src={"https://unavatar.io/login"}
          alt="AvatarLogin"
        />
        <div className="login-title">
          <strong>Register</strong>
        </div>
      </header>
      <TextLogin nameLogin={"UserName"}/>
      <TextLogin nameLogin={"LastName"}/>
      <TextLogin nameLogin={"E-Mail"}/>
      <PassLogin keyLogin={"Password"}/>
      <aside className="login-aside">
        <BotonNav nombreNav={"Back"} url={"/"}/>
        <BotonNav nombreNav={"Create"} url={"/"}/>
      </aside>
    </article>
  );
}
