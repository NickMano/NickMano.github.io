import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Briefcase from '../components/Briefcase';
import Card from '../components/Card';

const getProjects = async () => {
  const res = await fetch('https://fathomless-plateau-37162.herokuapp.com/api/projects')
  const data = await res.json()
  const projects = data.data
  return projects
}

const Home = (props) => {
  const { others } = props;
  const [websites, setWebsites] = useState([])
  const [games, setGames] = useState([])
  const [apps, setApps] = useState([])
  useEffect(() => {
    getProjects()
    .then( data => {
      const websitesFiltered = data.filter(project => project.category == 'website')
      setWebsites(websitesFiltered)

      const gamesFiltered = data.filter(project => project.category == 'game')
      setGames(gamesFiltered)

      const appsFiltered = data.filter(project => project.category == 'app')
      setApps(appsFiltered)
    }
      )
    }, [])
  return (
    <>
      <Hero />
      <div id="briefcase">
        <Briefcase title="- 🖥 Websites -">
          {websites.map((card) => <Card key={card._id} card={card} category="websites" />)}
        </Briefcase>
        <Briefcase title="- 🕹 Games -">
          {games.map((card) => <Card key={card.title} card={card} category="games" />)}
        </Briefcase>
        <Briefcase title="- 📱 More -">
          {apps.map((card) => <Card key={card.title} card={card} category="apps" />)}
        </Briefcase>
      </div>
    </>
  );
};

export default Home;
