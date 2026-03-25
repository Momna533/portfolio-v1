const Services = () => {
  return (
    <div className="container" id="services">
      <div className="container__content">
        <h2>Services</h2>
        <div className="services__entries">
          <ServiceEntry
            heading={"Frontend Development"}
            technologies={[
              "Responsive websites (single-page & multi-page)",
              "Recruiter-ready portfolio sites",
              "Conversion-focused landing pages",
            ]}
          />
          <ServiceEntry
            heading={"UI/UX & Styling"}
            technologies={[
              "Mobile-first layouts",
              "Custom themes & branding",
              "Smooth animations & interactive effects",
            ]}
          />
          <ServiceEntry
            heading={"JavaScript Functionality"}
            technologies={[
              "Interactive components (dropdowns, modals, carousels)",
              "Form validation & error handling",
              "API integration & dynamic content",
            ]}
          />
          <ServiceEntry
            heading={"Deployment & Optimization"}
            technologies={[
              "Hosting setup (GitHub, Netlify, Vercel)",
              "SEO essentials (semantic HTML, meta tags, alt text)",
              "Performance tuning & ongoing maintenance",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
const ServiceEntry = ({ heading, technologies }) => {
  return (
    <div className="card">
      <h3>{heading}</h3>
      <div className="underline"></div>
      <div className="technologies">
        {technologies.map((technology) => (
          <h5 key={technology.heading}>{technology}</h5>
        ))}
      </div>
    </div>
  );
};
