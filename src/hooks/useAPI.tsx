// This hook is like a bridge between our UI and the movie database API
// It handles all the messy network stuff so Page1.tsx can just focus on being pretty

// This enum defines what types of content we can search for
// The values match what the OMDB API expects
export enum SearchType {
    all = '',        // Empty string means search everything
    movie = 'movie',
    series = 'series',
    episode = 'episode',
};

// This interface defines what a movie object looks like
// TypeScript uses this to make sure we don't try to access properties that don't exist
// Page1.tsx imports this so it knows what to expect from our API calls
export interface SearchResult {
    Title: string       // Movie name
    Year: string        // Release year
    Poster: string      // Image URL
    imdbID: string      // Unique identifier - super important for details page
    Type: string        // movie, series, episode
    imdbRating: string  // Rating score
    Genre: string       // Action, Comedy, etc.
    Awards: string      // Awards won
    Director: string    // Who directed it
    Actors: string      // Main cast
    Plot: string        // Story summary
};

export interface SearchError {
    Response: string
    Error: string
}

// This is our custom hook - think of it as a toolbox that Page1.tsx can borrow from
export const useApi = () => {

    let url = 'https://www.omdbapi.com/'
    let apikey = process.env.movie_api // You should always use .env and rule it out from gitignore, remember pushing apikey to a public repo is a VERY bad practice! 

    // This function is what Page1.tsx calls when the user searches for something
    // It takes the search term and type, then talks to the movie database
    const searchData = async(title: string, type: SearchType): Promise<SearchResult[] | SearchError> => {
        try {
            // Build the API URL with the user's search parameters
            const res = await fetch(
                `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apikey}`
            );
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            // Handle errors
            if (data.Error) {
                throw new Error(data.Error);
            }
            
            return data;
        } catch (error) {
            console.error('Search failed:', error);
            throw error; // Re-throw so calling component can handle it
        }
    };

    const getDetails = async(id: string): Promise<SearchResult> => {
        try {
            const res = await fetch(`${url}?i=${id}&plot=full&apikey=${apikey}`);
            
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            const data = await res.json();
            
            // Handle errors
            if (data.Error) {
                throw new Error(data.Error);
            }
            
            return data;
        } catch (error) {
            console.error('Get details failed:', error);
            throw error; // Re-throw so calling component can handle it
        }
    }

    // We return an object with our functions
    // Page1.tsx can destructure this and use searchData like it's a local function
    // This is how React hooks work - they let us share logic between components
    return { searchData, getDetails };
}

export default useApi;