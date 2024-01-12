import axios from "axios";
import { useEffect, useState } from "react";

const ReadCategory = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    let { data } = await axios.get(
      `https://phase2-aio.vercel.app/apis/branded-things/categories`,
      { headers: { Authorization: `Bearer ${localStorage.token}` } }
    );
    setCategories(data.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center my-[80px]">
        <p className="text-2xl my-[20px]">CATEGORIES</p>
        <table className="border-8 border-collapse w-[80%]">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-center">id</th>
              <th className="border p-2 text-center">Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              return (
                <>
                  <tr className="bg-white" key={category.id}>
                    <td className="border p-2 text-center">{category.id}</td>
                    <td className="border p-2 text-center">{category.name}</td>
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
export default ReadCategory;
