import logo from './logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />{/*className="App-logo"*/}
        <p class="mb-0">Sorry for the inconvenience but I&rsquo;m performing some maintenance at the moment. If you need to you can always <a href="mailto:vusumuzi.ngwazini@gmail.com">contact me</a>, otherwise I&rsquo;ll be back online shortly!</p>
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
