import { GraphQLClient } from "graphql-request";

export const getClient = () =>{
    const client = GraphQLClient("https://gql.hashnode.com");
    return client;
}