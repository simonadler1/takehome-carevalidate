<script setup lang="ts">
import { storeToRefs } from "pinia";
import { guestAndSeatingStore } from "@/stores/seating";
import { useRouter } from "vue-router";
const router = useRouter();
const store = guestAndSeatingStore();
const { seatGuests } = store;
const { seatGraph } = storeToRefs(store);
let id = "";
function viewItinerary() {
  router.push(`/itinerary/${id}`);
}
</script>

<template>
  <div>
    <div>
      <button @click="seatGuests">Seat Guests</button>
      <div v-if="seatGraph[0][0] !== 'X'">
        lookup itinerary <input v-model="id" type="text" />
        <button @click="viewItinerary()">View Itinerary</button>
      </div>
    </div>

    <div>
      <h3>seating chart</h3>
      <div v-if="seatGraph[0][0] === 'X'">
        Nothing here yet.Press seat guests to get started
      </div>
      <div v-else>
        <div v-for="(row, index) in seatGraph" :key="index">{{ row }}</div>
      </div>
    </div>
  </div>
</template>
