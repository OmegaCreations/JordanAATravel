import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/offers", "routes/offers.tsx"),
  route("/offers/:id", "routes/offerDetail.tsx"),
  route("/places", "routes/places.tsx"),
  route("/places/:id", "routes/placeDetail.tsx"),
] satisfies RouteConfig;
