import "./App.css";
import Container from "./components/Container";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider value="dark">
      <Container />
    </ThemeProvider>
  );
}

export default App;
