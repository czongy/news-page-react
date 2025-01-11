import NewsCardOne from "../NewsCard/NewsCardOne"
import NewsCardTwo from "../NewsCard/NewsCardTwo"

export default function CoverageCard({ coverageNews }) {
  const index = Array.from({ length: Math.min(coverageNews.similarNews.length, 3) }, (_, i) => i);
  return (
    <div className="d-flex gap-3">
      <NewsCardOne news={coverageNews} />
      <div className="d-flex flex-column gap-3">
        {index.map((i) => (
          <NewsCardTwo key={i} news={coverageNews.similarNews[i]} />
        ))}
      </div>
    </div>
  )
}
