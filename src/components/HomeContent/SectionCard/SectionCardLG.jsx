import React from "react";
import { Card } from "reactstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import CoverageCard from "../CoverageCard/CoverageCard";
import NewsCardThree from "../NewsCard/NewsCardThree";

export default function SectionCardLG({ newsList, title, header }) {
  const index = header
    ? Array.from({ length: Math.min(4, newsList.length) }, (_, i) => i)
    : Array.from({ length: newsList.length }, (_, i) => i);

  return (
    <Card className="px-4 py-3 rounded bg-white border-0">
      {header && <SectionTitle title={title} />}
      {index.map((i) =>
        newsList[i].similarNews.length > 0 ? (
          <React.Fragment key={i}>
            {header ? <hr /> : i !== 0 && <hr />}
            <CoverageCard key={i} coverageNews={newsList[i]} />
          </React.Fragment>
        ) : (
          <React.Fragment key={i}>
            {header ? <hr /> : i !== 0 && <hr />}
            <NewsCardThree key={i} news={newsList[i]} />
          </React.Fragment>
        )
      )}
    </Card>
  );
}
