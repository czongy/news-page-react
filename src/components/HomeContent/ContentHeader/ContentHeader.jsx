import { getCurrentDateFormatted } from "../../../helper/helper";

export default function ContentHeader({ title }) {
  return (
    <div className="d-flex justify-content-between py-3">
      <div>
        <h2 className="fw-normal">{title}</h2>
        {title === "News" && <p className="mb-0">{getCurrentDateFormatted()}</p>}
      </div>
    </div>
  )
}
