import { Box, Typography } from "@mui/material"

const Welcome: React.FC = () => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h2" sx={{ mb: 2 }}>
      LightningDB Demo
    </Typography>
    <Typography variant="body1">
      This is a demo of the LightningDB client.
    </Typography>
    <Typography variant="body1">
      It is a simple demo that shows how to use the LightningDB client.
    </Typography>
  </Box>
)

export default Welcome
