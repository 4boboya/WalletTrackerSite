import { GetterTree } from "vuex"
import { TState } from "./state"

type Getters = {
    GetAddress(state: TState): string,
    GetStatus(state: TState): boolean,
}

export const getters: GetterTree<TState, TState> & Getters = {
    GetAddress(state) {
        return state.address
    },
    GetStatus(state) {
        return state.status
    }
}