import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { makeStyles } from '@material-ui/core/styles'
import { CardActionArea, CardMedia, Card, Container, Grid } from '@material-ui/core'
import { maxWidth } from '@material-ui/system'
const useStyles = makeStyles((theme) => ({
    image: {
        maxHeight: "100%",
        maxWidth: "100%",
    }
}))
const setting = {
    dots: false,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
}
export default function Carousel(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl">
            <Grid item xs={12}>
                <Slider {...setting}>
                    {props.carouselImg.map(item => {
                        return (
                            <React.Fragment>
                                <Card className={classes.image}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            image={item}
                                            title="Contemplative Reptile "

                                        >


                                        </CardMedia>
                                    </CardActionArea>
                                </Card>
                            </React.Fragment>
                        )
                    })}
                </Slider>
            </Grid>
        </Container>
    )
}
