import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read = createAsyncThunk(
  "coinmarketcap_response_get_GetBTCS/coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read",
  async payload => {
    const response = await apiService.coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const coinmarketcap_response_get_GetBTCSSlice = createSlice({
  name: "coinmarketcap_response_get_GetBTCS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read,
  slice: coinmarketcap_response_get_GetBTCSSlice
}
