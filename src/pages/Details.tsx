import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
} from '@ionic/react'

const Details = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton>
                        </IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        Details
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            </IonContent>
        </IonPage>
    )

}

export default Details