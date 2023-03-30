import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonsList.css'

const PokemonsList = ({ pokemonUrl }) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate() 

    useEffect(() => {
        axios.get(pokemonUrl).then(res => setPokemon(res.data))
    }, [pokemonUrl])

    //console.log(pokemonUrl)
    
    return (
        
            <div className="card" onClick={() => navigate(`/pokedex/${pokemon.name}`)} > 
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites?.front_default} alt="" />
            </div>


  
    );
};

export default PokemonsList;