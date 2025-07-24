import {
  Box,
  CircularProgress,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Chip,
  Stack,
  Avatar,
} from "@mui/material"
import { useQuery } from "../../lightningdb"
import CodeBlock from "../code/CodeBlock"

const UsersList: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    users: {
      orderBy: {
        id: "asc",
      },
      include: {
        posts: true,
      },
    },
  })

  if (error) return <Box>Error: {error.message}</Box>
  if (isLoading) return <CircularProgress />

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Posts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.users?.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Stack direction="row" spacing={1}>
                  {user.posts?.map(post => (
                    <Chip
                      key={post.id}
                      avatar={<Avatar>{post.id}</Avatar>}
                      label={post.title}
                      size="small"
                    />
                  ))}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ p: 3 }}>
        <CodeBlock
          code='const { data, error, isLoading } = useQuery({
    users: {
      orderBy: {
        id: "asc",
      },
      include: {
        posts: true,
      },
    },
  })'
        />
      </Box>
    </Box>
  )
}

export default UsersList
