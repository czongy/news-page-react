import { useEffect } from "react"
import NavigationBar from "../components/NavigationBar/NavigationBar"
import NewsContent from "../components/NewsContent/NewsContent"

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div style={{ minWidth: "1200px"}}>
      <NavigationBar />
      <NewsContent />
    </div>
  )
}
