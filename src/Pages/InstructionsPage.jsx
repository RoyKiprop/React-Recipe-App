/* eslint-disable react/prop-types */

function InstructionsPage({ recipe }) {
  return (
    <div className="flex mt-6">
      <div>
        <h2 className="text-2xl font-medium">Summary</h2>
        <p
          className="w-[70%] font-medium"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        ></p>
      </div>

      <div>
        <h2 className="text-2xl font-medium">Instructions</h2>
        <p
          className="w-[70%] font-medium"
          dangerouslySetInnerHTML={{ __html: recipe.instructions }}
        ></p>
      </div>
    </div>
  );
}

export default InstructionsPage;
