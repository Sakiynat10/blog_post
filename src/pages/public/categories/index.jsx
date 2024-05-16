import { Fragment, useEffect, useState } from "react";

import "./index.scss";
import request from "../../../service/request";
import CategoryCard from "../../../components/cards/category-card";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await request("category");
        setData(data);
        console.log(data);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);
  return (
    <Fragment>
      <section id="category-blog">
        <div className="blog-content">
          <div className="container">
            <h1>Business</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <h4>
              Blog <span>{">"}</span> Business
            </h4>
          </div>
        </div>
        <div className="category-contents container">
          <input type="text" placeholder="Searching..." />
          {data?.map((category, i) => (
            <Link to={"/category/id"} key={i}>
                <CategoryCard   {...category} />
            </Link>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryPage;
