const ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup",
}as const;
export default ROUTES;
export type RoutesType = typeof ROUTES;
