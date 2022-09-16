<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import axios from "axios";
import EventService from "@/services/EventService.js";
import nprogress  from "nprogress ";

export default {
  name: "Home",
  components: {
    EventCard,
    axios,
    EventService,
    nprogress ,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.events {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 80px;
}
</style>
