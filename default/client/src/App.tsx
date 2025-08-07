import { Container } from "@mui/material"
import Welcome from "./Welcome"
import Section from "./Section"
import { Playground } from "@lightningdb/playground"
import types from "../lightningdb/schema.ts?raw"

const App: React.FC = () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <Welcome />
    <Section title="Playground">
      <Playground types={types} />
    </Section>
  </Container>
)

export default App
