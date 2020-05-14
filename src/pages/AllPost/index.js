import React, { useState, useEffect } from "react";
import api from "../../services";

const AllPost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <h1>All Posts</h1>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};

export default AllPost;
