const path = require('path');

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {  
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {  
  const { createPage } = boundActionCreators;

  const getFiles = makeRequest(graphql, `
    {
      allStrapiFile {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each file.
    result.data.allStrapiFile.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/file.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  // Query for files nodes to use in creating pages.
  return getFiles;
};