import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 48px;
	color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
	text-align: center;
	display: block;
`;

const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;

const Header = styled.header`
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

interface RouteParams {
	coinId: string;
}

interface RouteState {
	name: string;
}

function Coin() {
	const [loading, setLoading] = useState<boolean>(true);
	const { coinId } = useParams<keyof RouteParams>();
	const location = useLocation();
	const state = location.state as RouteState;
	const [info, setInfo] = useState({});
	const [priceInfo, setPriceInfo] = useState({});

	useEffect(() => {
		(async () => {
			let response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
			const infoData = await response.json();

			response = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
			const priceData = await response.json();

			setInfo(infoData);
			setPriceInfo(priceData);
		})();
	}, []);

	return (
		<Container>
			<Header>
				<Title>{state?.name || 'Loading...'}</Title>
			</Header>
			{loading ? <Loader>Loading...</Loader> : null}
		</Container>
	);
}
export default Coin;
