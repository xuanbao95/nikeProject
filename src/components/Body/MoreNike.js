import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"



const useStyles = makeStyles(theme => ({
    titile: {
        fontSize: 24,
        marginBottom: 32
    },
    contentLink: {
        color: "black",
        textDecoration: "none"
    },
    moreNikeContainer: {
        height: 540,
        display: "flex",
        alignItems: "flex-end",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
    },
    info: {
        padding: 40
    },
    trendingName: {
        color: "white",
        fontSize: 25,
        fontWeight: 400,
        marginBottom: 30
    },
    shopLink: {
        color: "black",
        textDecoration: "none",
        margin: "0 8px 8px 0",
        padding: "8px 28px",
        backgroundColor: "white",
        borderRadius: 20,
        fontSize: 16,
        "&:hover": {
            opacity: 0.8,
        },
    }
}));
export default function MoreNike(props) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.titile}>
                {props.titleMoreNike}
            </div>
            <Grid container spacing={3}>
                {props.dataMoreNike.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={4}>
                            <a href="#a" className={classes.contentLink}>
                                <div className={classes.moreNikeContainer} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className={classes.info}>
                                        <div className={classes.moreNikeName}>

                                        </div>
                                        <div>
                                            <a className={classes.shopLink} href="#a">
                                                {item.titleButton}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
