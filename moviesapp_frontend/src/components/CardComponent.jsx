/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ movie }) {
  return (
    <Box sx={{ minWidth: 275, margin: 1.5 }}>
      <Card variant="outlined" className="movie" sx={{width: 275, height: 330}}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {movie?.year}
          </Typography>
          <Typography variant="h5" component="div" sx={{overflow: "hidden"}}>
            {movie?.title}
          </Typography>
          <Typography sx={{ mb: 2.5, mt: 2 }} color="text.secondary">
            {movie?.genres}
          </Typography>
          <Typography variant="body2">
            <b>Rating:</b> {movie?.Rating}/10
            <br />
            <b>RottenTomato:</b> {movie?.RottenTomato}/100
          </Typography>
        </CardContent>
        <CardActions sx={{ marginLeft: 1 }}>
          <Button size="small" variant="outlined">
            Edit
          </Button>
          <Button size="small" variant="outlined">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
