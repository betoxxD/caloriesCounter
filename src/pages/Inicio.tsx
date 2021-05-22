import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState, useRef } from "react";
import "./Inicio.css";
import FoodCards from "../components/FoodCards";

const Inicio: React.FC = () => {
  const [calculatedCalories, setCalculatedCalories] = useState<number>(0);
  const [consumedFood, setConsumedFood] = useState<number>(0);

  const [searchText, setSearchText] = useState("");

  const addCalories = (newCalories: number) => {
    setCalculatedCalories(calculatedCalories + newCalories);
    setConsumedFood(consumedFood + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Hoy</IonCardSubtitle>
            <IonCardTitle>Resumen general</IonCardTitle>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonLabel>Calorías consumidas: </IonLabel>
                  {calculatedCalories && <IonLabel>{calculatedCalories}</IonLabel>}
                </IonRow>
                <IonRow>
                  <IonLabel>Alimentos consumidos: </IonLabel>
                  {consumedFood && <IonLabel>{consumedFood}</IonLabel>}
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          animated
        ></IonSearchbar>
        <FoodCards onAddCalories = { (calories: number) => addCalories(calories) } />
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
