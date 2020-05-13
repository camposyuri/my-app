import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Spinner,
} from "reactstrap";
import api from "../../services";

const ViewPosts = ({ match }) => {
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
      <h1>Posts</h1>
      <Container>
        <Row>
          {data.map((post) => {
            return (
              <Col md="6" className="my-2">
                <Card body>
                  <CardTitle>
                    <strong>{post.title}</strong>
                  </CardTitle>
                  <CardText>{post.body}</CardText>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default ViewPosts;
