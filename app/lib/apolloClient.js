import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, concat } from "apollo-link";
import Cookies from "js-cookie";

const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: Cookies.get("token")
        ? `Bearer ${Cookies.get("token")}`
        : null
    }
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

export default apolloClient;
