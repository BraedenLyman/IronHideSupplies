function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Need help with an order or have a question? Send us a message and we
          will get back to you as soon as possible.
        </p>

        <form className="contact-form">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            type="text"
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="john.doe@email.com"
            type="email"
            autoComplete="email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell us how we can help..."
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
