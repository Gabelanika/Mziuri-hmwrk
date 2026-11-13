import { jsx } from "react/jsx-runtime";
import { CORE_CONCEPTS } from "./data";
import Header from "./component/Header";
import TabButton from "./component/TabButton";
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
    <Header title={"SHENGEL"}/>
    <Header title={"Giusha"} />
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton title={ CORE_CONCEPTS [0].title} />
            <TabButton title={ CORE_CONCEPTS [1].title}/>    
            <TabButton title={ CORE_CONCEPTS [2].title}/>
            <TabButton title={ CORE_CONCEPTS [3].title}/>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;