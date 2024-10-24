import {  useCallback, useState } from "react";
import { fetchAllEntries, fetchEntryByUID } from "../services/contentstack/contentstack";

interface Entry {
    uid: string;
    banner_title: string;
}

const useContent = () => {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [singleEntry, setSingleEntry] = useState<Entry | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEntries = useCallback(async () => {
        setLoading(true);
        try {
          const result = await fetchAllEntries('hero_banner');
          setEntries(result.items);
        } catch (error) {
          setError("There was an error retrieving the entries.");
        } finally {
          setLoading(false);
        }
    }, []);

    const fetchSingleEntry = useCallback(async (uid: string) => {
        setLoading(true);
        try {
          const entry = await fetchEntryByUID('hero_banner', uid);
          setSingleEntry(entry);
        } catch (error) {
          setError("There was an error retrieving the single entry with this UID.");
        } finally {
          setLoading(false);
        }
    }, []);

    return {
        entries, 
        singleEntry, 
        fetchEntries, 
        fetchSingleEntry, 
        loading, 
        error
    }; 
}; 

export default useContent; 