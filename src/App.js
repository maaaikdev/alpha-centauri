import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
		<Menu />
		<Hero />
		<About />
		{/* <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React
			</a>
		</header> */}
    </div>
  );
}

export default App;
