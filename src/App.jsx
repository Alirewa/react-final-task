import AppLayout from "./Features/body/AppLayout";
import Footer from "./Features/footer/Footer";
import Header from "./Features/header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="h-screen w-full">
        <div className="flex flex-col h-full justify-between items-center bg-secondary-800 rounded-md">
          <Header />
          <AppLayout />
          <Footer />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
