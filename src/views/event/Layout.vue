<template>
    <div v-if="event">
      <h1 class="p-7">{{ event.title }}</h1>
      <div  class="nav-style" id="nav">
        <router-link :to="{ name: 'EventDetails', params: { id } }"
          >Details</router-link
        >
        |
        <router-link :to="{ name: 'EventRegister', params: { id } }"
          >Register</router-link
        >
        |
        <router-link :to="{ name: 'EventEdit', params: { id } }"
          >Edit</router-link
        >
      </div>
      <router-view :event="event" />
    </div>
  </template>
  <script>
  import EventService from '@/services/EventService.js'
  export default {
    props: ['id'],
    data() {
      return {
        event: null
      }
    },
    created() {
      EventService.getEvent(this.id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  </script>
  <style scoped>
  .p-7 {
    padding-top: 71px;
  }
  .nav-style {
    background-color: beige;
    padding: 12px;
  }
  .eventDetails {
    padding-top: 80px;
  }
  .sr-only {
    font-size: 40px;
    font-weight: 900;
    color: #104471;
  }
  </style>
  