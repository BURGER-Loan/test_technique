

import React, { useState, useEffect } from 'react';
import BeerCard from '../components/beerCard';
import RandBeer from '../components/randBeer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
	const [beer, setBeer] = useState([]);

	const getAllBeer = () => {
		fetch("https://api.punkapi.com/v2/beers")        //recuperation de toute les bieres via l'api.
			.then(res => res.json())
			.then(data => {
				setBeer(data);
			})
	}

	useEffect(() => {
		getAllBeer();
		getRandomBeer();                         //on appele les fonction get de notre biere aleatoire ainsi que des 25premieres bieres
	}, [])

	const createCard = (beer) => {
		return (
			<BeerCard
				name={beer.name}
				key={beer.id}
				id={beer.id}
				tagline={beer.tagline}
				url={beer.image_url}
			/>
		)
	}

	const [randBeer, setRandomBeer] = useState([]);

	const getRandomBeer = () => {
		fetch("https://api.punkapi.com/v2/beers/random")
			.then(res => res.json())
			.then(data => {
				setRandomBeer(data);
			})
	}

	const createRandBeer = (beer) => {
		return (
			<RandBeer
				name={beer.name}
				key={beer.id}
				id={beer.id}
				description={beer.description}
				tagline={beer.tagline}
				abv={beer.abv}
				url={beer.image_url}
				first_brewed={beer.first_brewed}
				food={beer.food_pairing}
			/>
		)
	}

	return (



		<><section class="bg-secondary d-flex w-100 h-100 flex-column  align-items-center">
			<div class="row">
				{
				randBeer.map(beer => createRandBeer(beer)) //affichage de la biere tiré au sort.
				}
			</div>
		</section>


		{/* catalogue  */}
		
			<div class="container py-5 bg-light">
				<h2 class="display-4 text-center mb-5">Catalogue</h2>
				<div class="row" >
					{
						beer.map(beer => createCard(beer))
					}
				</div>
			</div></>
	);


	
}

export default Home;
