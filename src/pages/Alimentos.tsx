import {
  IonButton,
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
import "./Alimentos.css";

import FoodCardsWhitoutButton from "../components/FoodCardsWhitoutButton";
import { useEffect, useState } from "react";
import { Browser } from "@capacitor/browser";

import foodData from "../hooks/foodData";

const Alimentos: React.FC = () => {
  // Constantes Define constantes y su valor default
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

  // Función que se ejecuta cuando se ingresa texto en el buscador, se encarga de filtrar los alimentos que coincidan
  // Con lo que ingresó el usuario y los colocas en la variable filteredSearch definida anteriormente.
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
        { /* Muestra la barra de búsqueda, obtiene el dato y cada que cambie ejecuta la función de filtración
             definida anteriormente.
         */ }
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          animated
        ></IonSearchbar>
        <IonGrid>
          <IonButton
            expand="block"
            onClick={async () => {
              /* Utiliza el capacitor Browser para abrir un hipervínculo */
              await Browser.open({ url: "http://capacitorjs.jp/" });
            }}
          >
            Más información
          </IonButton>
        </IonGrid>
        {
          /* recorre la variable que guarda los elementos filtrados y los muestra llamando el componente que definimos 
              llamado FoodCardsWihtoutButton.
          */
        filteredSearch.map((search) => (
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

// Exporta Alimento
export default Alimentos;
