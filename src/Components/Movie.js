import React from "react";

function Movie({ selected, closeDetail }) {
return (
	<section className="detail">
	<div className="content">
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<h2>{selected.Title}</h2>
		<span>{selected.Year}</span>
		<p className="rating">Rating: {selected.imdbRating}</p>

		<div className="about">
		<img src={selected.Poster} alt="" />
			
<p>{selected.Plot}</p>

		</div>
		<button className="close" onClick={closeDetail}>
			BACK
		</button>
	</div>
	</section>
);
}

export default Movie;
