import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from '../components/Hero';
import Briefcase from '../components/Briefcase';
import Card from '../components/Card';

const Home = (props) => {
  const { websites, games, others } = props;
  return (
    <>
      <Hero />
      <div id="briefcase">
        <Briefcase title="- 🖥 Websites -">
          {websites.map((card) => <Card key={card.title} card={card} category="websites" />)}
        </Briefcase>
        <Briefcase title="- 🕹 Games -">
          {games.map((card) => <Card key={card.title} card={card} category="games" />)}
        </Briefcase>
        <Briefcase title="- 📱 More -">
          {others.map((card) => <Card key={card.title} card={card} category="others" />)}
        </Briefcase>
      </div>
    </>
  );
};

Home.propTypes = {
  websites: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  games: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  others: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  websites: state.websites,
  games: state.games,
  others: state.others,
});

export default connect(mapStateToProps, null)(Home);
