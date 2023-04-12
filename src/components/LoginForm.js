import React, { useState } from "react";
// import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ Login, error }) {
  // let navigate = useNavigate();
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="LoginForm" id="LoginForm">
      <form onSubmit={submitHandler}>
        <div className="FormInner" id="FormInner">
          <h2>Login Account</h2>
          {error !== "" ? <div className="error"> {error}</div> : ""}
          <div id="Input">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
          </div>
          <div id="Input">
            <div className="form-group">
              <label htmlFor="empId">Staff ID:</label>
              <input
                type="empId"
                name="empId"
                id="empId"
                onChange={(e) =>
                  setDetails({ ...details, empId: e.target.value })
                }
                value={details.empId}
              />
            </div>
            <div className="form-group">
              <label htmlFor="crimeBranch">Crime Branch:</label>
              <input
                type="crimeBranch"
                name="crimeBranch"
                id="crimeBranch"
                onChange={(e) =>
                  setDetails({ ...details, crimeBranch: e.target.value })
                }
                value={details.crimeBranch}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>

          <div>
            <input
              type="submit"
              // onClick={() => navigate("./Home.js")}
              id="button"
              value="LOGIN"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
