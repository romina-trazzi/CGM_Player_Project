import Modal from './components/Modal.jsx';
import Header from './components/Header.jsx';
import Player from './components/Player.jsx';
import Challenges from './components/Challenges.jsx';

function App() {
  return (
    <body>
      <Modal />
      <div id="content">
        <Header />
        <Player />
        <Challenges />
      </div>
    </body>
    
  );
}

export default App;
