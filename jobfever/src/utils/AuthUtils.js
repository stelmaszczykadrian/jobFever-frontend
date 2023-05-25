import Cookies from "js-cookie";
import {useMemo} from "react";

export const useAuthorization = () => {
    const token = useMemo(() => {
        const cookie = Cookies.get("jwt");
        if (!cookie) {
            return null;
        }
        return JSON.parse(cookie)
    }, []);

    const getAccessToken = () => {
        if (!token) {
            return '';
        }
        return token.access_token
    }

    const getEmployerId = () => {
        if (!token || !token.employer_id) {
            return '';
        }
        return token.employer_id.toString();
    }

    const getCandidateId = () => {
        if (!token || !token.candidate_id) {
            return '';
        }
        return token.candidate_id.toString();
    }

    return {getAccessToken, getEmployerId, getCandidateId}
}
