import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ReadProducts = () => {
  const [products, setProducts] = useState([]);
  const url = `https://phase2-aio.vercel.app`;

  const fetchProducts = async () => {
    // console.log(localStorage.token);
    let { data } = await axios.get(`${url}/apis/branded-things/products`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    // console.log(data.data);
    setProducts(data.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/apis/branded-things/products/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });
      fetchProducts();
    } catch (error) {
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
      <div className="w-full flex flex-col justify-center items-center my-[80px]">
        <p className="text-2xl my-[20px]">PRODUCTS</p>
        <table className="border-8 border-collapse w-[80%] overflow-auto">
          <thead>
            <tr key={"default"} className="bg-gray-200">
              <th className="border p-2 text-center">Name</th>
              <th className="border p-2 text-center">Description</th>
              <th className="border p-2 text-center">Price</th>
              <th className="border p-2 text-center">Stock</th>
              <th className="border p-2 text-center">Image</th>
              <th className="border p-2 text-center">Category ID</th>
              <th className="border p-2 text-center">Created By</th>
              <th className="border p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <>
                  <tr key={product.id} className="bg-white">
                    <td className="border p-2 text-center">{product.name}</td>
                    <td className="border p-2 text-center">
                      {product.description}
                    </td>
                    <td className="border p-2 text-center">{product.price}</td>
                    <td className="border p-2 text-center">{product.stock}</td>
                    <td className="border p-2 text-center overflow-auto">
                      <img
                        src={product.imgUrl}
                        alt=""
                        className="w-[200px] h-[200px]"
                      />
                    </td>
                    <td className="border p-2 text-center">
                      {product.categoryId}
                    </td>
                    <td className="border p-2 text-center">
                      {product.User.username}
                    </td>
                    <td className="border p-2 text-center">
                      <button className="rounded-lg bg-slate-400 m-[5px] p-[5px]">
                        <Link to={`/update/${product.id}`}>Update</Link>
                      </button>
                      <br />
                      <button className="rounded-lg bg-yellow-300 m-[5px] p-[5px]">
                        <Link to={`/patch/${product.id}`}>Upload Image</Link>
                      </button>
                      <br />
                      <button className="rounded-lg bg-red-600 m-[5px] p-[5px]">
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(product.id);
                          }}
                        >
                          Delete
                        </a>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ReadProducts;
