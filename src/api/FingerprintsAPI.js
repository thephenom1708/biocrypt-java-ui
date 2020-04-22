import { callPostApi } from "./ApiCaller";
import { API_TYPE } from "./api";

const FingerprintsAPI = {
    
    registerFingerprints: (userId, fingerprints) => {
        const data = {
            fingerprints: fingerprints,
        }
        const url = "/fingerprints/register/" + userId + "/";
        console.log("sending", data);
        return callPostApi(url, data, API_TYPE.CORE);
    }
}

export default FingerprintsAPI;