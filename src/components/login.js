
import React from "react";
import pic from "../images/logo_smartserv.jpg";

export default function Login(props) {
  const navigate = useNavigate();

  // defining all the components necessary for signin

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pwd,
      }),
    });

    const data = await res.json();
    if (!email) {
      window.alert("enter username");
    } else if (!pwd) {
      window.alert("enter password");
    }

    // authenticating whether user is present in db or not
    // if not present we wll show invalid login
    else if (res.status === 400 || !data) {
      window.alert("invalid login");
      console.log("invalid login");
    } else {
      //if present we will direct user to dashboard
      console.log("valid login");
      navigate("/dashboard");
    }
  };
    return (
        <>
          <div className="full">
          <section className="signin">
          <div className="container mt-5">
          <div className="row signup-content">

            {/* below is login form */}
            <div className="col signup-form">
              <img src={pic} alt="" style={{width: "280px", display: "flex", alignItems: "center", justifyContent:"center", margin:"auto"}}/>
              <form className="register-form" id="register-form" method="POST">
              <div className="form-group">
                  <label htmlFor="email" className="label">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="abs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="label">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="abs"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    autoComplete="off"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group form-buttom">
                  {/* <input
                    type="submit"
                    name="Login"
                    id="SignIn"
                    className="form-submit"
                   // value="Sign In"
                   // onClick={loginUser}
                  /> */}

<button className="form-submit" style={{width: "240px", marginLeft: "1px"}}>Login</button>
                </div>
                <div className="form-group">
              

              {/* if not registered can register by clicking on this link */}
              <button><p className="text">Forgot your password?</p></button>
            </div>
              </form>
            </div>
          </div>
        </div>
          </section>
          </div>
        </>
      );
}

