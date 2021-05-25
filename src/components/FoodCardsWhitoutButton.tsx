// Importa los componentes react que define Ionic para poder ser usados
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonLabel,
  IonCol,
} from "@ionic/react";
import React from "react";

// Define el componente
const FoodCardsWhitoutButton: React.FC<{
  // Variables que recibe como parámetro
  typeFood: string;
  name: string;
  description: string;
  calories: number;
}> = (props) => {
  // Retorna la estructura del componente
  return (
    <IonCard>
      <IonCardHeader>
        { /* lo que va entre llaves es código TypeScript, en este caso, imprime el valor de las variables almacenadas 
             en props.
           */ }
        <IonCardSubtitle>{props.typeFood}</IonCardSubtitle>
        <IonCardTitle>{props.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {props.description}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel>Calorías: {props.calories}</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

// Exporta el componente que se definió anteriormente
export default FoodCardsWhitoutButton;
