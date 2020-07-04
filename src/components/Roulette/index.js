import React from 'react';

import api from '../../services/api.services';

import Roulette from 'react-roulette-game'

import highlight_img from '../../images/hightlight.png'
import pointer_img from '../../images/pointer.png'
import roulette_img_under_highlight from '../../images/rou_under_high.png'
import roulette_img_on_highlight from '../../images/rou_on_high.png'

import './index.css';

export default function Roleta() {

    const options = [
        'verdade',
        'desafio',
        'verdade',
        'desafio',
        'verdade',
        'desafio',
        'verdade',
        'desafio'
    ]

    const roulette_props = {
        roulette_img_under_highlight,
        roulette_img_on_highlight,
        highlight_img,
        pointer_img
    }

    async function onComplete(option){
        const response = await api.get(`/challenges/${option}`);

        const { description } = response.data;

        console.log(description);
    }

    function openQuestionModal(title) {

    }

    return (
        <div className='game-box'>
            <Roulette {...roulette_props}
             on_complete={(prize) => onComplete(prize)}
             prize_arr={options}
             start_text="Iniciar"
             reset_text="Reiniciar"
            />
        </div>
    );

}