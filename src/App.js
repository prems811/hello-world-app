import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Love! This is your first React app....
        </p>
      </header>
    </div>
  );
}
export default App;

function FunctionalComponent() {
  return (
      <h1>1- Hello Functional Component!</h1>
  );
}
export { FunctionalComponent };
