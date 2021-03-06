import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Button from "./components/CustomButtons/Button.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";
import Parallax from "./components/Parallax/Parallax.js";

import styles from "./assets_/jss/material-kit-react/views/landingPage.js";
import Image from "./landing-bg.jpg"
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="info"
        routes={dashboardRoutes}
        brand="DataPydia"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={Image}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>DataPydia.</h1>
              <h4  style={{ 'color': 'white', 'fontSize' : '20px'}}>
               DataPydia is a visualistic implementation of the various data structures in the field of computer science.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
