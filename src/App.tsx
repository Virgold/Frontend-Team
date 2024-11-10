import { ThemeProvider } from "@/components/theme/theme-provider";
import { RouterProvider, } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
