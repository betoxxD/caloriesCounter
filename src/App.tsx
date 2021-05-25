import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


// Importación de las páginas que se crearon (encargadas de mostrar el contenido de la aplicación)
import Inicio from './pages/Inicio';
import Alimentos from './pages/Alimentos';
import Otras from './pages/Otras';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inicio" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
            {/* Creación de rutas de las páginas para poder integrarlas al menú lateral */}
            <Route path="/page/Inicio" component={Inicio}/>
            <Route path="/page/Alimentos" component={Alimentos}/>
            <Route path="/page/Otras" component={Otras}/>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
