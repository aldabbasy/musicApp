import { base_url, API_KEY, tracks_url} from '../config/rest_config';
import axios from 'axios';

export async function getLatestTracks()
{
    try{
        var data;
        const api = axios.create({
            baseURL: `${base_url}`,
            headers: {
                'x-happi-key': `${API_KEY}`
            }
        });

        await api.get(`${tracks_url}`).then(res => {
            data = res.data;
        });
        //console.log(data);
        return data;
    }
    catch(ex){
        throw ex;
    }
}

export async function getLyrics(lyricsUrl)
{
    try{
        var data;
        
        const api = axios.create({
            baseURL: `${base_url}`,
            headers: {
                'x-happi-key': `${API_KEY}`
            }
        });
        
        await api.get(`${lyricsUrl}`).then(res => {
            data = res.result[0];
        });
        console.log(data);
        return data;
    }
    catch(ex){
        //console.log(ex.message);
        throw ex;
    }
}