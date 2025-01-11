import HomeContent from "../components/HomeContent/HomeContent"
import NavigationBar from "../components/NavigationBar/NavigationBar"

export default function HomePage() {
  return (
    <div style={{ minWidth: "1200px"}}>
      <NavigationBar />
      <HomeContent />
    </div>
  )
}
