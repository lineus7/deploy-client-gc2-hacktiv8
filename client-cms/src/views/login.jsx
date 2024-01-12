import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "../components/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = `https://phase2-aio.vercel.app`;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(`hello`);
      let data = await axios.post(`${url}/apis/login`, { email, password });
      console.log(data);
      localStorage.setItem(`token`, data.data.data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.error,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="login-container bg-orange-600 w-[60%] h-[60%] rounded-xl border mx-auto mt-[100px] flex justify-center items-center">
        <div className="m-[10%] w-[60%] h-[60%]">
          <form onSubmit={handleSubmit}>
            <label htmlFor="" className="text-2xl">
              EMAIL
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              className="w-full border rounded-xl pl-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button context="LOGIN" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
