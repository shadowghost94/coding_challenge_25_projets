import { createContext, useEffect, useState } from "react";
import FeatureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            setLoading(true);
            //service original d'appel
            const response = await FeatureFlagsDataServiceCall();
            setEnabledFlags(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
            throw new Error(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    return (
        <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}
