import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Warning from "components/Typography/Warning.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>
              <strong>Educación Personalizada</strong>
            </h3>
            <Warning>
              <strong>Innovación </strong>
            </Warning>
            <h4>
              Salto Aponwao en la nueva era del aprendizaje, en vista de la necesidad de transformar la educación. Ha apostado a romper el esquema educativo tradicional, para darle paso a currículos académicos que tienen como prioridad el desarrollo del carácter humano del socio aprendizaje y el buen uso de las herramientas digitales en pro de su formación.
            </h4>
            <Warning>
              <strong>Personalizada</strong>
            </Warning>
            <h4>
              Es el modelo educativo de nuestra institución. A través de ella pretendemos ofrecer una atención personal y singular a los socios de aprendizaje ( Estudiantes) en todo el proceso educativo. En el colegio se les facilita el dominio de las operaciones básicas del pensar y del actuar la capacidad de observación, la lectura, el cálculo, el análisis y la síntesis, la reflexión y el razonamiento, la creatividad y la expresión favoreciendo el desarrollo intelectual y la madurez.            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
