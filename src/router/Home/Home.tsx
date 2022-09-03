import React from "react";
import { Container, Grid } from "@mui/material";

const Home = () => (
  <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexWrap="wrap"
      sx={{ height: "100%", pt: 20 }}
    >
      <h1>A Nested List Editor</h1>
    </Grid>
  </Container>
);

export default Home;
