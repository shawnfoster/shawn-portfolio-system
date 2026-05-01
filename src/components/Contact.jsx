function Contact({ contact, href }) {
  return (
    <article id="contact" className="card contact-card">
      <span className="eyebrow">Contact</span>
      <h2 className="section-title">{contact.title}</h2>
      <p>{contact.body}</p>
      <a className="button button-primary contact-button" href={href}>
        {contact.cta}
      </a>
    </article>
  )
}

export default Contact
