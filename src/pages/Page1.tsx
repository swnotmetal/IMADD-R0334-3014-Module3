import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonButton,
} from '@ionic/react'

const Page1 = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton>
                        </IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        Page1
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonButton routerLink='/app/page1/details' expand='full'>
                Go deeper
            </IonButton>
              <IonButton routerLink='/detailsoutside' expand='full'>
                Go deeper detail outside
            </IonButton>
            </IonContent>
        </IonPage>
    )

}

export default Page1