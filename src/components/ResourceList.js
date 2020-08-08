import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) =>{
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
}

const ResourceList = ({ resource }) => {
 
  const resources = useResources(resource)

  return (
    <ul>
      {resources.map((res) => (
        <li key={res.id}>{res.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
