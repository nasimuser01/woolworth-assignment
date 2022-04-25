import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeReviewCard({
    image,
    name,

    id,
    isFav,
    addToFavList,
    removeFromFavList,
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <IconButton aria-label='settings'>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader='September 14, 2016'
            />
            <CardMedia component='img' height='194' image={image} alt={name} />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon
                        onClick={() => {
                            isFav ? removeFromFavList(id) : addToFavList(id);
                        }}
                        color={isFav ? 'error' : ''}
                    />
                </IconButton>
            </CardActions>
        </Card>
    );
}
