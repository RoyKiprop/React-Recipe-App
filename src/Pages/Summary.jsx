/* eslint-disable react/prop-types */

function Summary({recipe}) {
  return (
    <div className="mt-6">
      <p
        className="w-[70%] font-medium"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      ></p>
    </div>
  );
}

export default Summary;
