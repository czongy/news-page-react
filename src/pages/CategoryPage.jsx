import { useEffect } from "react"
import NavigationBar from "../components/NavigationBar/NavigationBar"
import CategoryContent from "../components/CategoryContent/CategoryContent"

export default function CategoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minWidth: "1200px"}}>
      <NavigationBar />
      <CategoryContent />
    </div>
  )
}
