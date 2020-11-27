import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import api from "./services/api";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_PRODUCTS = gql`
  query {
    poc(id: 532) {
      id
      products {
        id
        title
        rgb
        images {
          url
        }
      }
    }
  }
`;

function App() {
  return (
    <>
      <ApolloProvider client={api}>
        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;

            const products = data.poc.products;

            return (
              <>
                {products.map((p) => (
                  <div key={p.id}>
                    <p>{p.title}</p>
                    {p.images.map((image) => (
                      <img
                        key={p.id}
                        src={image.url}
                        alt={p.title}
                        height="200"
                        width="200"
                      />
                    ))}
                  </div>
                ))}
              </>
            );
          }}
        </Query>
      </ApolloProvider>
    </>
  );
}

export default App;
