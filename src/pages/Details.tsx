import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonBackButton,
    useIonViewWillEnter,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonItem,
    IonIcon,
    IonLabel,
    IonModal,
    IonFooter,
    IonButton,
} from '@ionic/react'
import { RouteComponentProps } from 'react-router'
import useApi, { SearchResult } from '../hooks/useAPI'
import { useState } from 'react'
import { bodyOutline, clipboardOutline, starHalfOutline, trophyOutline } from 'ionicons/icons'

interface DetailPageProps extends RouteComponentProps<{id: string}>{

}

const Details = ({ match }: DetailPageProps ) => {
    const {getDetails} = useApi()
    const [info, setInfo] = useState<SearchResult | undefined>(undefined)

    useIonViewWillEnter(() => {
        const fetchDetails = async () => {
            const id = match.params.id
            const data = await getDetails(id)
            setInfo(data)
            console.log("movie data", data);
        }
        fetchDetails();
    })
    
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>
                        {info?.Genre}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
               {info && <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{info.Title}</IonCardTitle>
                    <IonCardSubtitle>{info.Year}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent text-center>
                    <IonImg src={info.Poster}></IonImg>
                    <IonItem lines='none'>
                        <IonIcon icon={starHalfOutline} slot='start' color='warning'/>
                        <IonLabel>{info.imdbRating}</IonLabel>
                    </IonItem>
                </IonCardContent>
               </IonCard>}

               <IonModal trigger='open-modal' initialBreakpoint={.25} breakpoints={[0, .25, .5, .7]}>
                    <IonContent className='ion-padding'>
                        <IonItem lines='none'>
                        <IonIcon icon={clipboardOutline} slot='start' color='warning'/>
                        <IonLabel>{info?.Director}</IonLabel>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonIcon icon={bodyOutline} slot='start' color='warning'/>
                        <IonLabel>{info?.Actors}</IonLabel>
                    </IonItem>

                    <IonItem lines='none'>
                        <IonIcon icon={trophyOutline} slot='start' color='warning'/>
                        <IonLabel>{info?.Awards}</IonLabel>
                    </IonItem>

                    <p className='ion-padding'>{info?.Plot}</p>
                    </IonContent>
               </IonModal>
            </IonContent>

            <IonFooter>
                <IonButton expand='full' id='open-modal'>Show more</IonButton>
            </IonFooter>
        </IonPage>
    )

}

export default Details