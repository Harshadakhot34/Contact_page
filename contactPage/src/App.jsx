import { useState } from 'react'

import './App.css'
import Navigation from './componets/Navigation/Navigation'
import ContactHeader from './componets/ContactHeader/COntactHeader'
import ContactForm from './componets/ContactForm/ContactFOrm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navigation/>
      <main className="main_container">
      <ContactHeader/>
      <ContactForm/>
      </main>
     </div>
    </>
  )
}

export default App
