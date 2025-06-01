import { Button, Grid } from '@mui/material';

export default function MaterialGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button variant="contained" fullWidth>1</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" fullWidth>2</Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" fullWidth>3</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth>4</Button>
      </Grid>
    </Grid>
  );
}
