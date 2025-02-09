# First practise in hashNode; [https://gql.hashnode.com/]

- install `npm i graphql graphql-request`
- ekhon root e `queries` name e akta folder create korbo; and er modde `blog-data.js` file thakbe; jekhane moloto blog data goli rakbo

- "lib" folder er modde graphQl er clien rakbo; er jonno file create korbo `graphQLClient.js`;


# 1. `graphQLClient.js`
- ai file e amra age client ta setup korbo; er jonno client hisabe hashnode use korbo; `https://gql.hashnode.com`; amra ai link er browse korei GraphQL practise korsilam, ekhon ai link tai amader nextjs e client hisabe use korbo;

## all post er jonno ai `gql` request likte hobe
```js
query postDetails{
  publication(host:"blog.greenroots.info") {
    title
    posts (first:20){
      pageInfo{
        hasNextPage
        endCursor
      }
      edges{
        node{
          author{
            profilePicture
            name
          }
          title
          subtitle
          brief
          slug 
          coverImage{
            url
          }
          tags{
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
```

# 2. `blog-data.js` 
- aikhane amra GraphQL use kore tapas da er data get korbo; ar `tags` ta jehoto dynamic use korbo tai er jonno amader onek kaj korte hoise just sodo dynamic korar jonno;


## single post er jonno ai `gql` request likte hobe

```js
query postDetails{
  publication(host:"blog.greenroots.info") {
    post (slug:"exploring-advanced-javascript-features-ecmascript-2023"){
      author{
        name
        profilePicture
      }
      publishedAt
      title
      subtitle
      readTimeInMinutes
      content{
        html
      }
      tags{
        name
        slug
        id
      }
      coverImage{
        url
      }
    }
  }
    
}
```

# Work in Fronetend
- install `react-icons` package
