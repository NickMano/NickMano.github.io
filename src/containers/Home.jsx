import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Briefcase from '../components/Briefcase';
import Card from '../components/Card';
import Button from '../components/Button';

const getProjects = async () => {
  const res = await fetch('https://fathomless-plateau-37162.herokuapp.com/api/projects');
  const data = await res.json();
  const projects = data.data;
  return projects;
};

const Home = () => {
  const [websites, setWebsites] = useState([]);
  const [games, setGames] = useState([]);
  const [apps, setApps] = useState([]);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProjects()
      .then((data) => {
        const websitesFiltered = data.filter((project) => project.category === 'website');
        setWebsites(websitesFiltered);

        const gamesFiltered = data.filter((project) => project.category === 'game');
        setGames(gamesFiltered);

        const appsFiltered = data.filter((project) => project.category === 'app');
        setApps(appsFiltered);

        const toolsFiltered = data.filter((project) => project.category === 'tool');
        setTools(toolsFiltered)
        
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Hero />
        <div id="briefcase">
          <Briefcase title="- 🖥 Websites -">
            {[1, 2, 3, 4].map((card) => <Card key={card} loading />)}
          </Briefcase>
          <Briefcase title="- 🕹 Games -">
            {[1, 2, 3, 4].map((card) => <Card key={card} loading />)}
          </Briefcase>
          <Briefcase title="- 📱 More -">
            {[1, 2, 3, 4].map((card) => <Card key={card} loading />)}
          </Briefcase>
        </div>
      </>
    );
  }

  return (
    <>
      <Hero />
      <div id="briefcase">
        <Briefcase title="- 📱 Mobile -">
          {apps.map((card) => <Card key={card._id} card={card} category="apps" />)}
        </Briefcase>
        <Briefcase title="- 🖥 Websites -">
          {websites.map((card) => <Card key={card._id} card={card} category="websites" />)}
        </Briefcase>
        <Briefcase title="- 🕹 Games -">
          {games.map((card) => <Card key={card._id} card={card} category="games" />)}
        </Briefcase>
        <Briefcase title="- ⚙️ Others -">
          {tools.map((card) => <Card key={card._id} card={card} category="tools" />)}
        </Briefcase>
      </div>
    </>
  );
};

export default Home;
