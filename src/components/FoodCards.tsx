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

const FoodCards: React.FC<{
  onAddCalories: (calories: number) => void;
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
            <IonCol className="ion-text-right">
              <IonButton onClick={() => props.onAddCalories(props.calories)}>
                Agregar Alimento
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default FoodCards;
