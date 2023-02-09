import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { Guest } from "@/types";

export const guestAndSeatingStore = defineStore("guestAndSeating", () => {
  const guests: Ref<Guest[]> = ref(generateGuests());
  const seatGraph: Ref<any[]> = ref(
    Array(10)
      .fill()
      .map(() => Array(10).fill("X"))
  );
  function generateGuests(): Array<Guest> {
    const guests: Guest[] = [];
    const names: string[] = [
      "Emma",
      "Olivia",
      "Ava",
      "Isabella",
      "Sophia",
      "Mia",
      "Charlotte",
      "Amelia",
      "Harper",
      "Evelyn",
      "Abigail",
      "Emily",
      "Elizabeth",
      "Avery",
      "Sofia",
      "Ella",
      "Madison",
      "Aurora",
      "Scarlett",
      "Victoria",
      "Adalyn",
      "Grace",
      "Chloe",
      "Camila",
      "Penelope",
      "Riley",
      "Layla",
      "Lillian",
      "Natalie",
      "Hazel",
      "Aubrey",
      "Lucy",
      "Audrey",
      "Mila",
      "Brooklyn",
      "Nora",
      "Savannah",
      "Aaliyah",
      "Ellie",
      "Kaylee",
      "Aubree",
      "Annabelle",
      "Mackenzie",
      "Brooklynn",
      "Bella",
      "Claire",
      "Violet",
      "Skylar",
      "Liliana",
      "Natalie",
      "Ivy",
      "Lila",
      "Arianna",
      "Rylee",
      "Everly",
      "Lyla",
      "Makayla",
      "Adalynn",
      "Natalia",
      "Naomi",
      "Aurora",
      "Willow",
      "Raelynn",
      "Eliana",
      "Allison",
      "Mariana",
      "Avery",
      "Eleanor",
      "Ariana",
      "Presley",
      "Harper",
      "Scarlett",
      "Audrey",
      "Brooklynn",
      "London",
      "Brielle",
      "Sadie",
      "Jordyn",
      "Londyn",
      "Adalyn",
      "Mila",
      "Kinsley",
      "Melanie",
      "Genesis",
      "Aubree",
      "Adalene",
      "Danielle",
      "Lila",
      "Aubrey",
      "Mya",
      "Raelynn",
      "Lilah",
      "Emery",
      "Kimberly",
      "Adalina",
      "Gianna",
      "Isabelle",
      "Makayla",
      "Aria",
      "Everleigh",
      "Arianna",
      "Evelynn",
      "Adalene",
      "Aaliyah",
      "Aubree",
    ];

    for (let i = 0; i < 100; i++) {
      const guest = {
        name: names[i],
        guests: Math.ceil(Math.random() * 5),
        package: Math.ceil(Math.random() * 5),
        id: i,
        seat: undefined,
      };
      guests.push(guest);
    }
    return guests;
  }
  function seatGuests() {
    const alphabet: any = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
    };
    for (const guest of guests.value) {
      let seated = false;
      for (let row = 0; row < seatGraph.value.length; row++) {
        if (
          seatGraph.value[row].filter((seat) => seat === "X").length >=
          guest.guests
        ) {
          for (let i = 0; i < guest.guests; i++) {
            const seatIndex = seatGraph.value[row].indexOf("X");
            seatGraph.value[row][seatIndex] = guest.id;
            const seatLabel = alphabet[row];
            guest.seat = seatLabel + "," + seatIndex;
          }
          seated = true;
          break;
        }
      }
      if (!seated) {
        let seatsAvailable = 0;
        for (let row = 0; row < seatGraph.value.length; row++) {
          seatsAvailable += seatGraph.value[row][0] === "X" ? 1 : 0;
          if (seatsAvailable === guest.guests) {
            for (let i = 0; i < guest.guests; i++) {
              seatGraph.value[i][0] = guest.id;
            }
            seated = true;
            break;
          }
        }
      }
    }
  }

  return { guests, seatGraph, seatGuests };
});
