/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    IonPage,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSplitPane,
    IonMenu,
    IonRouterOutlet,
    IonMenuToggle,
    IonIcon,
    IonButton,
} from '@ionic/react'
import { homeOutline, newspaperOutline, logOutOutline, logOut} from 'ionicons/icons'
import { Redirect, Route } from 'react-router'
import Page2 from './Page2'
import Page1 from './Page1'
import Details from './Details'

const Menu = () => {

    const paths = [
        { name: 'Home', url: '/app/page1', icon: homeOutline },
        { name: 'News', url: '/app/page2', icon: newspaperOutline },
    ]


    return(
        <IonPage>
       <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Menu
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {paths.map((item, index) => (
                    <IonMenuToggle key={index}>
                        <IonItem routerLink={item.url} routerDirection="forward">
                            <IonIcon icon={item.icon} slot='start' />
                            {item.name}
                        </IonItem>
                    </IonMenuToggle>
                ))}
                <IonButton routerLink='/' routerDirection='back' expand='full'>
                <IonIcon icon={logOutOutline} slot='start'></IonIcon>
                Logout
                </IonButton>
            </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
              <Route exact path="/app/page1" component={Page1}/>
              <Route exact path="/app/page2" component={Page2}/>
              <Route exact path="/app/page1/details" component={Details}/>
                <Route exact path="/app">
                    <Redirect to="/app/page1"/>
                </Route>
        </IonRouterOutlet>

       </IonSplitPane>
       </IonPage>
    )

}

export default Menu