import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    useIonRouter,
    IonButton,
} from '@ionic/react'

//React.FC is quite old, I will use const as function throughout this task.
const Login = () => {

    const navigation = useIonRouter()

    const handleLogin = () => {
        navigation.push('/app', 'forward', 'replace')
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        First Page
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton onClick={() => handleLogin()} expand="full">login</IonButton>
            </IonContent>
        </IonPage>
    )

}

export default Login