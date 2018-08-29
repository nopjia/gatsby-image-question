import React from "react";

export default ({ data }) => {
  const items = data.allItemsJson.edges;
  return (
    <div>
      {items.map(({ node }) => {
        return (
          <div
            key={node.title}
            style={{
              display: "inline-block",
              width: "400px",
              margin: "15px",
              padding: "15px",
              border: "1px solid black"
            }}
          >
            <img
              width="100%"
              src={`images/${node.image}`}
              alt={node.title}
            />
            <h3>{node.title}</h3>
            <p>{node.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export const pageQuery = graphql`
  query ItemsQuery {
    allItemsJson {
      edges {
        node {
          title
          description
          image
        }
      }
    }
  }
`;
