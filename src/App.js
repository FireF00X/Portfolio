import MainLayout from './layout/MainLayout';
import MainPortfolio from './components/portofolio/MainPortofolio';

function App() {
  return (
    <div className="App">
      <MainLayout >
        <MainPortfolio />
      </MainLayout>
    </div>
  );
}

export default App;
