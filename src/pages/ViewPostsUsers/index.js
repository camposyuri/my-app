import React, { useState, useEffect } from "react";
import api from "../../services";
import TableShow from "../../components/TableShow";
import TableHeader from "../../components/TableShow/TableHeader";
import TableBody from "../../components/TableShow/TableBody";
import { Link } from "react-router-dom";

import { Container, Row, Col, Spinner, Button } from "reactstrap";

const ViewPostsUsers = ({ match }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      api.get(`/posts?userId=${match.params.id}`).then((res) => {
        setData(res.data);
      });
      setLoading(true);
    }, 1000);
  }, [match.params.id]);

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
      <Container>
        <h1>Posts</h1>
        <Row>
          <TableShow>
            <TableHeader id="Id" title="Title" actions="Actions" />
            {data.map((post) => {
              return (
                <TableBody id={post.id} title={post.title}>
                  <Link className="mr-2 btn btn-warning">Edit</Link>
                  <Button color="danger">Delete</Button>
                </TableBody>
              );
            })}
          </TableShow>
        </Row>
      </Container>
    </>
  );
};
export default ViewPostsUsers;
