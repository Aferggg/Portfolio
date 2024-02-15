import { featuredPortfolio } from '../../data.js';
import CardContainer from '../../components/cardContainer/CardContainer.jsx';
import './portfolio.scss';

function Portfolio( { openModal } ) {
  return (
    <div className="portfolio" id="portfolio">
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <CardContainer items={featuredPortfolio} openModal={openModal} />
        </div>
    </div>
  );
}

export default Portfolio;