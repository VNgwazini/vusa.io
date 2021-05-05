import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:vusumuzi.ngwazini@gmail.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
        <p>&mdash; The Team</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/vusumuzi-ngwazini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Are you a recruiter? Checkout my LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
