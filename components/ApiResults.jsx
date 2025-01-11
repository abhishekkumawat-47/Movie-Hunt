import React from "react";
import Card from "./Card";

const ApiResults = ({results}) => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl lg:mx-auto md:ml-5 md:mr-auto sm:ml-36 sm:mr-auto py-4 gap-5 ">
          {results.map((results)=> (
            <Card key={results.id} results={results}/>
          ))}
      </div>
    </>
  );
};

export default ApiResults;
