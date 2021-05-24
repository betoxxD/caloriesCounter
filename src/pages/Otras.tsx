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
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Otras.css";

import { StatusBar } from "@capacitor/status-bar";
import { Device } from "@capacitor/device";
import { useState } from "react";

const Otras: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<string>("");
  const [batteryInfo, setBatteryInfo] = useState<string>("");
  const [languageCode, setlanguageCode] = useState<string>("");

  const showStatusBar = async () => {
    await StatusBar.show();
  };

  const hideStatusBar = async () => {
    await StatusBar.hide();
  };

  const chargeDeviceInfo = async () => {
    var info = await Device.getInfo();
    setDeviceInfo(info.osVersion);
    var batteryInfoLevel = await Device.getBatteryInfo();
    setBatteryInfo(batteryInfoLevel.batteryLevel! * 100 + "");
    var languageCodeInfo = await Device.getLanguageCode();
    setlanguageCode(languageCodeInfo.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Otras funciones</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={showStatusBar}>
                Mostrar barra de estado
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" onClick={hideStatusBar}>
                Ocultar barra de estado
              </IonButton>
            </IonCol>
          </IonRow>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Información general</IonCardSubtitle>
              <IonCardTitle>Información del dispositivo</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton expand="block" onClick={chargeDeviceInfo}>
                Cargar información del dispositivo
              </IonButton>
              <IonList>
                <IonItem>
                  <IonLabel>Versión de Android: {deviceInfo}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Batería restante: {batteryInfo}%</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Idioma: {languageCode}</IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Otras;
