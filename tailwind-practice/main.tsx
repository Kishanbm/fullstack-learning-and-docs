import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/input.css'; 

import { Button } from './components/Button.tsx';
import { Card } from './components/Card.tsx';
import { Navbar } from './components/Navbar.tsx';


function App() {
  return (
    <div>
      <Navbar />

      {/* Main content area */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2 text-center text-gray-800"></h1>

        {/* --- Button Section --- */}
        <section className="mb-24">
          <h2 className="text-xl font-semibold mb-4"></h2>
          <div className="flex space-x-4">
          
            <div className="transform transition-all duration-300 hover:scale-105">
              <Button variant="primary">
                Primary Button
              </Button>
            </div>

            <div className="transform transition-all duration-300 hover:scale-105">
              <Button variant="secondary">
                Secondary Button
              </Button>
            </div>

          </div>
        </section>

        {/* --- Cards Section --- */}
        <section className="mt-24 ">
          <div className="text-xl font-semibold mb-6 text-gray-800"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* --- Card 1 --- */}
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Card
                title="Card Title 1"
                imageUrl="/images/fin1.jpeg" 
              >
                <> 
                  <p className="mb-4">Some description</p>
                  <Button variant="primary">
                    Learn More
                  </Button>
                </>
              </Card>
            </div>

            {/* --- Card 2 -- */}
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Card
                title="Card Title 3"
                imageUrl="/images/fin3.jpeg"
              >
                <> 
                  <p className="mb-4">Some description</p>
                  <Button variant="primary">
                    Learn More
                  </Button>
              </>
                </Card>
            </div>

            {/* --- Card 3 --- */}
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Card
                title="Card Title 3"
                imageUrl="/images/fin2.jpeg"
              >
                <> 
                  <p className="mb-4">Some description</p>
                  <Button variant="primary">
                    Learn More
                  </Button>
                </>
              </Card>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);