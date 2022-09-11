import React, { useState } from 'react'
import './Bracket.scss'

export const BracketTorneo = (props) => {

    const torneo = props.torneo
    const settorneo = props.settorneo
    const octavos = props.octavos

    const handleOnChangeTorneo = (evento) => {
        settorneo({...torneo, [evento.target.name]: evento.target.value})
    }

    return (
        <div className="bracket">
            <section className="round of16">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{octavos['1-a']}</span></div>
                                <div className="participant"><span>{octavos['2-b']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{octavos['1-c']}</span></div>
                                <div className="participant"><span>{octavos['2-d']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{octavos['1-e']}</span></div>
                                <div className="participant"><span>{octavos['2-f']}</span></div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant"><span>{octavos['1-g']}</span></div>
                                <div className="participant"><span>{octavos['2-h']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className='winners'>
                    <div className='matchups'>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{octavos['1-b']}</span></div>
                                <div className='participant'><span>{octavos['2-a']}</span></div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{octavos['1-d']}</span></div>
                                <div className='participant'><span>{octavos['2-c']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='connector'>
                        <div className='merger'></div>
                        <div className='line'></div>
                    </div>
                </div>
                <div className='winners'>
                    <div className='matchups'>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{octavos['1-f']}</span></div>
                                <div className='participant'><span>{octavos['2-e']}</span></div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'><span>{octavos['1-h']}</span></div>
                                <div className='participant'><span>{octavos['2-g']}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='connector'>
                        <div className='merger'></div>
                        <div className='line'></div>
                    </div>
                </div>

            </section>
            <section className="round quarterfinals">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-a-1'>
                                        {
                                            torneo['cuartos-a-1']
                                                ? <option value={torneo['cuartos-a-1']}>{torneo['cuartos-a-1']}</option> 
                                                : <option value=''>CUARTOS</option>
                                        }
                                        <option value={octavos['1-a']}>{octavos['1-a']}</option>
                                        <option value={octavos['2-b']} >{octavos['2-b']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-a-2'>
                                        {
                                            torneo['cuartos-a-1']
                                                ? <option value={torneo['cuartos-a-1']}>{torneo['cuartos-a-1']}</option> 
                                                : <option value=''>CUARTOS</option> 
                                        }
                                        <option >{octavos['1-c']}</option>
                                        <option >{octavos['2-d']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-b-1'>
                                        {
                                            torneo['cuartos-b-1'] 
                                                ? <option value={torneo['cuartos-b-1'] }>{torneo['cuartos-b-1'] }</option> 
                                                : <option value=''>CUARTOS</option>
                                        }
                                        <option >{octavos['1-e']}</option>
                                        <option >{octavos['2-f']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-b-2'>
                                        {
                                            torneo['cuartos-b-2']
                                                ? <option value={ torneo['cuartos-b-2']}>{ torneo['cuartos-b-2']}</option> 
                                                : <option value=''>CUARTOS</option>
                                        }
                                        <option >{octavos['1-g']}</option>
                                        <option >{octavos['2-h']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-c-1'>
                                        {
                                            torneo['cuartos-c-1']
                                                ? <option value={torneo['cuartos-c-1']}>{torneo['cuartos-c-1']}</option> 
                                                : <option value=''>CUARTOS</option>
                                        }
                                        <option >{octavos['1-b']}</option>
                                        <option >{octavos['2-a']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-c-2'>
                                        {
                                            torneo['cuartos-c-2']
                                                ? <option value={torneo['cuartos-c-2']}>{torneo['cuartos-c-2']}</option> 
                                                : <option value=''>CUARTOS</option>
                                        }
                                        <option >{octavos['1-d']}</option>
                                        <option >{octavos['2-c']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-d-1'>
                                        {
                                            torneo['cuartos-d-1']
                                                ? <option value={torneo['cuartos-d-1']}>{torneo['cuartos-d-1']}</option> 
                                                : <option value=''>CUARTOS</option>
                                        }
                                        <option >{octavos['1-f']}</option>
                                        <option >{octavos['2-e']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='cuartos-d-2'>
                                        {
                                            torneo['cuartos-d-2']
                                                ? <option value={torneo['cuartos-d-2']}>{torneo['cuartos-d-2']}</option> 
                                                : <option value=''>CUARTOS</option>
                                        }
                                        <option >{octavos['1-h']}</option>
                                        <option >{octavos['2-g']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </section>
            <section className="round semifinals">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className='participant'><select onChange={handleOnChangeTorneo} name='semifinal-a-1'>
                                    {
                                        torneo['semifinal-a-1']
                                            ? <option value={torneo['semifinal-a-1']}>{torneo['semifinal-a-1']}</option> 
                                            : <option value=''>SEMI-FINAL</option>
                                    }
                                    <option value={torneo['cuartos-a-1']}>{torneo['cuartos-a-1']}</option>
                                    <option value={torneo['cuartos-a-2']}>{torneo['cuartos-a-2']}</option>
                                </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='semifinal-a-2'>
                                        {
                                            torneo['semifinal-a-2']
                                            ? <option value={torneo['semifinal-a-2']}>{torneo['semifinal-a-2']}</option>
                                            : <option value=''>SEMI-FINAL</option>
                                        }
                                        <option value={torneo['cuartos-b-1']}>{torneo['cuartos-b-1']}</option>
                                        <option value={torneo['cuartos-b-2']}>{torneo['cuartos-b-2']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='semifinal-b-1'>
                                        {
                                            torneo['semifinal-b-1']
                                                ? <option value={torneo['semifinal-b-1']}>{torneo['semifinal-b-1']}</option> 
                                                : <option value=''>SEMI-FINAL</option>
                                        }
                                        <option value={torneo['cuartos-c-1']}>{torneo['cuartos-c-1']}</option>
                                        <option value={torneo['cuartos-c-2']}>{torneo['cuartos-c-2']}</option>
                                    </select>
                                </div>
                                <div className="participant"><select onChange={handleOnChangeTorneo} name='semifinal-b-2'>
                                    {
                                        torneo['semifinal-b-2']
                                            ? <option value={torneo['semifinal-b-2']}>{torneo['semifinal-b-2']}</option> 
                                            : <option value=''>SEMI-FINAL</option>
                                    }
                                    <option value={torneo['cuartos-d-1']}>{torneo['cuartos-d-1']}</option>
                                    <option value={torneo['cuartos-d-2']}>{torneo['cuartos-d-2']}</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="connector">
                        <div className="merger"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </section>
            <section className="round finals">
                <div className="winners">
                    <div className="matchups">
                        <div className="matchup">
                            <div className="participants">
                                <div className="participant winner">
                                    <select onChange={handleOnChangeTorneo} name='final-a'>
                                        {
                                            torneo['final-a']
                                                ? <option value={torneo['final-a']}>{torneo['final-a']}</option> 
                                                : <option value=''>FINAL</option>
                                        }
                                        <option value={torneo['semifinal-a-1']}>{torneo['semifinal-a-1']}</option>
                                        <option value={torneo['semifinal-a-2']}>{torneo['semifinal-a-2']}</option>
                                    </select>
                                </div>
                                <div className="participant">
                                    <select onChange={handleOnChangeTorneo} name='final-b'>
                                        {
                                            torneo['final-b']
                                                ? <option value={torneo['final-b']}>{torneo['final-b']}</option> 
                                                : <option value=''>FINAL</option>
                                        }
                                        <option value={torneo['semifinal-b-1']}>{torneo['semifinal-b-1']}</option>
                                        <option value={torneo['semifinal-b-2']}>{torneo['semifinal-b-2']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='round champion'>
                <div className='winners'>
                    <div className='matchups'>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant loser'>
                                    <select onChange={handleOnChangeTorneo} name='campeon'>
                                        {
                                            torneo['campeon']
                                                ? <option value={ torneo['campeon'] }>{ torneo['campeon'] }</option> 
                                                : <option value=''>CAMPEON</option>
                                        }
                                        <option value={torneo['final-a']}>{torneo['final-a']}</option>
                                        <option value={torneo['final-b']}>{torneo['final-b']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='matchup'>
                            <div className='participants'>
                                <div className='participant'>
                                    <select onChange={handleOnChangeTorneo} name='tercero'>
                                        {
                                            torneo['tercero']
                                                ? <option value={torneo['tercero']}>{torneo['tercero']}</option> 
                                                : <option value=''>TERCERO</option>}
                                        <option value={torneo['final-a']}>{torneo['final-a']}</option>
                                        <option value={torneo['final-b']}>{torneo['final-b']}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}