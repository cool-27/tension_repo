
import React , {useState} from "react";
import pic from "../images/logo_smartserv.jpg";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate()
  const [user , setUser] = useState(
    {
      email:"" , pwd:""
    }
  );
  let name , value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser ({...user , [name]:value})
  }

  const PostData = async(e) =>{
    e.preventDefault()
    const {email ,  pwd } = user
    const res  = await fetch("/register" , {
        method : "POST" ,
        headers: {
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify({
          
        email , pwd
          
        })
    })
  
    const data = await res.json()
  
    if(pwd !== "SmartServTest@123" || !data){
       window.alert("invalid registration")
       console.log("invalid registration")
    } else{
       window.alert("valid registration")
       console.log("valid registration")
       navigate("/dashboard")
        
    }
  }
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
                    value={user.email}
                    className="abs"
                  onChange={handleInputs}
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
                    name="pwd"
                    id="pwd"
                    value={user.pwd}
                    onChange={handleInputs}
                    className="abs"
                    //value={pwd}
                    //onChange={(e) => setPwd(e.target.value)}
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

<button className="form-submit" style={{width: "240px", marginLeft: "1px"}}  onClick={PostData}>Login</button>
                </div>
                <div className="form-group">
              

              {/* if not registered can register by clicking on this link */}
              <a href="http://support@smartserv.io" className="text-white	ml-10 mb-20" target="_blank" rel="noopener noreferrer">Forgot your password?</a>
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

