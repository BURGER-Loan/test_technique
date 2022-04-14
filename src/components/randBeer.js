import React from 'react'
import { Link } from "react-router-dom";

export default function RandBeerCard(props) {
	return (
		<>
			<div class = "col">
				<img src={props.url} class="w-25" />
			</div>
			
			<div class = "col-10"> 
				<h3 class="display-1 text-white text-left">Random Beer of the day</h3>
				<h2 class="display-4 text-white text-left">{props.name}  {props.abv} °</h2>
				<h1 class="text-white text-left">{props.tagline}</h1>
				<p class="lead text-left text-white">{props.description}</p>

				<h5 class= "text-white">Tasty with :</h5>
				
				<p class="lead text-white text-left ">-{props.food[0]}</p>
				<p class="lead text-left text-white">-{props.food[1]}</p>
				<p class="lead text-left text-white">-{props.food[2]}</p>
				<p class="lead text-left text-white">appearance : {props.first_brewed}</p>
			</div>
			
			
			</>


	)
}
