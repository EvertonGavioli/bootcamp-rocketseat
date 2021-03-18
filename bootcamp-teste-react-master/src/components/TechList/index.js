import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    const techsStoraged = localStorage.getItem('techs');

    if (techsStoraged) {
      setTechs(JSON.parse(techsStoraged));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs])

  function handleAddtech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <form data-testid='tech-form' onSubmit={handleAddtech}>
      <ul data-testid='tech-list'>
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input id='tech' type="text" value={newTech} onChange={e => setNewTech(e.target.value)} />

      <button onClick={handleAddtech}>Adicionar</button>
    </form>
  );
}
