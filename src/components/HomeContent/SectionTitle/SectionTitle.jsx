import { Link } from 'react-router-dom'

export default function SectionTitle({ title }) {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <Link to={`/${formattedTitle}`} className="text-decoration-none">
      <h5 className="text-primary fw-normal">{title} &gt;</h5>
    </Link>
  )
}
