import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { addTech } from "../../store/modules/techs/actions";

// import { Container } from './styles';

export default function TechListRedux() {
  const [newTech, setNewTech] = useState('');

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  function handleAddtech() {
    dispatch(addTech(newTech));
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
