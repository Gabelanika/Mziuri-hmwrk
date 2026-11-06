
const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}





function CoreConcepts(props) {
  return (
    <li>
      <img src="" alt=""placeholder="Concept Image" />
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
        <section id = 'core-concepts'><h2>Core Concepts</h2>
        <ul>
          <CoreConcepts   title="Components" description="this is description for components"/>
          <CoreConcepts    title="Components" description="this is description for props"/>
          <CoreConcepts   title="Components" description="this is description for jsx"/> 
          <CoreConcepts   title="Components" description="this is description for state"/> 
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



