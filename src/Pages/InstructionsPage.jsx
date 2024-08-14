/* eslint-disable react/prop-types */

function InstructionsPage({ recipe }) {

  if (!recipe.analyzedInstructions || !recipe.analyzedInstructions[0]) {
    return <p className="mt-8">No instructions available.</p>;
  }

  return (
    <div>
      <ul className="list-disc mt-8 ml-5">
        {recipe.analyzedInstructions[0]?.steps.map((step) => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ul>
    </div>
  );
}

export default InstructionsPage;
