
const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}
function App() {
  return (
    <div>
    <Header/>
      <main>
        <h2>Time to get started!</h2>
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



