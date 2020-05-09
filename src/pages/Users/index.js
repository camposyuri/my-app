import React, { useState, useEffect } from "react";
import TableShow from "../../components/TableShow/";
import TableHeader from "../../components/TableShow/TableHeader/";
import TableBody from "../../components/TableShow/TableBody";
import { Link } from "react-router-dom";
import api from "../../services/";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <TableShow>
        <TableHeader
          name="Name"
          userName="User Name"
          email="E-mail"
          actions="Actions"
        />
        {data.map(user => {
          return (
            <TableBody
              name={user.name}
              userName={user.username}
              email={user.email}
            />
          );
        })}
      </TableShow>
    </>
  );
};

export default Users;
