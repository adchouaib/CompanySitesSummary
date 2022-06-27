import React from "react";
import styles from "./Card.module.css";

function Card({ avancementGlobal, companies, evolution, retard, motif, id }) {

const companiesDisplay = companies.map(company => {
    return (<p key={companies.indexOf(company)}>
        - <span>{company.name}</span>{" = avancement : "+company.avancement+"% | budget : "+company.budget+"$"}
    </p>);
})

  return (
    <div key={id}>
      <div className={styles.dataTitle}>
        <span className={styles.bold}>
          - Avancement de la zone :{" "}
          <span className={styles.highlight}>{avancementGlobal}%</span>
        </span>
      </div>

      <div className={styles.dataTitle}>
        <span className={styles.bold}>
          - Evolution budget de la zone :{" "}
          <span className={styles.highlight}>{evolution}$</span>
        </span>
      </div>

      <div className={styles.dataTitle}>
        <span className={styles.bold}>
          - Retard de la zone :{" "}
          <span className={styles.highlight2}>{retard} jours</span>
        </span>
      </div>

      <div className={styles.dataTitle}>
        <span className={styles.bold}>
          - Motif de retard :{" "}
          <span className={styles.highlight4}>{motif}</span>
        </span>
      </div>

      <div className={styles.dataTitle}>
      <span className={styles.bold}> - Les entreprises opérantes :</span> 
      <div className={styles.details}>{companiesDisplay}</div>
      
      </div>
    </div>
  );
}

export default Card;
