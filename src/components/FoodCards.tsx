import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonLabel,
  IonButton,
  IonCol,
} from "@ionic/react";
import React from "react";

import foodData from "../hooks/foodData";

const FoodCards: React.FC<{ onAddCalories: (calories: number) => void; }> = (
  props
) => {
  return (
    <IonGrid>
      {foodData.map((foodDetail, index) => {
        return (
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>{foodDetail.typeFood}</IonCardSubtitle>
              <IonCardTitle>{foodDetail.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {foodDetail.description}
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>Calorías: {foodDetail.calories}</IonLabel>
                  </IonCol>
                  <IonCol className="ion-text-right">
                    <IonButton onClick={() => props.onAddCalories(foodDetail.calories) }>Agregar Alimento</IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        );
      })}
    </IonGrid>
  );
};

export default FoodCards;
