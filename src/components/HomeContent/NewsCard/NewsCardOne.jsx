import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { calculateTimeLapsed } from "../../../helper/helper";
import "./NewsCardOne.css";

export default function NewsCardOne({ news }) {
  const timeLapsed = calculateTimeLapsed(news?.updatedDateTime);

  return (
    <Link
      to={`/news/${news?.id}`}
      className="text-decoration-none news-card-one"
      style={{ width: "18rem" }}
    >
      <Card className="border-0" style={{ width: "18rem" }}>
        <img className="rounded" alt="Sample" src={`${news?.imageUrl}/300/200`} />
        <CardBody className="px-0">
          <CardSubtitle
            className="mb-1 text-muted"
            tag="h6"
            style={{ fontSize: "12px" }}
          >
            {news?.publisher}
          </CardSubtitle>
          <CardTitle tag="h5">{news?.title}</CardTitle>
          <CardText>{news?.summary}</CardText>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            style={{ fontSize: "12px" }}
          >
            {timeLapsed} <span className="text-danger">•</span> by{" "}
            {news?.author}
          </CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
}
