import React from 'react'
import { Link } from "react-router-dom";

export default function beerCard(props) {
	return (
		
		
		<div class="col-md-4 col-sm-6" >
				<div class="card mb-4 shadow-sm">
					<div class="card-image"> 
						<img src={props.url} alt={props.name} class="w-25" />
					</div>
					<div class="card-body">
						<p class="card-title">	
							{props.name}
						</p>
						<p class="card-texte">
							{props.tagline}
						</p>
						<Link to={`/detail/${props.id}`}><div>Discover</div></Link>

					</div>
				</div>
			</div>
	)
}
