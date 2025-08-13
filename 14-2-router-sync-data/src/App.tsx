import { routes } from "@/router/routes";
import { RouterProvider } from 'react-router';


function App() {
  return (
    <div style={{ display: "flex" }}>
      <RouterProvider router={routes} />
    </div>
  );
}
export default App;
