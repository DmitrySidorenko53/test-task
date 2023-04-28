import {createStore} from "vuex";
import listDictionaryModule from "@/store/modules/listDictionaryModule";


export default createStore({
    modules: {
        dictionaryList: listDictionaryModule,
    }
})

