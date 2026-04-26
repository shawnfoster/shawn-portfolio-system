function Header({ items }) {
  return (
    <div className="header-wrap">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <img src="/profile-thumb.jpg" alt="" />
          </span>
          <span className="brand-copy">
            <strong>Shawn Foster, MS</strong>
            <small>Customer Success + BI</small>
          </span>
        </a>

        <nav className="top-nav" aria-label="Top navigation">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  )
}

export default Header
