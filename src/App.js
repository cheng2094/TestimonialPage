import './App.css';
import Testimonial from './components/Testimonial'; 

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonial 
          name="Emma Bostian" 
          country="Sweden"
          position="Software Engineer"
          company="Spotify"
          testimonial="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          image="Emma"
          />
      </div>
    </div>
  );
}

export default App;
