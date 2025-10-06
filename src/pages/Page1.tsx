import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonSearchbar,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonList,
    useIonLoading,
    IonAvatar,
    IonImg,
    IonIcon,
    IonText,
} from '@ionic/react'
// We import our custom hook and the TypeScript types
// The hook gives us functions, the types tell us what shape our data should be
import useApi, { SearchResult, SearchType } from '../hooks/useAPI'
import { useEffect, useState } from 'react';
import { gameControllerOutline, tvOutline, videocamOutline } from 'ionicons/icons'

const Page1 = () => {

    // Here's the connection! We call useApi() and destructure out the searchData function
    // This function lives in useAPI.tsx but we can use it here like it's local
    const { searchData } = useApi();

    // State management - these keep track of what the user is doing
    const [searchTerm, setSearchTerm] = useState(''); // What they're searching for
    const [type, setType] = useState<SearchType>(SearchType.all); // Movie, series, etc. - using our enum from useAPI
    const [results, setResults] = useState<SearchResult[]>([]); // Array of movies - using our interface from useAPI
    const [loading, dismiss] = useIonLoading() // Ionic's built-in loading spinner
    const [error, setError] = useState<string>(''); // Error messages to show users

    useEffect(() => {
        if(searchTerm == '') {
            setResults([])
            setError('') // Clear error when search is empty
            return
        }

        const loadData = async() => {
            try {
                await loading() // Show spinner
                // Here's where we actually call the function from our hook!
                // We pass in the user's search term and selected type
                const result: any = await searchData(searchTerm, type);
                await dismiss() // Hide spinner
                
                if(result?.Error) {
                    console.log('API Error:', result.Error);
                    setResults([]); // Clear any old results
                    setError(result.Error); // Show error message to user
                } else {
                    // OMDB API returns {Search: [...]}, it is not the array directly like in the video
                    // So we grab the Search property and update our results state
                    setResults(result.Search || []);
                    setError(''); // Clear any old error messages
                } 
                console.log('the result is:', result);
            } catch (error) {
                await dismiss()
                console.error('Search failed:', error);
                setResults([]);
                setError('Search failed. Please try again.'); // Show generic error since the tutorial method did not work
            }
        }
        loadData()
    },  [searchTerm, type])

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonButtons slot='start'>
                        <IonMenuButton>
                        </IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        Movie App
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {/* wait until the typing is stopped */}
                <IonSearchbar value={searchTerm} 
                onIonChange={(e)=>setSearchTerm(e.detail.value!)}
                debounce={300} 
                >
                </IonSearchbar>
                <IonItem>
                    <IonLabel>Select Searchtype</IonLabel>
                    <IonSelect value={type}
                    onIonChange={(e)=>setType(e.detail.value!)}
                    >
                        <IonSelectOption value="">All</IonSelectOption>
                        <IonSelectOption value="series">Movie</IonSelectOption>
                        <IonSelectOption value="series">Series</IonSelectOption>
                        <IonSelectOption value="episode">Episode</IonSelectOption>
                    </IonSelect>
                </IonItem>

                 {error && (
                    <IonItem>
                        <IonText color="danger">
                            <h3>{error}</h3>
                        </IonText>
                    </IonItem>
                )}

                <IonList>
                    {results.map((item: SearchResult) => (
                        <IonItem button key={item.imdbID} routerLink={`/movies/${item.imdbID}`}>
                            <IonAvatar slot='start'>
                                <IonImg src={item.Poster}/>
                            </IonAvatar>
                            <IonLabel className='ion-text-wrap'>{item.Title}</IonLabel>

                            {item.Type === 'movie' && <IonIcon slot="end" icon={videocamOutline}/>}
                            {item.Type === 'series' && <IonIcon slot="end" icon={tvOutline}/>}
                            {item.Type === 'game' && <IonIcon slot="end" icon={gameControllerOutline}/>}
                        </IonItem>
                    ))}
                </IonList>
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
