import type { ReactNode } from "react"
import { styled, Typography } from "@mui/material"
import type { AccordionProps } from "@mui/material/Accordion"
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import { ExpandMore } from "@mui/icons-material"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&::before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMore sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .01)",
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

type SectionProps = {
  title: string
  children?: ReactNode
  defaultExpanded?: boolean
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => (
  <Accordion defaultExpanded={defaultExpanded} sx={{ mt: 2 }}>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
)

export default Section
