const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const API_KEY = process.env.REACT_APP_API_KEY;


// make an API request to Marvel
const _apiRequest = async ({ endpoint, params = {} }) => {

    // add the API key to the URL params
    params = { 
        ...params, 
        apikey: API_KEY 
    };

    const queryString = _buildQueryString( params );
    const url = `${ API_URL }${ endpoint }?${ queryString }`;

    return fetch( url ).then( res => res.json() );

}


// fetch all characters
export const fetchCharacters = async ( limit = 50, offset = 0 ) => {

    return _apiRequest({ 

        endpoint: 'characters', 
        params: { limit, offset }
        
    });

}


/**
 *  Helpers
 */
const _buildQueryString = ( params ) => {

    return Object.keys( params ).map( key => key + '=' + params[key] ).join( '&' );

}