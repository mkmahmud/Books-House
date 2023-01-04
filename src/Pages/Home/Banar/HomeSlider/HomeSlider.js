import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'LBooks tell our myriad stories ',
        subText:'LBooks tell our myriad stories and gems of stories within those stories. Let Bookhouse help you tell yours. A conversation is a good way to start a great story.',
        imgPath:
            'https://c4.wallpaperflare.com/wallpaper/148/392/948/1920x1080-px-books-interior-design-interiors-knowledge-library-shelves-anime-pokemon-hd-art-wallpaper-preview.jpg',
    },
    {
        label: 'Bookhouse Brewing is a small brewery',
        subText:`Bookhouse Brewing is a small brewery and taproom in Cleveland's Ohio City neighborhood, offering innovative and approachable beers and ciders in a cozy,`,
        imgPath:
            'https://wallpaper.dog/large/20513274.jpg',
    },
    {
        label: 'Located in Downtown Mableton',
        subText:'Located in Downtown Mableton, The Book House is a South Cobb tradition. We pride ourselves in meeting the diverse nee.',
        imgPath:
            'https://wallpapers.com/images/hd/stacked-vintage-books-3oq4j3luz5b0ablo.jpg',
    },
    {
        label: 'The Book House carries books of all kinds',
        subText:'The Book House carries books of all kinds, New, Used, Rare, and Out Of Print. On this page you can browse and order new books. You can also try searching',
        imgPath:
            'https://i.ibb.co/dfYfTVn/330109-removebg-preview.png',
    },
];

function HomeSlider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative', overflow: 'hidden' }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: '600px',
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />

                        ) : null}
                        <Box sx={{ position: 'absolute', top: '0', paddingTop: '100px', color: 'white', height: '100%', width: '100%', background: '#15005075' }}>
                            <Typography variant="h1" component="h2" sx={{ fontSize: '60px', fontWeight: 'bold' }} >{step?.label}</Typography>
                            <Typography variant="p" component="p" sx={{ fontSize: '20px', fontWeight: 'bold', padding: '10px 50px' }} >{step?.subText}</Typography>
                            <Button sx={{ minWidth: 100, margin: '50px 0px', fontSize: '25px' }} variant='contained'><Link to='/books'>Get Now</Link> </Button>
                        </Box>

                    </div>
                ))}
            </AutoPlaySwipeableViews>


        </Box>
    );
}

export default HomeSlider;