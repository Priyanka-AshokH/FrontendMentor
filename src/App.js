import SingleGrid from "../src/components/SingleGrid/singleGrid";
import FourCard from './components/FourGrid/fourCard';
import Rating from './components/RatingComponent/rating';
import BaseApparel from "./components/BaseApparel/Apparel";
import SignUpTrial from "./components/IntroComponentSignUp/signUpFreeTrial";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{marginBottom : "60px", marginTop: "20px",fontSize:"40px"}}>Single price grid component</h1>
      <SingleGrid />
      <h1 style={{marginTop : "100px", fontSize:"40px"}}>Four card feature section</h1>
      <FourCard />
      <h1 style={{marginTop : "100px", fontSize:"40px"}}>Interactive Rating Component</h1>
      <Rating />
      <h1 style={{marginTop : "100px", fontSize:"40px"}}>Base Apparel coming soon page </h1>
      <BaseApparel />
      <h1 style={{marginTop : "100px", fontSize:"40px"}}>Intro component with sign-up form </h1>
      <SignUpTrial />
    </div>
  );
}

export default App;
