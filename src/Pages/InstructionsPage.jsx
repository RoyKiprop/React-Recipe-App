/* eslint-disable react/prop-types */

function InstructionsPage({ recipe }) {

  if (!recipe.analyzedInstructions || !recipe.analyzedInstructions[0]) {
    return <p className="mt-6">No instructions available.</p>;
  }

  return (
    <div>
      <ul className="list-disc mt-6">
        {recipe.analyzedInstructions[0]?.steps.map((step) => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ul>
    </div>
  );
}

export default InstructionsPage;
