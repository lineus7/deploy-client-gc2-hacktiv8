import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "../components/button";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let body = {
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        phoneNumber: e.target[3].value,
        address: e.target[4].value,
      };

      await axios.post(`https://phase2-aio.vercel.app/apis/add-user`, body, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      navigate(`/`);
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
      <div className="login-container bg-orange-600 w-[60%] h-[60%] rounded-xl border mx-auto mt-[100px] flex justify-center items-center flex-col mb-[30px]">
        <p className="text-center text-4xl mt-[40px]">REGISTER STAFF</p>
        <div className="m-[10%] w-[60%] h-[60%]">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="" className="text-2xl">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              name="usernam"
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              EMAIL
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              name="email"
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
              name="password"
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              PHONE NUMBER
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              name="phoneNumber"
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              ADDRESS
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              name="address"
            />
            <br />
            <br />
            <Button context="REGISTER" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
