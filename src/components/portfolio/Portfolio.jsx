import { featuredPortfolio } from '../../data.js';
import CardContainer from '../../components/cardContainer/CardContainer.jsx';
import './portfolio.scss';

function Portfolio( { openModal } ) {
  return (
    <div className="portfolio" id="portfolio">
        <div className="portfolio-container">
            <h1 className="portfolio-title">Projects</h1>
            {/* <p className="portfolio-subtitle">This is a selection of some design and development projects I have worked on over the past 5 years</p> */}
            <CardContainer items={featuredPortfolio} openModal={openModal} />
        </div>
    </div>
  );
}

export default Portfolio;