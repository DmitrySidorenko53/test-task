import DictionaryListService from "@/services/DictionaryListService";

export default {
    state: {
        dictionaryList: []
    },
    mutations: {
        setDictionaryList(state, payload) {
            state.dictionaryList = payload
        }
    },
    getters: {
        getDictionaryList() {
            return this.state.dictionaryList;
        }
    },
    actions: {
        async fetchDictionaryList(context) {
            await DictionaryListService.getDictionaryList()
                .then(response => context.commit("setDictionaryList", response.data));
        }
    },
    namespaced: true
}