import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const coinmarketcap_post__create = createAsyncThunk(
  "coinmarketcap_response_post_PostSomethings/coinmarketcap_post__create",
  async payload => {
    const response = await apiService.coinmarketcap_post__create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const coinmarketcap_response_post_PostSomethingsSlice = createSlice({
  name: "coinmarketcap_response_post_PostSomethings",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(coinmarketcap_post__create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(coinmarketcap_post__create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(coinmarketcap_post__create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  coinmarketcap_post__create,
  slice: coinmarketcap_response_post_PostSomethingsSlice
}
