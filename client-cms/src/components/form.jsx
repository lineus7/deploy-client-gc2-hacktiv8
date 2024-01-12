import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Form = ({ handleSubmit, context }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const url = `https://phase2-aio.vercel.app`;

  const fetchCategories = async () => {
    try {
      let { data } = await axios.get(`${url}/apis/branded-things/categories`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      // console.log(data.data);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDetail = async () => {
    try {
      let { data } = await axios.get(
        `${url}/apis/branded-things/products/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      let product = data.data;
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setStock(product.stock);
      setImgUrl(product.imgUrl);
      setCategoryId(product.categoryId);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.data.error,
        icon: "error",
      });
      navigate(`/`);
    }
  };

  useEffect(() => {
    fetchCategories();
    if (context === "update") {
      fetchDetail();
    }
  }, []);

  useEffect(() => {}, [categoryId]);
  useEffect(() => {
    return () => {
      setName();
      setDescription();
      setPrice();
      setStock();
      setImgUrl();
      setCategoryId();
    };
  }, []);
  return (
    <>
      <div className="login-container bg-orange-600 w-[60%] h-[60%] rounded-xl border mx-auto mt-[100px] flex justify-center items-center flex-col mb-[30px]">
        <p className="text-center text-2xl mt-[40px]">PRODUCT</p>
        <div className="m-[30px] w-[60%] h-[60%]">
          <form action="">
            <label htmlFor="" className="text-2xl">
              Name
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              onChange={(e) => setName(e.target.value)}
              value={name ? name : null}
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              Description
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              onChange={(e) => setDescription(e.target.value)}
              value={description ? description : null}
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              Price
            </label>
            <br />
            <input
              type="number"
              className="w-full border rounded-xl pl-2"
              min={0}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price ? price : null}
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              Stock
            </label>
            <br />
            <input
              type="number"
              className="w-full border rounded-xl pl-2"
              min={0}
              onChange={(e) => {
                setStock(e.target.value);
              }}
              value={stock ? stock : null}
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              Image Url
            </label>
            <br />
            <input
              type="text"
              className="w-full border rounded-xl pl-2"
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
              value={imgUrl ? imgUrl : null}
            />
            <br />
            <br />
            <label htmlFor="" className="text-2xl">
              Category
            </label>
            <br />
            <select
              name=""
              className="w-full border rounded-xl pl-2"
              id=""
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
            >
              <option value="" key={"disabled"} disabled>
                Choose...
              </option>
              {categories.map((category) => {
                return (
                  <>
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  </>
                );
              })}
            </select>
            <br />
            <br />
            <button
              type="submit"
              className="rounded border bg-yellow-200 w-full my-[30px]"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit({
                  name,
                  description,
                  price: +price,
                  stock: +stock,
                  imgUrl,
                  categoryId,
                });
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
