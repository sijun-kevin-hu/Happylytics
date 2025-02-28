import Header from './components/Header'
import Footer from './components/Footer'
import HappinessMeter from './components/HappinessMeter'
import HappinessMap from './components/HappinessMap'
import HappinessFactors from './components/HappinessFactors'

import './App.css'

function App() {

  return (
      <div>
        <div className="container mx-auto px-4">
          <Header />
          <main className="mt-8">
            <HappinessMeter />
            <HappinessMap />
            <HappinessFactors />
          </main>
          <Footer />
        </div>
      </div>
  );
}

export default App;
