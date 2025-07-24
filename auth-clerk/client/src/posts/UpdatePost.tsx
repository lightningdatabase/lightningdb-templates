import React from "react"
import { useMutation } from "../../lightningdb"
import Form from "../form/Form"
import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material"
import CodeBlock from "../code/CodeBlock"

type Values = {
  id: number
  title: string
  content: string
  published: boolean
}

const UpdatePost: React.FC = () => {
  const [values, setValues] = React.useState<Values>({
    id: 1,
    title: "",
    content: "",
    published: false,
  })

  const [updatePost, { isLoading, error }] = useMutation({
    posts: {
      update: {
        where: { id: values.id },
        data: values,
      },
    },
  })

  const handleSubmit = () => {
    updatePost().then(() => {
      setValues({ id: 1, title: "", content: "", published: false })
      console.log("updated")
    })
  }

  return (
    <Box sx={{ p: 3 }}>
      <Form onSubmit={handleSubmit}>
        {error && <Alert severity="error">{error.message}</Alert>}
        <TextField
          required
          label="Post ID"
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
          label="Title"
          type="text"
          name="title"
          value={values.title}
          onChange={event =>
            setValues({ ...values, title: event.target.value })
          }
          fullWidth
          margin="normal"
          disabled={isLoading}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Content"
          type="text"
          name="content"
          value={values.content}
          onChange={event =>
            setValues({ ...values, content: event.target.value })
          }
          disabled={isLoading}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={values.published}
                onChange={event =>
                  setValues({ ...values, published: event.target.checked })
                }
              />
            }
            label="Published"
          />
        </FormGroup>
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
        code="const [updatePost, { isLoading, error }] = useMutation({
    posts: {
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

export default UpdatePost
