import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';

// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloProvider } from 'react-apollo';
// import { setContext } from 'apollo-link-context';

import './App.css';

// const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' });
// const authLink = setContext(( _, { headers}) => {
// 	const token = TOKEN;
// 	// return the headers to the context so httpLink can read them
// 	return {
// 		headers: {
// 			...headers,
// 			Authorization: token ? `Bearer ${token}` : "",
// 		}
// 	}
// });

// const client = new ApolloClient({ 
// 	link: authLink.concat(httpLink),
// 	cache: new InMemoryCache()
// })

// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App bp3-dark" >
// 				<BrowserRouter>
// 					<ApolloProvider client={client}>
// 						<Menu/>
// 						<Routes/>
// 					</ApolloProvider>
// 				</BrowserRouter>
// 			</div>
// 		);
// 	}
// }

class App extends Component {
	render() {
		return (
			<div className="task-dashboard-container">
				<BrowserRouter>
					<Routes/>
				</BrowserRouter>
			</div>
		)
	}
}

export default App;
