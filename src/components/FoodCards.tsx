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
  useIonAlert,
} from "@ionic/react";

const FoodCards: React.FC<{
  onAddCalories: (calories: number) => void;
  typeFood: string;
  name: string;
  description: string;
  calories: number;
}> = (props) => {
  const [present] = useIonAlert();

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
              <IonButton
                onClick={() =>
                  present({
                    cssClass: 'my-css',
                    header: '¿Deseas agregar este alimento?',
                    message: 'Estás a punto de agregar "' + props.name + '" con ' + props.calories + ' calorías.',
                    buttons: [
                      'Cancelar',
                      { text: 'Agregar', handler: () => props.onAddCalories(props.calories) },
                    ],
                    onDidDismiss: (e) => console.log('did dismiss'),
                  })
                }
              >
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
