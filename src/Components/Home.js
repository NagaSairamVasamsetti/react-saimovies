import React, { useState,useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar"
import Main from "./Main";
import Movie from "./Movie";
function Home() {
const [state, setState] = useState({
	s: "sherlock",
	results: [],
	selected: {},
});

const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";
useEffect(()=>{
	axios(apiurl + "&s=" + "marvel").then(({ data }) => {
		let results = data.Search;

		console.log(results);

		setState((prevState) => {
		return { ...prevState, results: results };
		});
	});
},[]);
const searchInput = (e) => {
	let s = e.target.value;

	setState((prevState) => {
	return { ...prevState, s: s };
	});
};

const search = (e) => {
	if (e.key === "Enter") {
	axios(apiurl + "&s=" + state.s).then(({ data }) => {
		let results = data.Search;

		console.log(results);

		setState((prevState) => {
		return { ...prevState, results: results };
		});
	});
	}
};

const openDetail = (id) => {
	axios(apiurl + "&i=" + id).then(({ data }) => {
	let result = data;

	setState((prevState) => {
		return { ...prevState, selected: result };
	});
	});
};

const closeDetail = () => {
	setState((prevState) => {
	return { ...prevState, selected: {} };
	});
};

return (
	<div className="App">
	<header className="App-header">
	</header>
	<main>
		<Navbar searchInput={searchInput} search={search} />

		<Main results={state.results} openDetail={openDetail} />

		{typeof state.selected.Title != "undefined" ? (
		<Movie selected={state.selected} closeDetail={closeDetail} />
		) : (
		false
		)}
	</main>
	</div>
);
}

export default Home;
