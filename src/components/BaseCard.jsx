function BaseCard({ location, availability, links }) {
  return (
    <aside className="card base-card">
      <span className="eyebrow">Base</span>
      <h3>{location}</h3>
      <p>{availability}</p>

      <div className="base-links">
        {links.map((link) => (
          <a key={link.label} className="base-link" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  )
}

export default BaseCard
