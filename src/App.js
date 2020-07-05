import React, { useState } from 'react';
import Roleta from './components/Roulette';
import Confetti from 'react-confetti'

import Chances from './components/Chances';

import logo from './images/logo.svg';
import menuImg from './images/menu.svg';
import closeImg from './images/close.svg';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [questionOpen, setQuestionOpen] = useState({
    description: '',
    option: ''
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [chances, setChances] = useState(3);

  function handleMenu() {
    const open = !openModal;
    setOpenModal(open)
    setMenuOpen(true)
  }

  function handleQuestion(description, option) {
    setOpenModal(true);
    setMenuOpen(false);
    setQuestionOpen({ description, option });
  }

  function downChances() {
    setChances(chances - 1);
  }

  function rolleteIsCompleted(completed) {
    setIsCompleted(completed);
  }

  return (
    <>
      <main>
        <div className={`body sidemenu ${openModal ? 'open' : ''}`}>
          <div className="menu">
            {
              !menuOpen ?
              <div className="menu-content">
                <a className="close" href="#/" onClick={(e) => handleMenu(e)}>
                  <img src={closeImg} alt="close" />
                </a>
                {
                  chances > 0 ?
                    <div className="question">
                      <h3 className={`${questionOpen.option}`}>{questionOpen.option}:</h3>
                      <p>{questionOpen.description}</p>
                    </div> : <Chances />
                }
              </div> :
              <div className="menu-content">
                <a className="close" href="#/" onClick={(e) => handleMenu(e)}>
                  <img src={closeImg} alt="close" />
                </a>
                <ul className="nav">
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#regras">Regras</a></li>
                  <li><a href="#ajuda">Ajuda</a></li>
                  <li>
                    <a href="https://www.ambev.com.br/" title="Cervejaria Ambev">
                      <img src={logo} alt="logo" />
                    </a>
                  </li>
                </ul>
              </div>
            }
          </div>
          <div className="container">
            <div className="header">
              <div className="box">
                <a className="toggle" href="#/" onClick={(e) => handleMenu(e)}>
                  <img src={menuImg} alt="menu" />
                </a>
              </div>
              <div className="box"><a href="/">
                <h1><span>#</span>Roleta<span>Ambev</span></h1>
              </a></div>
              <div className="full-box">
                <h2>Toque para iniciar e descubra
                            uma<span>&nbsp;pergunta&nbsp;</span>ou<span>&nbsp;desafio</span>!</h2>
              </div>
            </div>
            <div className="roullete-container">
              <Roleta
                isCompleted={rolleteIsCompleted}
                openQuestion={handleQuestion}
                downChances={downChances}
              />
            </div>
          </div>
          <Confetti
            gravity={0.9} tweenDuration={2000} numberOfPieces={100} wind={0.01} run={isCompleted} recycle={false}
          />
        </div>
      </main>
    </>
  );
}

export default App;
