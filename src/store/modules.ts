import Data, { DataState } from './data'
import User, { UserState } from './user'

export type TState = DataState & UserState

export const modules = {
    Data,
    User
};