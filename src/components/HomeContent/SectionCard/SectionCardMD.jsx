import { Card, Row, Col } from 'reactstrap'
import SectionTitle from '../SectionTitle/SectionTitle'
import NewsCardThree from '../NewsCard/NewsCardThree'

export default function SectionCardMD({ newsList, title }) {
  const index = Array.from(
    { length: Math.min(newsList.length, 6) },
    (_, i) => i
  );
  return (
    <Card className="px-4 py-3 rounded bg-white border-0">
      <SectionTitle title={title} />
      <Row>
        {index.map((i) => (
          <Col md={6} className="mb-3" key={i}>
            <hr/>
            <NewsCardThree news={newsList[i]} />
          </Col>
        ))}
      </Row>
    </Card>
  )
}
