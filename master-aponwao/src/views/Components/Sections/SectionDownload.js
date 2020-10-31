/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Contácta con Nosotros</h2>
            <strong>Dirección</strong>
            <h4><strong>0261-4175626</strong></h4>
            <strong>Dirección</strong>
            <h4>
              Urb. La Coromoto calle 163 Municipio San Fco - Edo.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h2>Siguenos!!</h2>
          </GridContainer>
          <Button
            color="google"
            href="https://www.instagram.com/saltoaponwao/"
            target="_blank"
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
            Instagram
          </Button>
        </div>
      </div>
    </div>
  );
}
