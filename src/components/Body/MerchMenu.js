import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Hidden } from "@material-ui/core"
import { useState } from "react"
const useStyles = makeStyles((theme) => ({
    MerchMenu: {
        width: 880,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    menuTitle: {
        display: "block",
        marginBottom: 24,
        fontSize: 16,
        color: "black",
        textDecoration: "none",
        "&:hover": {
            color: "black",
        },
    },
    menuItem: {
        display: "block",
        color: "#757575",
        marginBottom: 12,
        fontSize: 16,
        textDecoration: "none",
        lineHeight: 1.428571,
        "&:hover": {
            color: "black",
        },
    },
    MerchMenuMobile: {
        marginLeft: 24,
        marginBottom: 20,
    },
}));
export default function MerchMenu(props) {
    const classes = useStyles();
    const [merchMenu, setMerchMenu] = useState(false);
    const [merchMobile, setMerchMobile] = useState(0);

    return (
        <div>
            <Hidden xsDown>
                <Grid container spacing={3} className={classes.merchMenu} onMouseEnter={() => setMerchMenu(true)} onMouseLeave={() => setMerchMenu(false)}>
                    {props.merchMenu.map((item) => {
                        return (
                            <Grid item sm={3}>
                                <a href="#a" className={classes.menuTitle}>{item.heading}</a>
                                <a href="#a" className={classes.menuItem}>{item.title1}</a>
                                <a href="#a" className={classes.menuItem}>{item.title2}</a>
                                <a href="#a" className={classes.menuItem}>{item.title3}</a>
                                <a href="#a" className={classes.menuItem}>{item.title4}</a>
                                {merchMenu && (
                                    <div>
                                        <a href="#a" className={classes.menuItem}>{item.title5}</a>
                                        <a href="#a" className={classes.menuItem}>{item.title6}</a>
                                        <a href="#a" className={classes.menuItem}>{item.title7}</a>
                                        <a href="#a" className={classes.menuItem}>{item.title8}</a>
                                        <a href="#a" className={classes.menuItem}>{item.title9}</a>
                                        <a href="#a" className={classes.menuItem}>{item.title10}</a>
                                        <a href="#a" className={classes.menuItem}>{item.title11}</a>
                                        <a href="#a" className={classes.menuItem}>{item.title12}</a>
                                    </div>
                                )}
                            </Grid>
                        )
                    })}
                </Grid>
            </Hidden>
            <Hidden smUp>
                {props.merchMenu.map((item, index) => {

                    return (
                        <div key={index}>
                            <a href="#a" className={classes.menuItem} onClick={() => setMerchMobile(index + 1)}>
                                {item.heading}
                            </a>
                            {merchMobile === index + 1 && (
                                <div>
                                    <a href="#a" className={classes.menuItem}>{item.title1}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title2}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title3}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title4}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title5}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title6}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title7}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title8}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title9}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title10}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title11}</a>
                                    <a href="#a" className={classes.menuItem}>{item.title12}</a>
                                </div>
                            )}
                        </div>
                    )
                })}
            </Hidden>
        </div>
    )
}
