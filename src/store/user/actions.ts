import { ActionContext, ActionTree } from "vuex"
import { TState } from "./state"
import { MutauionType, Mutations } from "./mutations"

const enum ActionType {
    SetAddress = "SetAddress",
    SetStatus = "SetStatus"
}

type ActionAugments = Omit<ActionContext<TState, TState>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
type Actions = {
    [ActionType.SetAddress](context: ActionAugments, address: string): void,
    [ActionType.SetStatus](context: ActionAugments, status: boolean): void
}

export const actions: ActionTree<TState, TState> & Actions = {
    [ActionType.SetAddress]({ commit }, address) {
        commit(MutauionType.SetAddress, address)
    },
    [ActionType.SetStatus]({ commit }, status) {
        commit(MutauionType.SetStatus, status)
    }
}