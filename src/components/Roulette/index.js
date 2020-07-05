import React from 'react';

import api from '../../services/api.services';

import Roulette from 'react-roulette-game'

import highlight_img from '../../images/hightlight.png'
import pointer_img from '../../images/pointer.png'
import roulette_img_under_highlight from '../../images/rou_under_high.png'
import roulette_img_on_highlight from '../../images/rou_on_high.png'

import './index.css';

export default function Roleta(props) {

    const options = [
        'pergunta',
        'desafio',
        'pergunta',
        'desafio',
        'pergunta',
        'desafio',
    ]

    const roulette_props = {
        roulette_img_under_highlight,
        roulette_img_on_highlight,
        highlight_img,
        pointer_img
    }

    async function onComplete(prize){
        const response = await api.get(`/challenges/${prize}`);
        const { description, option } = response.data;
        
        props.isCompleted(true);
        setTimeout(() => {
            props.openQuestion(description, option);
        }, 1000)
    }

    function resetRollete(){
        props.downChances();
    }
    
    return (
        <div className='game-box'>
            <Roulette {...roulette_props}
             on_complete={(prize) => onComplete(prize)}
             reset_callback = {() => resetRollete()}
             prize_arr={options}
             start_text="Iniciar"
             reset_text="Rodar Novamente"
            />
        </div>
    );

}