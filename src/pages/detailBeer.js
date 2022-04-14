import React, { useState, useEffect } from "react";
import FixBeer from '../components/fixBeer'; 
import { useParams } from "react-router-dom";

const DetailBeer = () => {
	const id = useParams();

	const [fixBeer, setFixBeer] = useState([]);

	const getBeer = () => {
		fetch(`https://api.punkapi.com/v2/beers/${id.id}`)  //recupération des données grace a l'api 
			.then(res => res.json())                        //et l'id de la biere sur la quelle on a cliquer
			.then(data => {
				setFixBeer(data)
			})
	}

	useEffect(() => {
		getBeer();                                         //on vien appeler la fonction get des l'arrivé sur la page
	}, [])

	const createFixBeer = (beer) => {                     //permet d'appeler le fichier fixBeer.js avec les donnée voulu. 
		return (
			<FixBeer
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
		<div>
			{
			fixBeer.map(beer => createFixBeer(beer))        //appele la fonction createFixBeer sur chaque element recuperer dans beer.
                                                            //ici on a que la biere sur la quelle on a cliqué.
			}												 
		</div>
	);
}

export default DetailBeer;