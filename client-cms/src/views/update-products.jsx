import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/form";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = `https://phase2-aio.vercel.app`;

  const handleSubmit = async (body) => {
    try {
      let data = await axios.put(
        `${url}/apis/branded-things/products/${id}`,
        body,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
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
      <Form context={"update"} handleSubmit={handleSubmit} />
    </>
  );
};
export default UpdateProducts;
