import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Nicholas Henao | Portfolio 2026</h1>
      <p>Software Engineer & Multi-disciplinary Creator</p>
      
      {/* This is a simple button using the 'count' state you imported */}
      <button onClick={() => setCount((count) => count + 1)}>
        Project Likes: {count}
      </button>

      <hr style={{ margin: '20px 0' }} />

      <section>
        <h2>Current Focus</h2>
        <ul>
          <li><strong>Engineering:</strong> React + TypeScript Development</li>
          <li><strong>Creative:</strong> Audio Engineering & Ableton Live</li>
          <li><strong>Systems:</strong> Notion-based Personal OS</li>
        </ul>
      </section>

      {/* If your hero.png is in the src/assets folder, this will display it */}
      {heroImg && <img src={heroImg} alt="Hero" style={{ width: '200px', marginTop: '20px' }} />}
    </div>
  )
}

export default App