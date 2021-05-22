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
  
  class FoodCardsWhitoutButton extends React.Component {
      render () {
          return (
            <IonGrid>
              {foodData.map((foodDetail, index) => {
                return(
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
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
                );
              })}
            </IonGrid>
          );
        }
  }
  
  export default FoodCardsWhitoutButton;
  