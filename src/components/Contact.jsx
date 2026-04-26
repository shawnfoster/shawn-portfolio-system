import BaseCard from './BaseCard'
import JumpCard from './JumpCard'

function Contact({ contact, base, jumpItems }) {
  return (
    <section id="contact" className="site-section section-block contact-section">
      <div className="section-inner contact-row">
        <JumpCard items={jumpItems} />

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
    </section>
  )
}

export default Contact
