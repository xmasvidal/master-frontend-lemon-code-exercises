import React from "react";
import { Link, useParams } from "react-router-dom";
import { SelectedItemContext } from "./app";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const DetailPage: React.FC = () => {
  
  const {id} = useParams();
  const {selectedItem, setSelectedItem} = React.useContext(SelectedItemContext);

  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          sx={{ height: 345 }}
          image={selectedItem.imageUrl}
          title={selectedItem.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {selectedItem.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {selectedItem.description}
          </Typography>
        </CardContent>
      </Card>
      <Link to="/list">Go Back</Link>
    </>
  );
};
