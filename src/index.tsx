import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { darkTheme, lightTheme } from './theme';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={true ? darkTheme : lightTheme}>
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root'),
);
