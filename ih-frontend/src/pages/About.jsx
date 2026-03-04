import "../App.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h1>About IronHide Supplies</h1>
        <p className="about-intro">
          Learn more about our team, our mission, and what makes our products
          stand out.
        </p>

        <div className="about-row">
          <div className="about-imgPlaceholder">Image Placeholder</div>
          <div className="about-textPlaceholder">
            <h2>Our Story</h2>
            <p>Text placeholder for company story and background.</p>
          </div>
        </div>

        <div className="about-row">
          <div className="about-textPlaceholder">
            <h2>What We Value</h2>
            <p>Text placeholder for values, quality standards, and service.</p>
          </div>
          <div className="about-imgPlaceholder">Image Placeholder</div>
        </div>
      </div>
    </section>
  )
}

export default About;
