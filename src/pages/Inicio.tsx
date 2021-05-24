import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
import { useState, useEffect } from "react";
import "./Inicio.css";
import FoodCards from "../components/FoodCards";
import foodData from "../hooks/foodData";

const Inicio: React.FC = () => {
  /* Constantes para los cálculos */
  const [calculatedCalories, setCalculatedCalories] = useState<number>(0);
  const [consumedFood, setConsumedFood] = useState<number>(0);

  /* Aumenta las calorias consumidas con base al alimento que se agrega */
  const addCalories = (newCalories: number) => {
    setCalculatedCalories(calculatedCalories + newCalories);
    setConsumedFood(consumedFood + 1);
  };

  /* Constantes para la busqueda de alimentos */
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

  /* Funcion para realizar la busqueda */
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
                  {calculatedCalories && (
                    <IonLabel>{calculatedCalories}</IonLabel>
                  )}
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
        {filteredSearch.map((search) => (
          <FoodCards
            onAddCalories={(calories: number) => addCalories(calories)}
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

export default Inicio;
