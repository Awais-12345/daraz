import React from "react";

const inputform = () => {
  return (
    <div>
      <div className="main">
        <div className="fields">
          <form>
            <span className="login">Login</span>
            <div className="input1">
              <label>Username:</label>
              <br></br>
              <input type="text" id="user" className="input-field" />
            </div>
            <div className="input2">
              <label>passwords:</label>
              <br></br>
              <input type="password" id="psw" className="input-field" />
            </div>
            <div className="space">
                <div>
              <input type="checkbox" />
              <label className="Remember">Remember me</label>
              </div>

              <a href="#">Forgot password</a>
            </div>
            <div className="press">
              <input type="submit" value="Login" className="submit" />
            </div>
            <div className="lastline">
              <span>
                Don't have an account?<a href="#">Register</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default inputform;
