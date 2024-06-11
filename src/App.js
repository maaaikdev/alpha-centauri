import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
		<Menu />
		<Hero />
		<About />
		<Services />
    </div>
  );
}

export default App;
