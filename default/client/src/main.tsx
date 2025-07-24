import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { DBProvider } from "../lightningdb"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DBProvider url="ws://localhost:3000">
        <App />
      </DBProvider>
    </ThemeProvider>
  </StrictMode>,
)
