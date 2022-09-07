<template>
  <div class="eventDetails" v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>

  <div  class="eventDetails" v-else>
    <b-button variant="primary" disabled>
      <b-spinner small></b-spinner>
      <span class="sr-only">Loading...</span>
    </b-button>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  props:['id'],
  components: {
    EventService,
  },

  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.eventDetails {
  padding-top: 80px;
}
.sr-only{
  font-size: 40px;
  font-weight: 900;
  color:#104471
}
</style>
