import ApolloClient from "apollo-boost";

const api = new ApolloClient({
  uri: "https://api.code-challenge.ze.delivery/public/graphql",
});

export default api;
