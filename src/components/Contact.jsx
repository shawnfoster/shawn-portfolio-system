import BaseCard from './BaseCard'

function Contact({ contact, base }) {
  return (
    <div id="contact" className="final-contact-base">
        <article className="card contact-card">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">{contact.title}</h2>
          <p>{contact.body}</p>
          <a className="button button-primary contact-button" href={base.links[0].href}>
            {contact.cta}
          </a>
        </article>

        <BaseCard location={base.location} availability={base.availability} links={base.links} />
    </div>
  )
}

export default Contact
