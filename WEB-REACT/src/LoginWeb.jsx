import BotonNav from "./components/BotonNav";
import PassLogin from "./components/PassLogin";
import TextLogin from "./components/TextLogin";

export function LoginWeb() {
  return (
    <article className="login-container">
      <header className="login-header">
        <img
          className="login-avatar"
          src={"https://unavatar.io/login"}
          alt="AvatarLogin"
        />
        <div className="login-title">
          <strong>Login</strong>
        </div>
      </header>
      <main className="login-main">
        <TextLogin nameLogin={"Username"}/>
        <PassLogin keyLogin={"Password"}/>
      </main>
      <aside className="login-aside">
        <BotonNav nombreNav={"Register"} url={"/register"}/>
        <BotonNav nombreNav={"Login"} url={"/dashboard"}/>
      </aside>
    </article>
  );
}
