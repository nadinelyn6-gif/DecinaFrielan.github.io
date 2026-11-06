export default function SectionHead({ color, children }) {
  return (
    <div className="head-row">
      <span className={`tag-mark tag-${color}`} aria-hidden="true" />
      <h2>{children}</h2>
    </div>
  )
}
