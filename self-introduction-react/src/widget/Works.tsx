import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  List,
  Grid,
  Link,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'

export function Works(): JSX.Element {
  return (
    <List>
      <Typography variant="h4" component="h2" gutterBottom>
        Works
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Full time</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column" justifyContent={'center'} spacing={1}>
            <Typography variant="subtitle1">Studyplus</Typography>
            <Typography>2020.06 ~ now : Flutter application</Typography>
            <Grid item>
              <Link href="https://play.google.com/store/apps/details?id=com.studyplus.porto">
                Porto(Android)
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://apps.apple.com/jp/app/%E3%83%9D%E3%83%AB%E3%83%88-%E5%8F%82%E8%80%83%E6%9B%B8%E3%81%8C%E8%AA%AD%E3%81%BF%E6%94%BE%E9%A1%8C/id1477467323">
                Porto(iOS)
              </Link>
            </Grid>
            <Typography>2019.11 ~ now : iOS application</Typography>
            <Grid item>
              <Link href="https://apps.apple.com/jp/app/%E5%8B%89%E5%BC%B7%E3%82%92%E7%BF%92%E6%85%A3%E5%8C%96-studyplus-%E3%82%B9%E3%82%BF%E3%83%87%E3%82%A3%E3%83%97%E3%83%A9%E3%82%B9/id505410049">
                Studyplus(iOS)
              </Link>
            </Grid>
            <Typography>2018.09 ~ now : Android application</Typography>
            <Grid item>
              <Link href="https://play.google.com/store/apps/details?id=jp.studyplus.android.app">
                Studyplus(Android)
              </Link>
            </Grid>
            <Typography variant="subtitle1">Navitime Japan</Typography>
            <Grid item>
              <Typography>2017.04 ~ 2018.08 : Android application</Typography>
            </Grid>
            <Typography variant="subtitle1">SES</Typography>
            <Grid item>
              <Typography>2015.04 ~ 2016.10 : Android application</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Second job</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column" justifyContent={'center'} spacing={1}>
            <Grid item>
              <Typography>2019.06~2019.07 : Android application</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </List>
  )
}
