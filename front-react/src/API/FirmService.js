import axios from "axios";

export default class FirmService {
    static async findByAtiId(atiId) {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/firm/info?atiId=" + atiId)
            console.log(response.data)
            return response.data
        } catch (e) {
            throw e;
        }
    }

    static async save(firm) {
        const response = await axios.post("http://localhost:8080/api/v1/firm/", firm)
        return response.data
    }
}