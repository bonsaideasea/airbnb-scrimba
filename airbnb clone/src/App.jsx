import './App.css'
import NavHero from './NavHero'
import data from './data.js'
import Card from "./Cards"


function App() {
  const cards = data.map((card) => {
    return <Card 
      key = {card.id}
      card = {card}
    /> })

  return (
    <>
      <div>
        <NavHero />
        <section className="cards-list"> {cards} </section>
      </div>
    </>
  )
}

export default App
