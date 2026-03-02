function App() {
const llamaFacts = [
"Llama poo produces little to no odor",
"Llamas are native to the mountainous region of South America",
"A llama can spit partially digested food 15 feet or more",
"When one llama is angry at another llama, they will stick their tongues out to express their dislike",
];

const spittingFact = true;

  return (
      <div>
      <h1>Llama Facts</h1>
      <p>
      {spittingFact ? llamaFacts[2] : llamaFacts[3]}
      </p>
      </div>
  );
  }
export default App

