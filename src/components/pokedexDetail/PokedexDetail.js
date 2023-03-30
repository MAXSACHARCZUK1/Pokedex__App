import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PokedexDetail.css'
import colors from '../../colors.json'

const PokedexDetail = () => {
    const [pokemonInfo, setPokemonInfo] = useState([])

    const { name } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(res => setPokemonInfo(res.data))
    }, [name])

    console.log(pokemonInfo)

    const changeColors = () => {

        let actualColor = colors.filter(x => {

            return x.type === pokemonInfo.types?.[0]?.type.name;

        })
        return actualColor[0]?.background
    };

    return (
        <div className='Tittle-pokemon'>
            <button onClick={() => navigate('/pokedex/')} className='btn'>ir a Pokedex</button>
            <div className='detail-container'>
                <div className='info-container-detail'>

                    <div className='image-container-detail' style={{ backgroundImage: changeColors() }}>
                        <img src={pokemonInfo.sprites?.other.dream_world.front_default} alt={pokemonInfo.name} />
                    </div>

                    <div className='id-container'>
                        <h3>#{pokemonInfo.id}</h3>
                    </div>

                    <div className='name-container-detail'>
                        <div className='vector-detail'> </div>
                        <div>
                            <h4>{pokemonInfo.name}</h4>
                        </div>
                        <div className='vector-detail'> </div>
                    </div>

                    <div className='data-pokemon-detail'>

                        <div className='types-container'>
                            <div>Tipo</div>
                            <ul>
                                <li style={{ backgroundImage: changeColors() }}>{pokemonInfo.types?.[0]?.type.name}</li>
                                <li style={{ backgroundImage: changeColors() }}>{pokemonInfo.types?.[1]?.type.name}</li>
                            </ul>
                        </div>

                        <div className='abilities-container'>
                            <div>Habilidades</div>
                            <ul>
                                <li>{pokemonInfo.abilities?.[0].ability.name}</li>
                                <li>{pokemonInfo.abilities?.[1].ability.name}</li>
                            </ul>
                        </div>

                    </div>


                    <div className='stats-container-detail'>
                        <div>
                            <div>
                                <h4>HP:</h4>
                                <p>{pokemonInfo.stats?.[0].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done'
                                    style={{ width: `${pokemonInfo.stats?.[0].base_stat}%`, backgroundImage: changeColors() }}>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>ATAQUE</h4>
                                <p>{pokemonInfo.stats?.[1].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done' style={{ width: `${pokemonInfo.stats?.[1].base_stat}%`, backgroundImage: changeColors() }}>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>DEFENSA:</h4>
                                <p>{pokemonInfo.stats?.[2].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done' style={{ width: `${pokemonInfo.stats?.[2].base_stat}%`, backgroundImage: changeColors() }}>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>SEPEED:</h4>
                                <p>{pokemonInfo.stats?.[5].base_stat}/150</p>
                            </div>
                            <div className='base-progress-bar'>
                                <div className='progress-bar-done' style={{ width: `${pokemonInfo.stats?.[5].base_stat > 100 ? 100 : pokemonInfo.stats?.[5].base_stat}%`, backgroundImage: changeColors() }}>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default PokedexDetail;