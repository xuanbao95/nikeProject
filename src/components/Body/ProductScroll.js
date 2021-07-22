import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { forwardRef } from 'react';

const useStyles = makeStyles((theme) => ({
    titile: {
        fontSize: 24,
        marginBottom: 32,
    },
    container: {
        padding: 0,
        whiteSpace: "nowrap",
        overflowX: "hidden",
        cursor: "pointer",
        "&:hover": {
            overflowX: "scroll",
        },
        "&::-webkit-scrollbar": {
            backgroundColor: "#f5f5f5",
            height: 8,
        },
        "&::-webkit-scrollbar-track": {
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            borderRadius: 10,
            backgroundColor: "#f5f5f5",
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            backgroundColor: "#757575",
        },
    },
    Product: {
        width: 390,
        listStyle: "none",
        display: "inline-block",
        marginRight: 20,
        marginBottom: 40,
    },
    ProductImage: {
        "&:hover": {
            opacity: 0.7,
        },
        width: "100%",
        transition: "opacity 1s",
    },
    ProductDetailContainer: {
        fontSize: 16,
        display: "flex",
        marginTop: 12,
        lineHeight: 1.5,
        whiteSpace: "normal",
    },
    ProductDetail: {
        flex: "0 0 300px",
    },
    Price: {
        flex: "1 1 auto",
    },
    ProductType: {
        color: "#757575",
    },
}));
export default function ProductScroll() {
    const classes = useStyles();
    const history = useHistory();
    const data = useSelector((state) => state.productReducers.data);
    console.log(data);
    const isLoading = useSelector((state) => state.productReducers.isLoading)
    const listProduct = data.slice(0, 5).map((item) => (

        <li className={classes.Product}>
            <img
                className={classes.ProductImage}
                src={item.img}
                alt=""
                onClick={() => {
                    history.push(`/detailProduct/${item._id}`);
                }}
            />
            <div className={classes.ProductDetailContainer}>
                <div className={classes.ProductDetail}>
                    <div className={classes.ProductName}>{item.name}</div>
                    <div className={classes.ProductType}>{item.message}</div>
                </div>
            </div>
            <div className={classes.Price}>{item.price.toLocaleString()} đ</div>
        </li>
    ))
    var listScrollLazyLoad = [];
    for (let i = 0; i < 9; i++) {
        listScrollLazyLoad.push(
            <li className={classes.Product}>
                <Skeleton width="100%">
                    <img
                        className={classes.ProductImage}
                        src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b0cccd97-5dc7-4dba-b720-ab7863109ebf/exploration-series-basketball-t-shirt-8dkWTQ.jpg"
                    />
                </Skeleton>
                <div className={classes.ProductDetailContainer}>
                    <div className={classes.ProductDetail}>
                        <Skeleton width="70%">
                            <div className={classes.ProductName}>Product Name</div>
                        </Skeleton>
                        <Skeleton width="70%">
                            <div className={classes.ProductType}>Product Type</div>
                        </Skeleton>
                    </div>
                    <Skeleton>
                        <div className={classes.Price}>2.000.000 đ</div>
                    </Skeleton>
                </div>
            </li>
        );
    }
    return (
        <div>
            <div className={classes.titile}>Clean Looks, Sustainable Materials</div>
            {isLoading ? (
                <ul className={classes.container}>{listScrollLazyLoad}</ul>
            ) : (
                <ul className={classes.container}>{listProduct}</ul>
            )}
            {/* <ul className={classes.container}>{listProduct}</ul> */}
        </div>
    );

}
