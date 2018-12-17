export default () => {
  const container = document.getElementById('container');
  const fireworks = new Fireworks(container);
  const startButton = document.querySelector('#start');
  const stopButton = document.querySelector('#stop');

  startButton.addEventListener("click", () => {
    console.log('you idiot');
    fireworks.start();
  });
  stopButton.addEventListener("click", () => {
    console.log('you idiot');
    fireworks.stop();
  });
  

  //fireworks.start();
};
  import './main.css';
  import Fireworks from 'fireworks-canvas';
 
