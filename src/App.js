import { useState, useEffect } from 'react';
import { CardsContainer } from './components/CardsContainer';
import { fetchCharacters } from './lib/api';
import './App.css';

function App()
{
	const [ characters, setCharacters ] = useState( [] );

	useEffect( () => {
		
		fetchCharacters().then( res => setCharacters( res.data.results ) );

	}, [] );

	return (
		<div className="App">
			<CardsContainer characters={ characters } />
		</div>
	);
}

export default App;