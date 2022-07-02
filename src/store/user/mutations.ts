import { MutationTree } from "vuex"
import { TState } from "./state"

export const enum MutauionType {
    SetAddress = "SetAddress",
    SetStatus = "SetStatus"
}

export type Mutations = {
    [MutauionType.SetAddress](state: TState, address: string): void
    [MutauionType.SetStatus](state: TState, status: boolean): void
}

export const mutations: MutationTree<TState> & Mutations = {
    [MutauionType.SetAddress](state, address) {
        state.address = address
    },
    [MutauionType.SetStatus](state, status) {
        state.status = status
    }
}