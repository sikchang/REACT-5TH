// import type { RouteObject } from "react-router";

export type AppRoute = Omit<RouteObject, "children"> & {
  text?: string;
  display?: boolean; // boolean을 쓰고 타입을 명시적으로 지정
  children?: AppRoute[];
};
