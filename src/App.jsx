import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
