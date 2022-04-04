import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Post() {
  return (
    <>
        <Card sx={{mb: 5}}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    sx={{ height: {xs: 220, sm: 300, md: 340}}}
                    image="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?cs=srgb&dl=pexels-pixabay-357573.jpg&fm=jpg"
                    alt="pancake"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pancake
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learm More</Button>
            </CardActions>
        </Card>
        <Card sx={{mb: 5}}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    sx={{ height: {xs: 220, sm: 300, md: 340}}}
                    image="https://www.pexels.com/photo/4282919/download/?search_query=&tracking_id=gzeusg9a5m6?search_query=&tracking_id=gzeusg9a5m6?search_query=&tracking_id=gzeusg9a5m6"
                    alt="Sophie Mosque"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Sophie Mosque
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learm More</Button>
            </CardActions>
        </Card>
        <Card sx={{mb: 5}}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    sx={{ height: {xs: 220, sm: 300, md: 340}}}
                    image="https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=248&fit=crop&auto=format&dpr=2"
                    alt="White Room"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    White Room
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learm More</Button>
            </CardActions>
        </Card>
        <Card sx={{mb: 5}}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    sx={{ height: {xs: 220, sm: 300, md: 340}}}
                    image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2"
                    alt="Sophie Mosque"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Coffe Break
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet dolorem ducimus veritatis nisi, ab eaque ullam 
                        numquam cumque nesciunt in totam quae aperiam beatae, adipisci 
                        veniam a voluptate placeat praesentium!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learm More</Button>
            </CardActions>
        </Card>
    </>
  );
}
