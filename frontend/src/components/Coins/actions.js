import coinGecko from "../../api/coinGecko";
export const GET_COIN_LIST = 'GET_COIN_LIST';
export const GET_COIN_DETAILS = 'GET_COIN_DETAILS';
export const GET_COIN_CHART = 'GET_COIN_CHART';
export const GET_EVENT_LIST = 'GET_EVENT_LIST';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const GET_EXCHANGES_LIST = 'GET_EXCHANGES_LIST';
export const GET_GLOBAL = 'GET_GLOBAL';
export const SET_HEADER_MENU_ITEM = 'SET_HEADER_MENU_ITEM';
export const SET_SIDER_MENU_ITEM = 'SET_SIDER_MENU_ITEM'
export const GET_STATUS_UPDATES = 'GET_STATUS_UPDATES';


export const fetchCoins = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/coins/markets', {
        params: {
            vs_currency: "usd",
            order: "market_cap_desc"
        }
    })
    dispatch({
        type: GET_COIN_LIST,
        payload: response.data
    })
}

export const fetchCoinDetails = (coinId) => async (dispatch, getState) => {
    const response = await coinGecko.get(`coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&sparkline=false&developer_data=true`);
    dispatch({
        type: GET_COIN_DETAILS,
        payload: response.data
    })
}

export const fetchCoinMarketDetails = (coinId) => async (dispatch, getState) => {
    const response = await coinGecko.get(`coins/${coinId}/market_chart?vs_currency=usd&days=7`);
    dispatch({
        type: GET_COIN_CHART,
        payload: response.data
    })
}


export const fetchEvents = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/events')
    dispatch({
        type: GET_EVENT_LIST,
        payload: response.data
    })
}

export const fetchExchangeRates = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/exchange_rates')
    dispatch({
        type: GET_EXCHANGE_RATES,
        payload: response.data
    })
}

export const fetchExchanges = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/exchanges')
    dispatch({
        type: GET_EXCHANGES_LIST,
        payload: response.data
    })
}

export const fetchStatusUpdates = () => async (dispatch, getState ) => {
    const response = await coinGecko.get('/status_updates')
    dispatch({
        type: GET_STATUS_UPDATES,
        payload: response.data
    })
}

export const fetchGlobal = () => async (dispatch, getState) => {
    const response = await coinGecko.get('/global')
    dispatch({
        type: GET_GLOBAL,
        payload: response.data
    })
}

export const setHeaderMenuItem = (item) => {
    return {
        type: SET_HEADER_MENU_ITEM,
        payload: { item }
    }
}

export const setSiderMenuItem = (item) => {
    return {
        type: SET_SIDER_MENU_ITEM,
        payload: { item }
    }
}