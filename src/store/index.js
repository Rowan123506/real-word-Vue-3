import { createStore } from "vuex";
import EventService from "../services/EventService";


export default createStore({
  state: {
    user: " Adam",
    events: [],
  },

  mutations: {
    ADD_USER(state, event) {
      state.events.push(event);
    },
  },

  actions: {
    createEvent({ commit } , event) {
      EventService.postClient(event)
        .then((res) => {
        commit("ADD_USER", event);
        })
        .catch((err) => {});
    },
  },
});
