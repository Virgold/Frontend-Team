import { ThemeProvider } from "@/components/theme/theme-provider";
import { RouterProvider, } from "react-router-dom";
import router from "./router/router";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  )
}

export default App
