// src/components/Resume.tsx

const Resume = () => {
  return (
    <section className="resume-section" style={{ marginTop: '60px', borderTop: '1px solid #333', paddingTop: '40px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ margin: '0', color: '#fff' }}>Software Engineer & Multi-disciplinary Creator</h3>
        <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '10px' }}>2025 - PRESENT // REMOTE & COLOMBIA</p>
        <ul style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>
          <li>Building **Blue Moon Project**, a lifestyle OS using React, TypeScript, and Vite.</li>
          <li>Developing **"El tinto y el inglés"**, an English tutoring venture with a digital-first approach.</li>
          <li>Optimizing personal workflows using **Notion** and Linux-based terminal environments.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ margin: '0', color: '#fff' }}>Music Producer // The Remedy Line LLC</h3>
        <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '10px' }}>2024 - 2026</p>
        <ul style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>
          <li>Released studio album **"Remedy to a Safe Haven"** (July 17, 2025).</li>
          <li>Engineered tracks using **Ableton Live** and **Focusrite Scarlett** hardware.</li>
          <li>Managed distribution and artist analytics via DistroKid and Spotify for Artists.</li>
        </ul>
      </div>

      <div>
        <h3 style={{ margin: '0', color: '#fff' }}>Education</h3>
        <p style={{ color: '#ccc', fontSize: '0.95rem', marginTop: '5px' }}>
          ▹ B.S. Mathematics Computation (In Progress)<br />
          ▹ React & TypeScript Specialization (Udemy)
        </p>
      </div>
    </section>
  );
};

export default Resume;