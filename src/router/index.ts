import { createRouter, createWebHistory } from "vue-router";
import Itinerary from "../views/ItineraryView.vue";
import SeatAssignment from "../views/SeatAssignmentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "seatassignment",
      component: SeatAssignment,
    },
    {
      path: "/itinerary/:id",
      name: "itinerary",
      component: Itinerary,
    },
  ],
});

export default router;
