import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../hook/useDocumentTitle";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import "./SignUp.css";
import Axios from "axios";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notRegisterable, setNotRegisterable] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userType, setUserType] = useState("user");
  useDocumentTitle("Register in Insurance Helpers Panel");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/check-email", {
      email: email
    }).then((response) => {
      if (response.data == true) {
        setNotRegisterable(true);
      } else {
        setNotRegisterable(false);
        setRegistered(true);
        Axios.post("http://localhost:3001/register-user", {
          email: email,
          password: password
        }).then((response) => {
          console.log(response);
        });
        Axios.post("http://localhost:3001/check-user-type", {
          email: email
        }).then((response) => {
          setTimeout(() => {
            navigate("/dashboard", {
              state: {
                user_email: email,
                user_type: userType,
                user_id: response.data[0]["user_id"]
              }
            });
          }, [3000]);
        });
      }
    });
  };
  return (
    <div className="h-full bg-gradient-to-tl from-green-900 to-indigo-900 w-full py-16 px-4" style={{ height: "100vh" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <p className="text-light flex items-center mb-6 text-3xl font-semibold">
          <img className="signin-logo w-8 h-8 mr-2" src="/favicon/favicon-32x32.png" alt="logo" />
          Register in Insurance Helpers
        </p>
        <div className="w-full bg-white login-form-container shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <a
            className="home-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            <HomeIcon />
          </a>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form onSubmit={handleRegister} className="text-end space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className="text-end bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  className="text-end bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              {notRegisterable ? (
                <div className="dup-email">
                  <p>The entered email is already registered in the system</p>
                </div>
              ) : null}
              {registered ? (
                <div className="registered">
                  <p>Registration successful. Redirecting to the panel.</p>
                </div>
              ) : null}
              <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Register
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  onClick={() => {
                    navigate("/signin");
                  }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
