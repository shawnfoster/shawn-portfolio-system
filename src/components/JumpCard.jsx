function JumpCard({ items }) {
  return (
    <aside className="card jump-card">
      <span className="eyebrow">Jump</span>
      <nav className="jump-links" aria-label="Section navigation">
        {items.map((item) => (
          <a key={item.href} href={item.href}>
            <span>{item.label}</span>
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default JumpCard
