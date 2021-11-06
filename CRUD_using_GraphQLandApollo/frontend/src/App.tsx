import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import dotenv from "dotenv";

import Main from "./main";
dotenv.config();

const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Main></Main>
      </ApolloProvider>
    </div>
  );
}

export default App;
