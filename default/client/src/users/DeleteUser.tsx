import React, { useState } from "react"
import { useMutation } from "../../lightningdb"
import { Alert, Box, Button, TextField } from "@mui/material"
import Form from "../form/Form"
import CodeBlock from "../code/CodeBlock"

const DeleteUser: React.FC = () => {
  const [userId, setUserId] = useState<number>()

  const [deleteUser, { isLoading, error }] = useMutation({
    users: {
      delete: {
        where: {
          id: userId,
        },
      },
    },
  })

  const handleSubmit = () => {
    deleteUser().then(() => {
      setUserId(undefined)
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
          fullWidth
          margin="normal"
          value={userId ?? ""}
          onChange={e => setUserId(Number(e.target.value))}
          disabled={isLoading}
        />
        <Button
          type="submit"
          loading={isLoading}
          variant="contained"
          sx={{ mt: 2 }}
        >
          Delete
        </Button>
      </Form>
      <CodeBlock
        sx={{ mt: 3 }}
        code="const [deleteUser, { isLoading }] = useMutation({
    users: {
      delete: {
        where: {
          id: userId,
        },
      },
    },
  })"
      />
    </Box>
  )
}

export default DeleteUser
