import { Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import * as newsData from '../../static-data';
import ContentHeader from '../HomeContent/ContentHeader/ContentHeader';
import SectionCardLG from '../HomeContent/SectionCard/SectionCardLG';
import { convertSlugToReadableString, convertToCamelCase } from "../../helper/helper";

export default function CategoryContent() {
  const { category } = useParams();
  const newsList = newsData[convertToCamelCase(category)];
  const title = convertSlugToReadableString(category);

  return (
    <Container fluid className="px-5 pb-3 bg-light">
      <Container fluid="lg" className="w-75">
        <ContentHeader title={title}/>
        <SectionCardLG newsList={newsList} title={category}/>
      </Container>
    </Container>
  )
}
