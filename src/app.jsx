/* eslint-disable class-methods-use-this */
import React from 'react';
import electron from 'electron';
import Tone from 'tone';

export default class App extends React.Component {

  constructor() {
    super();
    this.path = '/home/aldorado/web/br41n_io/Music/bruh/Drums/Final/';

    // Base
    this.basePlayer = new Tone.Player(this.path + 'BS_Standard.wav').toMaster();
    this.baseLoop = new Tone.Loop(() => {
      this.basePlayer.start();
    }, '4n').start();

    // Snare
    this.hatOne = new Tone.Player(this.path + 'HH_Cl_01.wav').toMaster();
    this.hatTwo = new Tone.Player(this.path + 'HH_Cl_02.wav').toMaster();
    this.hatLoop = new Tone.Loop(() => {
      this.hatOne.start();
      this.hatTwo.start('1n');
    }, '8n').start();

    electron.ipcRenderer.on('ping', (event, message) => {
      console.log(message);// Prints 'whoooooooh!'
    });
    this.startMusic();
  }

  startMusic() {
    // Tone.Transport.start();
  }

  render() {
    return (<div>
      <h2>Welcome to React!</h2>
    </div>);
  }
}
