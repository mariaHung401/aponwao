import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Objetivo</h2>
          <h5 className={classes.description}>
            El estudiante debe aprender a hacerse responsable de su desarrollo, conocer su realidad y desde ahí, animado por el amor a la versas, al conocimiento critico y a la investigación tenaz, asumir activamente la libertad para aportar a la sociedad.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={5}>
            <InfoArea
              title="Misión"
              description="En Salto Aponwao el fin de la educación es ayudar al desarrollo mas completo y armónico de los estudiantes, para que respondan a su vocación mas profunda como ser humano, en todas sus facultades: sensibilidad, inteligencia, corporalidad afectividad, sexualidad, voluntad, carácter, dimensión, ética y religiosa, contemplando el desarrollo de la integridad del individuo. "
              icon={EmojiEmotionsIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Visión"
              description=" Nuestra formación aspira a hacer un llamado permanente y esperanzador a la superación personal, conocerse mas, aceptarse a si mismo en las propias limitaciones y posibilidades y en medio de las complejidades, dar lo mejor de si."
              icon={EmojiPeopleIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
