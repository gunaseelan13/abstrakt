import React from 'react'  
import Link from 'gatsby-link'
import Config from '../../config'

const ArticleTemplate = ({ data }) => (  
  <div className="container">
    <div className="row">
    <div className="col-md-8">
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">{data.strapiFile.name}</li>
        </ol>
      </nav>
        <img className="img-fluid" src={Config.serverUrl+data.strapiFile.thumbnail.url} alt="Card image cap"/>
        <h1>{data.strapiFile.name}</h1>
        <p>{data.strapiFile.description}</p>
        <p>Tags :{data.strapiFile.tags}</p>
      <a href={data.strapiFile.link} className="btn btn-warning">Download</a>
      </div>      
    </div>
  </div>
)

export default ArticleTemplate

export const query = graphql`  
  query ArticleTemplate($id: String!) {
    strapiFile(id: {eq: $id}) {
      name
      description
      link
      tags
      thumbnail {
        url
      }
    }
  }
`