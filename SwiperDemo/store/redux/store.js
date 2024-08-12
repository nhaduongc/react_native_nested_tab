import { configureStore } from '@reduxjs/toolkit'
import exploreTabReducer from './exploreTab'

export const store = configureStore({
    reducer: {
        exploreTab: exploreTabReducer
    }
})
