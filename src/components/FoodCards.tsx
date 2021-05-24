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
  IonBadge,
  IonItem,
} from "@ionic/react";

import { Toast } from "@capacitor/toast";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

const FoodCards: React.FC<{
  onAddCalories: (calories: number) => void;
  typeFood: string;
  name: string;
  description: string;
  calories: number;
}> = (props) => {
  const [present] = useIonAlert();

  const showToast = async (value: string) => {
    await Toast.show({
      text: value,
    });
    await Haptics.impact({ style: ImpactStyle.Light });
  };
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
              <IonItem>
                <IonLabel>Calorías:</IonLabel>
                <IonBadge color="secondary">{props.calories}</IonBadge>
              </IonItem>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton
                onClick={() =>
                  present({
                    cssClass: "my-css",
                    header: "¿Deseas agregar este alimento?",
                    message:
                      'Estás a punto de agregar "' +
                      props.name +
                      '" con ' +
                      props.calories +
                      " calorías.",
                    buttons: [
                      {
                        text: "Cancelar",
                        handler: () => showToast("Producto no agregado."),
                      },
                      {
                        text: "Agregar",
                        handler: () => props.onAddCalories(props.calories),
                      },
                    ],
                    onDidDismiss: (e) =>
                      console.log("Nomas para rellenar otro capacitor."),
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
