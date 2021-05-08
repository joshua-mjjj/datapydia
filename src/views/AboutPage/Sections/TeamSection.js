import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";

import styles from "./assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "./assets/img/faces/avatar.jpg";
import team2 from "./assets/img/faces/christian.jpg";
import team3 from "./assets/img/faces/kendall.jpg";

import Queue_DS from './../views/Queue.js';

// import Layout from "../components/Layout";
import Stack_DS from './../views/Stack.js';
import PriorityQueue from './../views/PriorityQueue';
import List from './../views/List.js';
import Array_ from './../views/Array.js';
import Alogs from './../views/Searching_algos.js'
import Searching_Binary from './../views/Searching_Binary.js'
import Layout from "./../views/Layout";
import Sorting from './../views/Sorting_algos.js'
import Tree_impl from './../views/Tree_impl.js'
import Fibonnacci from './../views/Fibonnacci.js'
import Factorial from './../views/Factorial.js'
import Tower_Of_Hanoi from './../views/Tower_Of_Hanoi.js'

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Visualizations</h2>
      <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={4}>

            <Card plain>
              <h4 className={classes.cardTitle}>
                 Array
                <br />
              </h4>

              <CardBody>
                 <Array_ />
              </CardBody>     
            </Card>
           </GridItem>


          <GridItem xs={12} sm={12} md={4}>

            <Card plain>
              <h4 className={classes.cardTitle}>
                 Stack
                <br />
              </h4>

              <CardBody>
                 <Stack_DS/>
              </CardBody>
            </Card>

          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Queue
                <br />
              </h4>
              <CardBody>
                <Queue_DS />
              </CardBody>
            </Card>
          </GridItem>

           <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Priority Queue
                <br />
              </h4>
              <CardBody>
                <PriorityQueue />
              </CardBody>
            </Card>
          </GridItem>

           <GridItem style={{ 'marginLeft' : '150px'}} xs={12} sm={12} md={6}>
            <Card plain>

              <h4 className={classes.cardTitl}>
                 Linked List
                <br />
              </h4>

              <CardBody>
                
              <CardBody>
                 <Layout />
              </CardBody>

              </CardBody>
     
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                List
                <br />
              </h4>
              <CardBody>
                
              <CardBody>
                 <List />
              </CardBody>

              </CardBody>
            </Card>
          </GridItem>


          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                 Linear search
                <br />
              </h4>

              <CardBody>
                <Alogs />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>

           
              <h4 className={classes.cardTitle}>
                 Binary search
                <br />
              </h4>

              <CardBody>
                
              <CardBody>
                 <Searching_Binary />
              </CardBody>

              </CardBody>
        
            </Card>
          </GridItem>


           <GridItem xs={12} sm={12} md={6}>
            <Card plain>

              <h4 style={{ 'marginRight' : '70px'}} className={classes.cardTitle}>
                 Trees
                <br />
              </h4>

              <CardBody>
                
              <CardBody>
                 <Tree_impl />
              </CardBody>
              </CardBody>
          
            </Card>
          </GridItem>

          <GridItem  xs={12} sm={12} md={6}>
            <Card plain>

              <h4 style={{ 'marginRight' : '70px'}} className={classes.cardTitle}>
                 Sorting
                <br />
              </h4>

              <CardBody>
                
              <CardBody>
                 <Sorting />
              </CardBody>

              </CardBody>

            </Card>
          </GridItem>

           <GridItem xs={12} sm={12} md={6}>
            <Card plain>

              <h4 style={{ 'marginRight' : '70px'}}  className={classes.cardTitle}>
                 Factorial notation
                <br />
              </h4>

              <CardBody>
                
              <CardBody>
                 <Factorial />
              </CardBody>

              </CardBody>
             
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card plain>

              
              <h4 style={{ 'marginRight' : '70px'}} className={classes.cardTitle}>
                 Fibonnacci Sequence
                <br />
              </h4>

              <CardBody>
                
              <CardBody>
                 <Fibonnacci />
              </CardBody>

              </CardBody>
             
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card plain>

          
              <h4 className={classes.cardTitle}>
                 Tower of Hanoi
                <br />
              </h4>

              <CardBody>
                <Tower_Of_Hanoi />
              <CardBody>
                 
              </CardBody>

              </CardBody>
          
            </Card>
          </GridItem>


        </GridContainer>
      </div>
    </div>
  );
}
