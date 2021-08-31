import classes from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  dispatch({ type: "login", payload: false });

  const userData = useSelector((state) => state.userData);
  // console.log(userData);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rusernameRef = useRef();
  const rpasswordRef = useRef();
  const cpasswordRef = useRef();
  const nameRef = useRef();
  const history = useHistory();

  function onLoginClickHandler() {
    //event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    // const FormData = {
    //   username: username,
    //   password: password,
    // };
    let isLoggedIn = false;
    userData.map((data) => {
      if (username === data.username && password === data.password) {
        isLoggedIn = true;
        console.log("loggedin");
        dispatch({ type: "login", payload: true });
      }
      return isLoggedIn;
    });
    if (isLoggedIn) {
      history.push("/");
    } else {
      window.alert("Wrong Credential");
    }
  }

  function onSignUpClickHandler() {
    const username = rusernameRef.current.value;
    const password = rpasswordRef.current.value;
    const cpassword = cpasswordRef.current.value;
    const name = nameRef.current.value;

    const FormData = {
      name: name,
      username: username,
      password: password,
    };
    if (password === cpassword) {
      dispatch({ type: "register", payload: { FormData } });
    } else {
      window.alert("Password is not confirmed");
    }
  }

  return (
    <div className={classes.loginwrap}>
      <div className={classes.loginhtml}>
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className={classes.signin}
          defaultChecked
        />
        <label htmlFor="tab-1" className={classes.tab}>
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className={classes.signup} />
        <label htmlFor="tab-2" className={classes.tab}>
          Sign Up
        </label>
        <div className={classes.loginform}>
          <div className={classes.signinhtm}>
            <div className={classes.group}>
              <label htmlFor="user" className={classes.label}>
                Username
              </label>
              <input
                id="user"
                type="text"
                className={classes.input}
                ref={usernameRef}
              />
            </div>
            <div className={classes.group}>
              <label htmlFor="password" className={classes.label}>
                Password
              </label>
              <input
                id="password"
                type="password"
                className={classes.input}
                data-type="password"
                ref={passwordRef}
              />
            </div>
            <div className={classes.group}>
              <input
                id="check"
                type="checkbox"
                className={classes.check}
                checked
              />
              <label htmlFor="check">
                <span className={classes.icon}></span> Keep me Signed in
              </label>
            </div>
            <div className={classes.group}>
              <button onClick={onLoginClickHandler} className={classes.button}>
                Sign In
              </button>
            </div>
            <div className={classes.hr}></div>
            <div className={classes.footlnk}>
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          <div className={classes.signuphtm}>
            <div className={classes.group}>
              <label htmlFor="ruser" className={classes.label}>
                Username
              </label>
              <input
                id="ruser"
                type="text"
                className={classes.input}
                ref={nameRef}
              />
            </div>
            <div className={classes.group}>
              <label htmlFor="rpassword" className={classes.label}>
                Password
              </label>
              <input
                id="rpassword"
                type="password"
                className={classes.input}
                data-type="password"
                ref={rpasswordRef}
              />
            </div>
            <div className={classes.group}>
              <label htmlFor="rcpassword" className={classes.label}>
                Repeat Password
              </label>
              <input
                id="rcpassword"
                type="password"
                className={classes.input}
                data-type="password"
                ref={cpasswordRef}
              />
            </div>
            <div className={classes.group}>
              <label htmlFor="email" className={classes.label}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={classes.input}
                ref={rusernameRef}
              />
            </div>
            <div className={classes.group}>
              <button onClick={onSignUpClickHandler} className={classes.button}>
                Sign Up
              </button>
            </div>
            <div className={classes.hr}></div>
            <div className={classes.footlnk}>
              <label htmlFor="tab-1">
                <a href={true}>Already Member?</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
