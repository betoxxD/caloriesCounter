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

const FoodCardsWhitoutButton: React.FC<{
  typeFood: string;
  name: string;
  description: string;
  calories: number;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
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

export default FoodCardsWhitoutButton;
