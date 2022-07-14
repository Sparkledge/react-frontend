import "axios";

declare module "axios" {   
  export interface AxiosRequestConfig {
    body?: string | Object
  } 
}
