import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getSearchedMulti, IGetSearchedMulti } from '../api';

function Search() {
	const location = useLocation();
	const keyword = new URLSearchParams(location.search).get('keyword');
	const { data, isLoading } = useQuery<IGetSearchedMulti>(
		['search', 'multi', keyword],
		({ queryKey }) => getSearchedMulti(queryKey[2] as string),
		{ staleTime: 5 * 60 * 1000 },
	);
	console.log(data, isLoading);
	return null;
}

export default Search;
