import axios from "axios"
import { COINMARKETCAP_TOKEN } from "react-native-dotenv"
const coinMarketCap = axios.create({
  baseURL: "https://sandbox-api.coinmarketcap.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${COINMARKETCAP_TOKEN}`
  }
})
function coinmarketcap_post__create(payload) {
  return coinMarketCap.post(`/`, payload)
}
function coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read(
  payload
) {
  return coinMarketCap.get(`/v1/cryptocurrency/quotes/latest?symbol=BTC`)
}
export const apiService = {
  coinmarketcap_post__create,
  coinmarketcap_get_v1_cryptocurrency_quotes_latestsymbolBTC_read
}
