import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
        <GlobalStyles />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
