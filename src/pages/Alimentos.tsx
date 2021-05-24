import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Alimentos.css";

import FoodCardsWhitoutButton from "../components/FoodCardsWhitoutButton";
import { useEffect, useState } from "react";

import foodData from "../hooks/foodData";

const Alimentos: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([
    {
      id: 0,
      typeFood: "",
      name: "",
      description: "",
      calories: 0,
    },
  ]);

  useEffect(() => {
    let tempSearchResult = foodData.filter((ele) =>
      ele.name.includes(searchText)
    );
    setFilteredSearch([...tempSearchResult]);
  }, [searchText]);

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
        {filteredSearch.map((search) => (
          <FoodCardsWhitoutButton
            calories={search.calories}
            description={search.description}
            name={search.name}
            typeFood={search.typeFood}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Alimentos;
