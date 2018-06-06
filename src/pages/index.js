import React from 'react'  
import Link from 'gatsby-link'
import Config from '../../config'

const IndexPage = ({ data }) => ( 
  <section className="container">
    <div className="row">
      {data.allStrapiFile.edges.map(document => (
        <div className="col-sm-4" key={document.node.id}>
          <div className="card">
            <img className="card-img-top" src={Config.serverUrl+document.node.thumbnail.url} alt="Card image cap"/>
            <div className="card-body">
              <h5><Link to={`/${document.node.id}`}>{document.node.name}</Link></h5>
              <p className="card-text">{document.node.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiFile {
      edges {
        node {
          id
          name
          description
          thumbnail {
            url
          }
        }
      }
    }
  }
`