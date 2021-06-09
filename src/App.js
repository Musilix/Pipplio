import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="App-intro">
          <h2>Welcome to Pipplio</h2>
          <p>
            The best place to find teammates made for you.
          </p>
        </div>

        <a
          className="App-link"
          href="https://github.com/Musilix/Pipplio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute
        </a>
      </header>
    </div>
  );
}

export default App;
