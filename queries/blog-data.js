import { getClient } from "@/lib/graphQLClient";
import { gql } from "graphql-request";

export const getAllPosts = async (tags) => {
  const client = getClient();

  const query = gql`
    query allPosts($tags: [ObjectId!]) {
      publication(host: "blog.greenroots.info") {
        title
        posts(first: 20, filter: { tags: $tags }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              author {
                profilePicture
                name
              }
              title
              subtitle
              brief
              slug
              coverImage {
                url
              }
              tags {
                name
                slug
                id
              }
              publishedAt
              readTimeInMinutes
            }
          }
        }
      }
    }
  `;

  const variables = {
    tags: tags
  };

  try {
    const data = await client.request(query, variables);
    return data.publication.posts.edges;
  } catch (error) {
    console.error("GraphQL request failed:", error);
    throw error;
  }
};

export const getPost = async (slug) => {
  const client = getClient();

  const query = gql`
  query postDetails($slug: String!) {
    publication(host: "blog.greenroots.info") {
      post(slug: $slug) {
        author {
          name
          profilePicture
        }
        publishedAt
        title
        subtitle
        readTimeInMinutes
        content {
          html
        }
        tags {
          name
          slug
          id
        }
        coverImage {
          url
        }
      }
    }
  }
`;

  const variable = {
    slug: slug
  }

  try{
    const data = await client.request(query,variable)
    return data.publication.post;
  }catch(err){
    console.error(`GraphQL request Failed`);
    throw err;
  }
};
