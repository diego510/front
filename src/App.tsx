import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes/RootRouter";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
