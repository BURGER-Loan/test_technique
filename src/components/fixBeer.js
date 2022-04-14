import React from 'react'
import { Link } from "react-router-dom";

export default function FixBeerCard(props) {
	return (
		
		<><div class="row">
			<div class="col">
				<img src={props.url} alt={props.name} class="w-50" />
			</div>

			<div class="col-10">
				<h2 class="display-4  text-left">{props.name} {props.abv}°</h2>
				<h1 class=" text-left">{props.tagline}</h1>
				<p class="lead text-left ">{props.description}</p>
				<h5>Tasty with :</h5>

				<p class="lead text-left ">-{props.food[0]}</p>
				<p class="lead text-left ">-{props.food[1]}</p>
				<p class="lead text-left ">-{props.food[2]}</p>
				<p class="lead text-left ">appearance: {props.first_brewed}</p>
			</div>

		</div>
		
		<a href="javascript:history.go(-1)">Page Accueil</a></>
	)
}