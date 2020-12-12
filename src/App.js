import { useState, useEffect, useRef } from 'react';
import { CardsContainer } from './components/CardsContainer';
import { Loader } from './components/Loader';
import { Title } from './components/Title';
import { fetchCharacters } from './lib/api';
import './App.css';

function App()
{
	const loaderRef = useRef( null );
	const [ characters, setCharacters ] = useState( [] );
	const [ limit ] = useState( 40 );
	const [ offset, setOffset ] = useState( -limit );


	// init observer on mount
	useEffect( () => {
		
		const options = {

			root: null,
			rootMargin: '0px',
			treshold: .5

		};

		const observer = new IntersectionObserver( handleInfiniteScroll, options );

		if( loaderRef.current )
		{
			observer.observe( loaderRef.current );
		}

	// eslint-disable-next-line
	}, [] );


	// load more characters to the page
	useEffect( () => {

		// TODO: find a better solution...
		if( offset < 0 )
		{
			return;
		}

		fetchCharacters( limit, offset ).then( res => {

			setCharacters( prev => [ ...prev, ...res.data.results ] );

		});
		
	// eslint-disable-next-line
	}, [ offset ] );


	// change offset on scroll
	const handleInfiniteScroll = ( entries ) => {

		const loader = entries[0];

		if( loader.isIntersecting )
		{
			setOffset( prev => prev + limit );
		}

	}


	return (
		<div className="App">
			
			<Title>
				<span>MARVEL</span>-O-Pedia
			</Title>
			<CardsContainer characters={ characters } />
			<Loader loaderRef={ loaderRef } />
			
		</div>
	);
}

export default App;