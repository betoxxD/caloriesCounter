import {
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Alimentos.css";

import FoodCardsWhitoutButton from "../components/FoodCardsWhitoutButton";
import { useState } from "react";

const Alimentos: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Alimentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          animated
        ></IonSearchbar>
        <FoodCardsWhitoutButton />
      </IonContent>
    </IonPage>
  );
};

export default Alimentos;
