import { Card } from "reactstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import NewsCardThree from "../NewsCard/NewsCardThree";

export default function SectionCardSM({ newsList, title }) {
  const index = Array.from(
    { length: Math.min(newsList.length, 3) },
    (_, i) => i
  );
  return (
    <Card className="px-4 py-3 rounded bg-white border-0">
      <SectionTitle title={title} />
      {index.map((i) => (
        <div className="mb-3" key={i}>
          <hr />
          <NewsCardThree news={newsList[i]} />
        </div>
      ))}
    </Card>
  );
}
