
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import image1 from '../../../../Assetes/icon/1.webp'



const card = (
    <React.Fragment>
        <CardContent>
            <Box display='flex' justifyContent='center' alignItems='center' >
            <Avatar src={image1} style={{ height: '100px', width: '100px' }} ></Avatar>
            </Box>
            <Typography variant="h5" component="div">
            Independent sellers
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2" sx={{padding: '0px 20px'}}>
            Millions of books and other items are listed for sale on AbeBooks by trusted sellers from around the world.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" sx={{margin:'auto'}} variant='contained'>Learn More</Button>
        </CardActions>
    </React.Fragment>
);


const Feture = () => {
    return (
        <Box sx={{ minWidth: 275, margin: '20px 0px'}}>
            <Card variant="outlined" sx={{background:'#150050', color:'white', padding:'10px 0px'}}>{card} </Card>
        </Box>
    );
};

export default Feture;