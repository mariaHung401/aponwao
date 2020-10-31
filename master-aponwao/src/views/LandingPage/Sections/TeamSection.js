import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import image1 from "assets/img/colegio/grupo.jpg";
import image2 from "assets/img/colegio/caricatura.png";
import image3 from "assets/img/colegio/familia.png";

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
      <h3 className={classes.title}>Valores Instituciónales</h3>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={image1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Singularidad
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Considera que cada ser es único e irrepetible. Requiere el estimulo permanente de la capacidad creativa del escolar.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={image2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Autonomía  
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Hace posible la participación de los alumnos no solo en la realización, sino también en la organización, de tal forma que los escolares puedan ejercer su libertad de aceptación, elección e iniciativa.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={image3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Apertura
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Se manifiesta en la disposición receptiva y capacidad expresiva en el inicio a la realidad natural y a la trascendencia para fundamentar el trabajo escolar desde el ámbito social y familiar. 
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
