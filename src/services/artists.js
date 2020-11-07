import { base_url, API_KEY, artists_url} from '../config/rest_config';
import axios from 'axios';

export async function getArtists()
{
    try{
        var data;
        const api = axios.create({
            baseURL: `${base_url}`,
            headers: {
                'x-happi-key': `${API_KEY}`
            }
        });

        await api.get(`${artists_url}`).then(res => {
            data = res.data;
        });
        //console.log(data);
        return data;
    }
    catch(ex){
        throw ex;
    }
}

export async function getArtistTracks(artistID)
{
    try{
        var artistTracks = [];
        const api = axios.create({
            baseURL: `${base_url}`,
            headers: {
                'x-happi-key': `${API_KEY}`
            }
        });

        await api.get(`${artists_url}/${artistID}/smart-playlist`).then(res => {
            //console.log(res.data);
            artistTracks = res.data.result;
            
        });
        
        return artistTracks;
    }
    catch(ex){
        console.log(ex.message);
        throw ex;
    }
}
