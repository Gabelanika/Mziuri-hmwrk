import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(
    "Please Choose A Topic...",
  );

  function handleClick(value) {
    setSelectedTopic(value);
    console.log(selectedTopic);
  }

  return (
    <div>
      <button>Show Log</button>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>jsx</TabButton>
            <TabButton onSelect={() => handleClick("props")}>props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>state</TabButton>
          </menu>
        </section>
        {selectedTopic}
      </main>
    </div>
  );
}

export default App;