import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Product = ({ list } ) => {
  return (
    <div>
        <Card sx={{ maxWidth: 300 }}  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="90"
                        image={list.imageUrl}
                        alt={list.name}
                      />
                      <CardContent key={list.id}>
                        <Typography gutterBottom variant="h5" component="div">
                          {list.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {list.percentage}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {list.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>


    </div>
  )
}

export default Product