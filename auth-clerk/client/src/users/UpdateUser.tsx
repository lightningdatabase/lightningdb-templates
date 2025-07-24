import React from "react"
import { useMutation } from "../../lightningdb"
import Form from "../form/Form"
import { Alert, Box, Button, TextField } from "@mui/material"
import CodeBlock from "../code/CodeBlock"

type Values = {
  id: number
  name: string
  email: string
}

const UpdateUser: React.FC = () => {
  const [values, setValues] = React.useState<Values>({
    id: 1,
    name: "",
    email: "",
  })

  const [updateUser, { isLoading, error }] = useMutation({
    users: {
      update: {
        where: { id: values.id },
        data: values,
      },
    },
  })

  const handleSubmit = () => {
    updateUser().then(() => {
      setValues({ id: 1, name: "", email: "" })
      console.log("updated")
    })
  }

  return (
    <Box sx={{ p: 3 }}>
      <Form onSubmit={handleSubmit}>
        {error && <Alert severity="error">{error.message}</Alert>}
        <TextField
          required
          label="User ID"
          type="number"
          name="id"
          value={values.id}
          onChange={event =>
            setValues({ ...values, id: parseInt(event.target.value) })
          }
          fullWidth
          margin="normal"
          disabled={isLoading}
        />
        <TextField
          required
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={event => setValues({ ...values, name: event.target.value })}
          fullWidth
          margin="normal"
          disabled={isLoading}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={event =>
            setValues({ ...values, email: event.target.value })
          }
          disabled={isLoading}
        />
        <Button
          type="submit"
          loading={isLoading}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Form>
      <CodeBlock
        sx={{ mt: 3 }}
        code="const [updateUser, { isLoading, error }] = useMutation({
    users: {
      update: {
        where: { id: values.id },
        data: values,
      },
    },
  })"
      />
    </Box>
  )
}

export default UpdateUser
