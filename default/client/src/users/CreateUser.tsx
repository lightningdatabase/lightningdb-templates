import React from "react"
import Form from "../form/Form"
import { useMutation } from "../../lightningdb"
import { Alert, Box, Button, CircularProgress, TextField } from "@mui/material"
import CodeBlock from "../code/CodeBlock"

type Values = {
  name: string
  email: string
}

const CreateUser: React.FC = () => {
  const [values, setValues] = React.useState<Values>({
    name: "",
    email: "",
  })

  const [createUser, { isLoading, error }] = useMutation({
    users: {
      create: {
        data: values,
      },
    },
  })

  const handleSubmit = () => {
    createUser().then(() => {
      setValues({ name: "", email: "" })
      console.log("created")
    })
  }

  return (
    <Box sx={{ p: 3 }}>
      <Form onSubmit={handleSubmit}>
        {isLoading && <CircularProgress />}
        {error && <Alert severity="error">{error.message}</Alert>}
        <TextField
          required
          type="text"
          fullWidth
          margin="normal"
          name="name"
          label="Name"
          value={values.name}
          onChange={event => setValues({ ...values, name: event.target.value })}
          disabled={isLoading}
        />
        <TextField
          required
          type="email"
          fullWidth
          margin="normal"
          name="email"
          label="Email"
          value={values.email}
          onChange={event =>
            setValues({ ...values, email: event.target.value })
          }
          disabled={isLoading}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          loading={isLoading}
        >
          Save
        </Button>
      </Form>
      <CodeBlock
        sx={{ mt: 3 }}
        code="const [createUser, { isLoading, error }] = useMutation({
    users: {
      create: {
        data: values,
      },
    },
  })"
      />
    </Box>
  )
}

export default CreateUser
