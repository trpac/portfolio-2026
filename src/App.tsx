import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="studio-container">
      <header>
        <h1>Nicholas Henao // Portfolio_2026</h1>
        <div className="status-bar">
          <span>LOCATION: Rionegro, Colombia</span>
          <span>email: nhenao98@outlook.com</span>
          <span>github.com/trpac</span>
          <span>Phone: +5730011530</span>
        </div>
      </header>

      <main>
        <Resume />
        <br/>
        <hr/>
        <section className="grid">
          <div className="card">
            <h3>[01] Engineering</h3>
            <p style={{color: '#888'}}>React, TypeScript, Linux environments. Building scalable lifestyle operating systems.</p>
          </div>

          <div className="card">
            <h3>[02] Production</h3>
            <p style={{color: '#888'}}>Audio Engineering, Ableton Live, and multi-disciplinary creative direction.</p>
          </div>

          <div className="card">
            <h3>[03] Systems</h3>
            <p style={{color: '#888'}}>High-structure productivity via Notion and deep-work Monk Mode sessions.</p>
          </div>
        </section>

        <section style={{marginTop: '60px'}}>
          <button onClick={() => setCount((count) => count + 1)}>
            INITIALIZE_SIGNAL: {count}
          </button>
        </section>
      </main>
    </div>
  )
}

export default App