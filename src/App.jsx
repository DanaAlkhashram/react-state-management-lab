import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      alert('Not enough money!');
      return;
    }

    setTeam(prev => [...prev, fighter]);
    setMoney(prev => prev - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((member) => member.id !== fighter.id));
    setMoney(money + fighter.price);
  };

  const totalStrength = team.reduce((sum, m) => sum + m.strength, 0);
  const totalAgility = team.reduce((sum, m) => sum + m.agility, 0);

  return (
    <div className="App">
      <h1>Zombie Fighter Team Builder</h1>
      <h3>Money Left: ${money}</h3>

      <h2>Available Fighters</h2>
      <ul className="fighters">
        {zombieFighters.map((fighter) => (
          <li key={fighter.id} className="fighter-card">
            <img src={fighter.img} alt={fighter.name} width="100" />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button
              onClick={() => handleAddFighter(fighter)}
              disabled={money < fighter.price || team.some(m => m.id === fighter.id)}
            >
              Add to Team
            </button>

          </li>
        ))}
      </ul>

      <h2> My Team</h2>

      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <>
          <ul className="team">
            {team.map((member) => (
              <li key={member.id} className="fighter-card">
                <img src={member.img} alt={member.name} width="100" />
                <h3>{member.name}</h3>
                <p>Price: ${member.price}</p>
                <p>Strength: {member.strength}</p>
                <p>Agility: {member.agility}</p>
                <button onClick={() => handleRemoveFighter(member)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total Strength: {totalStrength}</h3>
          <h3>Total Agility: {totalAgility}</h3>
        </>
      )}
    </div>
  );
};

export default App;