import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"

interface CalculatorState {
    wax: string
}
const initialState: CalculatorState = {
    wax: ""
}

export const calculatorSlice = createSlice({
    name: 'calcualtor',
    initialState,
    reducers: {
        UpdateValue: (state) => {
            state.wax = ""
        }
    }
})

export const { UpdateValue } = calculatorSlice.actions
export default calculatorSlice.reducer
