export default function Background() {
  return (
    <>
      <div className="bg-glow" aria-hidden="true">
        <span className="g1" />
        <span className="g2" />
        <span className="g3" />
        <span className="g4" />
      </div>
      <div className="grid-overlay" aria-hidden="true" />
    </>
  )
}
