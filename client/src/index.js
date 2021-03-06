import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const defaultOptions = {
	watchQuery: {
		// fetchPolicy: "no-cache",
		fetchPolicy: "network-only",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "network-only",
		errorPolicy: "all",
	},
};
const client = new ApolloClient({
	uri: "https://thetagraph.overclockedbrains.co/subgraphs/name/MarsMello",
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});
ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
