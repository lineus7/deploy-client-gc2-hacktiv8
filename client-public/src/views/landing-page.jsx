import { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("ASC");
  const [arrTotalPage, setArrTotalPage] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);

  const url = `https://phase2-aio.vercel.app`;

  const fetchProducts = async (url) => {
    try {
      let { data } = await axios.get(
        `${url}/apis/pub/branded-things/products?q=${search}&i=${filter}&limit=8&page=${currentPage}&sort=${sort}`
      );

      setProducts(data.data.query);

      let totalPage = data.data.pagination.totalPage;
      let arrPage = [];
      for (let i = 1; i <= totalPage; i++) {
        arrPage.push(i);
      }
      setCurrentPage(1);
      setArrTotalPage(arrPage);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async (url) => {
    try {
      let { data } = await axios.get(
        `${url}/apis/pub/branded-things/categories`
      );

      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = async (url) => {
    try {
      let { data } = await axios.get(
        `${url}/apis/pub/branded-things/products?q=${search}&i=${filter}&limit=8&page=${currentPage}&sort=${sort}`
      );

      setProducts(data.data.query);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < arrTotalPage.length) setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    fetchProducts(url);
    fetchCategories(url);
  }, []);

  useEffect(() => {
    fetchProducts(url);
  }, [search, filter, sort]);

  useEffect(() => {
    changePage(url);
  }, [currentPage]);

  return (
    <>
      <div className="home-body">
        {/* CARD NAVBAR */}
        <div className="card-navbar w-full flex justify-between">
          {/* SEARCH */}
          <div className="left-card-navbar mx-8 mt-8 flex gap-2 grow">
            <label htmlFor="">Search</label>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="search"
              id=""
              className="border rounded-xl w-[70%] pl-2"
            />
          </div>
          <div className="right-card-navbar mx-8 mt-8 flex gap-4">
            {/* FILTER */}
            <div className="flex gap-2">
              <label htmlFor="">Filter</label>
              <select
                name="filter"
                id=""
                className="rounded-xl border pl-1"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                <option value="" selected disabled key={categories.length + 1}>
                  Select...
                </option>
                {categories.map((category) => {
                  return (
                    <>
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
            {/* SORT */}
            <div className="flex gap-2">
              <label htmlFor="">Sort</label>
              <select
                name="page"
                className="border rounded-xl pl-2"
                id=""
                onChange={(e) => {
                  setSort(e.target.value);
                }}
              >
                <option value="ASC" selected>
                  ASC
                </option>
                <option value="DESC">DESC</option>
              </select>
            </div>
            {/* PAGE */}
            <div className="flex gap-2">
              <label htmlFor="">Page</label>
              <select
                name="page"
                className="border rounded-xl"
                id=""
                onChange={(e) => {
                  setCurrentPage(e.target.value);
                }}
              >
                {arrTotalPage.map((page) => {
                  return (
                    <option key={page} value={page}>
                      {page}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        {/* END CARD NAVBAR */}

        {/* CARD CONTAINER */}
        <div className="card-container w-[100%] h-[100%] mt-[20px] p-[20px] grid grid-cols-4 gap-4">
          {/* CARD */}
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
          {/* END OF EXAMPLE CARD */}
        </div>
        {/* END CARD CONTAINER */}
      </div>
      <div className="flex justify-center items-center mb-8">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            handlePrev();
          }}
        >
          Prev
        </a>
        <span className="mx-12">
          Page {currentPage} / {arrTotalPage.length}
        </span>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          Next
        </a>
      </div>
    </>
  );
};
export default LandingPage;
