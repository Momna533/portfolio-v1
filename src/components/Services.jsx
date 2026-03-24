const Services = () => {
  return (
    <div className="container" id="services">
      <div className="container__content">
        <h2>Services</h2>
        <div className="services__entries">
          <ServiceEntry
            heading={"Frontend Development"}
            technologies={[
              "Responsive static websites",
              "Multi-page business sites (About, Services, Contact)",
              "Personal & recruiter-ready portfolio sites",
              "Conversion-focused landing pages",
            ]}
          />
          <ServiceEntry
            heading={"UI/UX & Styling"}
            technologies={[
              "Mobile-first responsive layouts",
              "Custom CSS themes & branding",
              "Smooth animations,transitions, and interactive effects",
            ]}
          />
          <ServiceEntry
            heading={"JavaScript Functionality"}
            technologies={[
              "Interactive components (dropdowns, modals, carousels)",
              "Client-side form validation",
              "Dynamic content updates (show/hide, DOM manipulation)",
              "Basic API integration (fetch & display external data)",
            ]}
          />
          <ServiceEntry
            heading={"Deployment & Version Control"}
            technologies={[
              "GitHub Pages hosting",
              "Netlify/Vercel deployment setup",
              "GitHub repository management & version control",
            ]}
          />
          <ServiceEntry
            heading={"Optimization & Maintenance"}
            technologies={[
              "SEO essentials (semantic HTML, meta tags, alt text)",
              "Performance improvements (minify CSS/JS, image compression)",
              "Ongoing website updates & bug fixes",
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
