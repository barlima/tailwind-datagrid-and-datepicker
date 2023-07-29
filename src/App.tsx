import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DatepickerPage from "./pages/datepicker";
import DataGridPage from "./pages/data-grid";

const router = createBrowserRouter([
  {
    path: "/datepicker",
    element: <DatepickerPage />,
  },
  {
    path: "/data-grid",
    element: <DataGridPage />,
  },
  {
    path: "/",
    element: <div>Hello</div>,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
