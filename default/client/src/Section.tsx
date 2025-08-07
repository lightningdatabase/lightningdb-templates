import type { ReactNode } from "react"
import { Box, Paper, Typography } from "@mui/material"

type SectionProps = {
  title: string
  children?: ReactNode
  defaultExpanded?: boolean
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <Paper sx={{ mt: 2, border: 1, borderColor: "divider" }} elevation={0}>
    <Box sx={{ p: 2 }}>
      <Typography component="span">{title}</Typography>
    </Box>
    <Box sx={{ borderTop: "1px solid rgba(0, 0, 0, .125)" }}>{children}</Box>
  </Paper>
)

export default Section
