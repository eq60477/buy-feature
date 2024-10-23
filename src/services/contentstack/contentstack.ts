import contentstack from '@contentstack/delivery-sdk';
import { CONTENTSTACK_CREDENTIALS } from '../../utils/clientCredentials';


const stack = contentstack.stack({
    apiKey: CONTENTSTACK_CREDENTIALS.API_KEY,
    deliveryToken: CONTENTSTACK_CREDENTIALS.DELIVERY_TOKEN,
    environment: CONTENTSTACK_CREDENTIALS.ENVIRONMENT,
});

interface Entry {
    uid: string;
    banner_title: string;
}

interface FindResponse<T> {
    items: T[];
}

//Function to fetch all entries
export const fetchAllEntries = async (contentType: string): Promise<FindResponse<Entry>> => {
    try {
        const response = await stack
            .contentType(contentType)
            .entry()
            .query()
            .find();
        
        const result: FindResponse<Entry> = {
            items: response.entries as Entry[]
        };
        return result; 
    } catch (error) {
        console.log("There was an error retreiving the entries, ", error); 
        throw error; 
    }
};

//Function to fetch single entry 

export const fetchEntryByUID = async (contentType: string, uid: string): Promise<Entry> => {
    try {
        const entry = await stack
            .contentType(contentType)
            .entry(uid)
            .fetch(); 
        return entry as Entry; 
    } catch (error) {
        console.log("There was an error retreiving the entry with this UID: ", error); 
        throw error; 
    }
};