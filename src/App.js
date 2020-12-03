import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AWS Amplify CI/CD Demo.
        </p>
        <a
          className="App-link"
          href="https://github.com/roc41d/aws-amplify-react-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </header>
    </div>
  );
}

export default App;
