import { Container } from "@mui/material"
import Welcome from "./Welcome"
import UsersList from "./users/UsersList"
import Section from "./Section"
import CreateUser from "./users/CreateUser"
import DeleteUser from "./users/DeleteUser"
import UpdateUser from "./users/UpdateUser"
import UpdatePost from "./posts/UpdatePost"
import { Playground } from "@lightningdb/playground"
import types from "../lightningdb/schema.ts?raw"

const App: React.FC = () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <Welcome />
    <Section title="Users List" defaultExpanded>
      <UsersList />
    </Section>
    <Section title="Create User">
      <CreateUser />
    </Section>
    <Section title="Update User">
      <UpdateUser />
    </Section>
    <Section title="Delete User">
      <DeleteUser />
    </Section>
    <Section title="Update Post">
      <UpdatePost />
    </Section>
    <Section title="Playground">
      <Playground
        types={types}
        initialCode={`useQuery({
  users: {},
})`}
      />
    </Section>
  </Container>
)

export default App
