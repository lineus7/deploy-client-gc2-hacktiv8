import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card-items w-80 h-80 bg-white rounded-xl border hover:cursor-pointer hover:shadow-md transition duration-300"
        onClick={(e) => {
          navigate(`/detail/${product.id}`);
        }}
      >
        <p className="text-center mt-2 mx-2">{product.name}</p>
        <div className="imgUrl h-[40%] w-[80%] mx-auto rounded-xl border">
          <img src={product.imgUrl} alt="" className="w-full h-full" />
        </div>
        <div className="h-[20%] m-4 border-4 overflow-auto">
          <p className="text-justify mt-2 mx-3 text-wrap">
            {product.description}
          </p>
        </div>
        <p className="text-center mt-2 mx-2">Price : {product.price}</p>
        <p className="text-center mt-2 mx-2">Stock : {product.stock}</p>
      </div>
    </>
  );
};
export default Card;
