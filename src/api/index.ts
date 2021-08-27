import { getTokenToLocalstorage}  from "@/localstorage/index";

export function getApiUrl() {
  return process.env.VUE_APP_API_URL
}

export function getConfig() {
  const config = {
    headers: {
      'Authorization': getTokenToLocalstorage()
    }
  }
  return config
}