import { callPostApi, callGetApi } from "./ApiCaller";
import { API_TYPE } from "./api";

const FingerprintsAPI = {
    
    registerFingerprints: (userId, fingerprints) => {
        const data = {
            fingerprints: fingerprints,
        }
        const url = "/fingerprints/register/" + userId + "/";
        return callPostApi(url, data, API_TYPE.CORE);
    },

    getRegisteredFingerprints: (userId) => {
        const url = "/fingerprints/merge/" + userId + "/";
        return callGetApi(url, API_TYPE.CORE);
    },

    verifyFingerprints: (testFingerprint, registeredFingerprints) => {
        const data = {
            testFingerprintBase64: testFingerprint,
            registeredFingerprints: registeredFingerprints
        }
        const url = "/fingerprints/verify/";
        return callPostApi(url, data, API_TYPE.CORE);
    }
}

export default FingerprintsAPI;