import './LandingIndex.scss'
import { Link } from "react-router-dom";

export default function LandingIndex() {
  return (
    <main>
      <section className='landing__hero'>
        <h1>
        чтонибудь фэмили френдли
        </h1>
        
        <Link to="auth">
          Играть
        </Link>
      </section>
      <section className='landing__about'>

      </section>
    </main>
  );
}