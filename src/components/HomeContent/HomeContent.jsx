import { Container, Row, Col } from "reactstrap";
import ContentHeader from "./ContentHeader/ContentHeader";
import SectionCardLG from "./SectionCard/SectionCardLG";
import SectionCardMD from "./SectionCard/SectionCardMD";
import SectionCardSM from "./SectionCard/SectionCardSM";
import * as newsData from "../../static-data";

export default function HomeContent() {
  // API calls to retrieve news data
  return (
    <Container fluid className="px-5 pb-3 bg-light">
      <Container fluid="lg">
        <ContentHeader title="News"/>
        <Row>
          <Col xs="8">
            <SectionCardLG newsList={newsData['topStories']} title="Top stories" header={true}/>
          </Col>
          <Col xs="4">
            <Row>
              <Col xs="12">
                <SectionCardSM newsList={newsData['localNews']} title="Local news"/>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="12">
                <SectionCardSM newsList={newsData['picksForYou']} title="Picks for you"/>
              </Col>
            </Row>
          </Col>
        </Row>
        <ContentHeader title="More news"/>
        <Row>
          <Col xs="12">
            <SectionCardMD newsList={newsData['yourInterests']} title="Your interests"/>
          </Col>
        </Row>
        <ContentHeader title="Topic news"/>
        <Row className="mb-3">
          <Col xs="4">
            <SectionCardSM newsList={newsData['singapore']} title="Singapore"/>
          </Col>
          <Col xs="4">
            <SectionCardSM newsList={newsData['world']} title="World"/>
          </Col>
          <Col xs="4">
            <SectionCardSM newsList={newsData['business']} title="Business"/>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <SectionCardSM newsList={newsData['technology']} title="Technology"/>
          </Col>
          <Col xs="4">
            <SectionCardSM newsList={newsData['entertainment']} title="Entertainment"/>
          </Col>
          <Col xs="4">
            <SectionCardSM newsList={newsData['sports']} title="Sports"/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
