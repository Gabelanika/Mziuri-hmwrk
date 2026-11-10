const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * titles.length);
}

export default function Header() {
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