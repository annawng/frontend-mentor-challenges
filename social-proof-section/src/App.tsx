import HeroMessage from './components/HeroMessage';
import ReviewSection from './components/ReviewSection';
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <main>
      <div className='top'>
        <HeroMessage />
        <ReviewSection />
      </div>
      <TestimonialSection />
    </main>
  );
}

export default App;
