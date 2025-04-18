export const isProd = import.meta.env.MODE === "production";
export const getCaptchaToken = (token: string) => isProd ? token : "dummy-token";
