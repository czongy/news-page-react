import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, CardSubtitle } from "reactstrap";
import { calculateTimeLapsed } from "../../../helper/helper";

export default function NewsCardTwo({ news }) {
  const timeLapsed = calculateTimeLapsed(news.updatedDateTime);

  return (
    <Link to={`/news/${news.id}`} className="text-decoration-none">
      <Card body className="py-0 border-0 text-dark">
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
        <CardText className="mb-2" style={{ fontSize: "14px" }}>{news.summary}</CardText>
        <CardSubtitle
          className="text-muted"
          tag="h6"
          style={{ fontSize: "12px" }}
        >
          {timeLapsed} <span className="text-danger">•</span> by {news?.author}
        </CardSubtitle>
      </Card>
    </Link>
  );
}
