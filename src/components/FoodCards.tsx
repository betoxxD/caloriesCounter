// Importar los componentes necesarios de Ionic
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

// Importar los capacitores necesarios
import { Toast } from "@capacitor/toast";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

// Constante que construye un componente tipo React
const FoodCards: React.FC<{
  // Función definida como parámetro que recibe la función que agrega el nuevo alimento.
  onAddCalories: (calories: number) => void;
  // Variables accesibles desde los parámetros del componente
  typeFood: string;
  name: string;
  description: string;
  calories: number;
}> = (props) => {
  // obtención de la variable present contenida en useIonalert
  const [present] = useIonAlert();

  // Función que muestra un toast y también hace vibrar el teléfono.
  const showToast = async (value: string) => {
    await Toast.show({
      text: value,
    });
    await Haptics.impact({ style: ImpactStyle.Light });
  };
  // Retorna el formato del ion card, donde se agregan los valores obtenidos desde las propiedades
  return (
    <IonCard>
      <IonCardHeader>
        {/* Lo que está entre llaves es código que se ejecuta en TypeScript y lo demás es HTML
            en este caso, imprime la variable typeFood obtenida de props, así con todas las variables
            que están en tipo props.variable
         */}
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
            { /* En el metodo onCLick del botón, muestra un IonAlert, si se cancela muestra un toast y hace vibrar 
                 el teléfono
            */ }
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

// Exporta el comonente FoodCards que se definió anteriormente
export default FoodCards;
