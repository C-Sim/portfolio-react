import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useBasket } from "../App";

export const MovieCard = ({
  id,
  title,
  rating,
  yearOfRelease,
  imageUrl,
  genre,
  synopsis,
  price,
}) => {
  const { movies, setItems, items } = useBasket();

  const handleAddToBasket = () => {
    const selectedMovie = movies.find((movie) => movie.id === id);

    setItems([...items, selectedMovie]);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            imageUrl[0] ||
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {synopsis}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAddToBasket}
          id={id}
        >
          £{price}
        </Button>
      </CardActions>
    </Card>
  );
};
