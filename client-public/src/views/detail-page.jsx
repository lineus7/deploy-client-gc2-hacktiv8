import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const url = `https://phase2-aio.vercel.app`;
  const fetchProduct = async () => {
    try {
      let { data } = await axios.get(
        `${url}/apis/pub/branded-things/products/${id}`
      );

      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      {/* START PRODUCT DETAIL */}
      <div className="detail-container flex justify-center items-center">
        <div className="card-items w-[60%] h-[500px] bg-white rounded-xl border overflow-scroll m-[50px]">
          <p className="text-center my-2 mx-2">{product.name}</p>
          <div className="imgUrl h-[40%] w-[80%] mx-auto rounded-xl border flex justify-center items-center">
            <img className="w-[300px] h-full" src={product.imgUrl} alt="" />
          </div>
          <div className="h-[20%]">
            <p className="text-justify mt-2 mx-[10%] text-wrap">
              {product.description}
            </p>
          </div>
          <p className="text-justify mt-2 mx-[10%]">Price : {product.price}</p>
          <p className="text-justify mt-2 mx-[10%]">Stock : {product.stock}</p>
          <p className="text-justify mt-2 mx-[10%]">
            CategoryId : {product.categoryId}
          </p>
          <p className="text-justify mt-2 mx-[10%]">
            AuthorId : {product.authorId}
          </p>
        </div>
      </div>
    </>
  );
};
export default DetailPage;
