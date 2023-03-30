import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeTrainer } from '../../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import logo from '../../img/logo.png'
import './HomeTrainer.css';

const HomeTrainer = () => {
    const [userName, setUserName] = useState('')
    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    const getName = () => {
        console.log(userName)
        Dispatch(changeTrainer(userName))
        Navigate('/pokedex')
    }

    return (
        <div className='home-container'>
            <img src={logo} alt="pokedex logo" id='pokedex' />
            <h1>¡Hola entrenador!</h1>
            <p>Para poder comenzar, dame tu nombre</p>

            <div className="home-input">
                <input type="text" className='input' placeholder='Tu nombre...' value={userName} onChange={e => setUserName(e.target.value)} />
                <button className='btn' onClick={getName}>Comenzar</button>
            </div>

        </div>
    );
};

export default HomeTrainer;