import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Shop } from "./component/Shop";
import { ContextProvider } from "./context";

function App() {
  return (
    <div>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
