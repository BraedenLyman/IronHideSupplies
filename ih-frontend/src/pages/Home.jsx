import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="home-section">
      <div className="home-shell">
        <div className="home-hero">
          <div className="home-heroText">
            <p className="home-eyebrow">Built For Reliability</p>
            <h1>Professional Supplies For Work That Has To Last</h1>
            <p className="home-lead">
              IronHide Supplies helps contractors, crews, and homeowners source
              durable gear with confidence, fast service, and dependable support.
            </p>
            <div className="home-ctaRow">
              <NavLink className="home-btnPrimary" to="/shop">
                Browse Products
              </NavLink>
              <NavLink className="home-btnSecondary" to="/contact">
                Request a Quote
              </NavLink>
            </div>
          </div>
          <div className="home-heroVisual">Hero Image Placeholder</div>
        </div>

        <div className="home-featureGrid">
          <article className="home-featureCard">
            <h2>Commercial Grade</h2>
            <p>Quality-first products selected for long-term performance.</p>
          </article>
          <article className="home-featureCard">
            <h2>Fast Fulfillment</h2>
            <p>Reliable turnaround so your projects keep moving.</p>
          </article>
          <article className="home-featureCard">
            <h2>Real Support</h2>
            <p>Expert guidance from people who understand the work.</p>
          </article>
        </div>

        <div className="home-highlight">
          <h2>Need help choosing the right materials?</h2>
          <p>
            Tell us about your project and we will point you to the right
            products, quantities, and options.
          </p>
          <NavLink className="home-btnPrimary" to="/contact">
            Talk To Our Team
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Home;
