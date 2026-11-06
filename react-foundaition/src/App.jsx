import { CORE_CONCEPTS } from "./data";
const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}


function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} placeholder="Concept Image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
    

}
function App() {
  return (
    <div>
    <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts   title={ CORE_CONCEPTS [0].title} description={CORE_CONCEPTS [0].description} image={CORE_CONCEPTS [0].image} />
          <CoreConcepts   title={CORE_CONCEPTS [1].title} description={CORE_CONCEPTS [1].description} image={CORE_CONCEPTS [1].image} />
          <CoreConcepts   title={CORE_CONCEPTS [2].title} description={CORE_CONCEPTS [2].description} image={CORE_CONCEPTS [2].image} />
          <CoreConcepts   title={CORE_CONCEPTS [3].title} description={CORE_CONCEPTS [3].description} image={CORE_CONCEPTS [3].image} />
        </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
  function Header() {
  return(
  <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>foundational React Essentials</h1>
        <p>
     {titles[getRandomInt()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}



