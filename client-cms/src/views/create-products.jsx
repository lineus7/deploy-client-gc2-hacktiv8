import { useState } from "react";
import Form from "../components/form";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateProducts = () => {
  const navigate = useNavigate();
  const url = `https://phase2-aio.vercel.app`;

  const handleSubmit = async (body) => {
    try {
      let data = await axios.post(`${url}/apis/branded-things/products`, body, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      console.log(data);
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
      <Form handleSubmit={handleSubmit} context={`create`} />
    </>
  );
};
export default CreateProducts;
