import { NavBar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Create } from "./pages/create";
import { BlogDetails } from "./components/BlogDetails";
import { NotFound } from "./components/NotFound";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <NavBar />

      <div className="content">
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
