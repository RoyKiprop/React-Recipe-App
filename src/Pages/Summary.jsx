/* eslint-disable react/prop-types */

function Summary({recipe}) {
  return (
    <div className="mt-8">
      <p
        className=" font-medium"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      ></p>
    </div>
  );
}

export default Summary;
