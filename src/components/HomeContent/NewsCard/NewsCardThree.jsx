import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, CardSubtitle, Row, Col } from "reactstrap";
import { calculateTimeLapsed } from "../../../helper/helper";

export default function NewsCardThree({ news }) {
  const timeLapsed = calculateTimeLapsed(news.updatedDateTime);

  return (
    <Link to={`/news/${news.id}`} className="text-decoration-none">
      <Card body className="d-flex ps-0 py-0 border-0 text-dark">
        <Row className="w-100">
          <Col xs="10">
            <CardSubtitle
              className="text-muted my-1"
              tag="h6"
              style={{ fontSize: "13px" }}
            >
              {news.publisher}
            </CardSubtitle>
            <CardTitle className="mb-1" tag="h6" style={{ fontSize: "16px" }}>
              {news.title}
            </CardTitle>
            <CardText className="mb-2" style={{ fontSize: "14px" }}>
              {news.summary}
            </CardText>
            <CardSubtitle
              className="text-muted"
              tag="h6"
              style={{ fontSize: "12px" }}
            >
              {timeLapsed} <span className="text-danger">•</span> by{" "}
              {news?.author}
            </CardSubtitle>
          </Col>
          <Col xs="2" className="ps-0">
            <img
              src={`${news.imageUrl}/300/200`}
              alt={news.title}
              className="rounded"
              style={{ height: "80px", width: "80px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Card>
    </Link>
  );
}
