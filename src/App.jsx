import AppLayout from "./components/body/AppLayout";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col h-full justify-between items-center bg-secondary-800 rounded-md">
        <Header />
        <AppLayout />
        <Footer />
      </div>
    </div>
  );
}

export default App;
