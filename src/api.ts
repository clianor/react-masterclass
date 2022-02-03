const API_KEY = '10923b261ba94d897ac6b81148314a3f';
const BASE_PATH = 'https://api.themoviedb.org/3';

interface IMovie {
	id: number;
	backdrop_path: string;
	poster_path: string;
	title: string;
	overview: string;
}

interface ITvShow {
	id: number;
	backdrop_path: string;
	poster_path: string;
	name: string;
	overview: string;
}

export interface IGetMoviesResult {
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
}

export function getMovies() {
	return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) =>
		response.json(),
	);
}

export interface IGetPopularTvShowResult {
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	results: ITvShow[];
	total_pages: number;
	total_results: number;
}

export function getPopularTvShow() {
	return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then((response) =>
		response.json(),
	);
}

export interface IGetSearchedMulti {
	page: number;
	results: IMovie & {
		media_type: 'movie' | 'tv';
	};
	total_pages: number;
	total_results: number;
}

export function getSearchedMulti(query: string) {
	return fetch(
		encodeURI(`${BASE_PATH}/search/multi?api_key=${API_KEY}&query=${query}`),
	).then((response) => response.json());
}
