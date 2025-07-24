import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { DBProvider } from "../lightningdb"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { ClerkProvider } from "@clerk/clerk-react"

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
})

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file")
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <DBProvider url="ws://localhost:3000">
          <App />
        </DBProvider>
      </ClerkProvider>
    </ThemeProvider>
  </StrictMode>,
)
