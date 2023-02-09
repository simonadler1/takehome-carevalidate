<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { guestAndSeatingStore } from "@/stores/seating";
import { useRoute } from "vue-router";
const store = guestAndSeatingStore();
let { guests } = storeToRefs(store);
const route = useRoute();
const id = route.params.id;
const packagename = computed(() => {
  return localStorage.getItem(String(guests.value[id].package));
});
</script>

<template>
  <div v-if="guests">
    {{ JSON.stringify(guests[id]) }}
    <div>Package: {{ packagename }}</div>
  </div>
</template>
