const { Nav, Hero, DriveSection, ProductGrid, Stats, Footer } = window;

const App = () => (
  <div style={{ minHeight: '100vh', background: '#FFF' }}>
    <Nav />
    <Hero />
    <DriveSection />
    <ProductGrid />
    <Stats />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
