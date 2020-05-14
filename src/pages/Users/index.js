import React, { useState, useEffect } from "react";

import TableShow from "../../components/TableShow/";
import TableHeader from "../../components/TableShow/TableHeader/";
import TableBody from "../../components/TableShow/TableBody";
import { Col, Row, Container, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../services/";

const Users = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      api
        .get("/users")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(true);
    }, 1000);
  }, []);

  if (!isLoading) {
    return (
      <Container>
        <Row className="align-items-center">
          <Col className="d-md-flex justify-content-center my-5">
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container className="my-3">
        <Row className="align-items-center">
          <Col md="4">
            <h1>Users</h1>
          </Col>
        </Row>
        <TableShow>
          <TableHeader
            id="Id"
            name="Name"
            userName="Username"
            email="E-mail"
            actions="Actions"
          />
          {data.map((user) => {
            return (
              <TableBody
                key={user.id}
                id={user.id}
                name={user.name}
                userName={user.username}
                email={user.email}
              >
                <Link className="btn btn-success" to={"/view-posts/" + user.id}>
                  View
                </Link>
              </TableBody>
            );
          })}
        </TableShow>
      </Container>
    </>
  );
};

export default Users;
