import {
  Card,
  CardSubtitle,
  Container,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import * as newsData from "../../static-data";
import { Link, useParams } from "react-router-dom";
import { convertToReadableDate } from "../../helper/helper";

export default function NewsContent() {
  const { newsId } = useParams();
  const news = newsData[`newsId${newsId}`];
  const index = Array.from(
    { length: Math.min(news.similarNews.length, 2) },
    (_, i) => i
  );
  const formattedDate = convertToReadableDate(news.updatedDateTime);

  return (
    <Container fluid className="px-5 py-3 bg-light">
      <Container fluid="lg" className="d-flex flex-column align-items-center">
        <h1 className="mt-3 mb-5 text-center w-75">{news.title}</h1>
        <Card className="w-50 border-0 bg-light">
          <img src={`${news.imageUrl}/600/400`} alt={news.title} />
          <CardSubtitle
            className="mt-2 text-muted"
            tag="h6"
            style={{ fontSize: "0.8rem" }}
          >
            {news.imgCaption}
          </CardSubtitle>
        </Card>
        <CardSubtitle
          className="mt-2 text-muted"
          tag="h6"
          style={{ fontSize: "0.8rem" }}
        >
          {formattedDate} <span className="text-danger">•</span> by{" "}
          {news?.author}
        </CardSubtitle>
        <hr className="w-75" />
        {news.content.map((para, index) => (
          <p key={index} className="text-justify w-75 fs-5">
            {para}
          </p>
        ))}
        <hr className="w-75" />
        {news.similarNews.length > 0 && (
          <ListGroup flush className="rounded">
            <ListGroupItem className="bg-body-secondary" disabled>
              Similar News
            </ListGroupItem>
            {index.map((i) => (
              <ListGroupItem
                key={i}
                className="text-info-emphasis"
                tag={Link}
                to={`/news/${news.similarNews[i].id}`}
              >
                {news.similarNews[i].title}
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Container>
    </Container>
  );
}
