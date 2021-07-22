import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Carousel from './Carousel';
import Trending from './Trending';
import MoreNike from './MoreNike';
import MerchMenu from './MerchMenu';
import ProductScroll from './ProductScroll';


const useStyles = makeStyles((theme) => ({
    body: {
        padding: "0 44px 50px",
        [theme.breakpoints.down('sm')]: {
            padding: "0 0 50px"
        }

    },
    bodyComponent: {
        marginTop: 84
    }
}));
export default function Body(props) {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <div className={classes.bodyComponent}>
                <Carousel
                    carouselImg={props.carouselImg}
                />
            </div>
            <div className={classes.bodyComponent}>
                <Trending
                    dataTrending={props.dataTrending}
                    titleTrending={props.titleTrending}
                />
            </div>
            <div className={classes.bodyComponent}>
                <ProductScroll

                />
            </div>
            <div className={classes.bodyComponent}>
                <MoreNike
                    titleMoreNike={props.titleMoreNike}
                    dataMoreNike={props.dataMoreNike}
                />
            </div>
            <div className={classes.bodyComponent}>
                <MerchMenu
                    merchMenu={props.merchMenu}
                />
            </div>

        </div>
    )
}
