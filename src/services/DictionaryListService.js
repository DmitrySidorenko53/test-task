import axios from "axios";

const API_URL = 'http://178.172.137.253:8020/api/avep/dictionary/'

class DictionaryListService {

    async getDictionaryList() {
        try {
            return await axios
                .get(API_URL + 'list');
        } catch (e) {
            alert('Server error')
        }
    }

}

export default new DictionaryListService();