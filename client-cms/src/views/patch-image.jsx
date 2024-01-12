import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ImageForm = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const url = `https://phase2-aio.vercel.app`;

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://phase2-aio.vercel.app/apis/branded-things/products/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      );

      setImgUrl(data.data.imgUrl);
      setName(data.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      Swal.showLoading();
      e.preventDefault();
      let formData = new FormData();
      formData.append(`file`, image);
      const data = await axios.patch(
        `${url}/apis/branded-things/products/${id}`,
        formData,
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      );
      fetchProducts();
      // console.log(data);
      // navigate(`/`);
      Swal.hideLoading();
    } catch (error) {
      Swal.hideLoading();
      console.log(error);
      Swal.fire({
        title: error.response.data.error,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="login-container bg-orange-600 w-[60%] h-[60%] rounded-xl border mx-auto mt-[100px] flex justify-center items-center flex-col mb-[30px]">
        <p className="text-center text-4xl my-[40px]">{name}</p>
        <img src={imgUrl} alt="" className="h-[300px] w-[300px]" />
        <div className="m-[10%] w-[60%] h-[60%]">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="" className="text-2xl">
              IMAGE
            </label>
            <br />
            <input
              type="file"
              className="w-full border bg-white rounded-xl pl-[10px]"
              onChange={(e) => {
                console.log(e.target.files);
                setImage(e.target.files[0]);
              }}
            />
            <br />
            <br />
            <button
              type="submit"
              className="rounded border bg-yellow-200 w-full mt-[30px]"
            >
              UPLOAD
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ImageForm;
