/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    PUBLIC_URL: string
    REACT_APP_HASH: string
    REACT_APP_API_URI: string
    REACT_APP_WS_URI: string,
    REACT_APP_CONNECTION_TO_SERVER: string,
    REACT_APP_GOOGLE_CLIENT_ID: string,
    REACT_APP_GOOGLE_ANALYTICS_ID: string,
    REACT_APP_GOOGLE_ADSENSE: string,
    REACT_APP_GOOGLE_ADSENSE_SLOT: string,
  }
}
