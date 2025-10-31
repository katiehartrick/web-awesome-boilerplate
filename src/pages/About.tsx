import { WaIcon, WaCallout, WaCard } from '@awesome.me/webawesome/dist/react'

function About() {
  return (
    <>
      <div className="wa-stack wa-align-items-center">
        <h1>
          <WaIcon name="info-circle" className="icon-spacing" />
          About Web Awesome
          <WaIcon name="star" className="icon-spacing" />
        </h1>
        <p>Learn more about this amazing icon library and React integration.</p>

        <WaCallout variant="brand">
          <WaIcon slot="icon" name="lightbulb" variant="regular" />
          <strong>What is Web Awesome?</strong><br />
          Web Awesome is a comprehensive web component library.
        </WaCallout>

        <div className="wa-grid">
          <WaCard>
            <h3>
              <WaIcon name="rocket" /> Performance
            </h3>
            <p>Lightning-fast rendering with optimized SVG icons that scale perfectly at any size.</p>
          </WaCard>

          <WaCard>
            <h3>
              <WaIcon name="palette" /> Customizable
            </h3>
            <p>Easy to customize with CSS, supports multiple variants and styles for every icon.</p>
          </WaCard>

          <WaCard>
            <h3>
              <WaIcon name="code" /> Developer Friendly
            </h3>
            <p>Simple integration with React, Vue, Angular, or vanilla JavaScript projects.</p>
          </WaCard>

          <WaCard>
            <h3>
              <WaIcon name="shield-check" /> Reliable
            </h3>
            <p>Thoroughly tested and maintained with regular updates and community support.</p>
          </WaCard>
        </div>

        <WaCallout variant="success">
          <WaIcon slot="icon" name="check-circle" variant="regular" />
          <strong>Getting Started</strong><br />
          You're already using Web Awesome! Check out the home page to see all the components in action.
        </WaCallout>

        <h2>
          <WaIcon name="chart-bar" /> Quick Stats
        </h2>
        <ul className="list-style-none">
          <li><WaIcon name="icons" /> Thousands of icons available</li>
          <li><WaIcon name="download" /> Easy npm installation</li>
          <li><WaIcon name="mobile" /> Mobile and desktop ready</li>
          <li><WaIcon name="users" /> Trusted by developers worldwide</li>
        </ul>
      </div>
    </>
  )
}

export default About