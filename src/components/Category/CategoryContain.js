import React from "react";
import classes from "../Category/CategoryContain.module.css"
import Category from "./Category";

const CategoryContain = () => {
    return (
        <div className={classes.categoryContain}>
            <Category title={"HASSLE FREE"} imgPosition={"0px 1px"} desc={"Express Delivery"} />
            <Category title={"ONLINE"} imgPosition={"-148px -162px"} desc={"Secured Payment"} />
            <Category title={"RELIABLE"} imgPosition={"-148px -332px"} desc={"Customer Support"} />
            <Category title={"HIGH QUALITY"} imgPosition={"-148px -499px"} desc={"Trusted Products"} />
        </div>
    );
}

export default CategoryContain;