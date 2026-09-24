import Banner from './banner';

// Render the same living sky as Home, with an extensible cloud field for content.
export default function PortfolioLandscape({ children }) {
  return <><Banner /><div className="portfolio-cloud-field">{children}</div></>;
}
