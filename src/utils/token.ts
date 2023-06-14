import {defaultLanguage} from "@/config/setting";

// @ts-ignore
export const getLanguage = () => window.$wujie?.props.language || defaultLanguage;

// @ts-ignore
export const getToken = () => window.$wujie?.props.token
