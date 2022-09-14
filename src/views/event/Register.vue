<template>
  <p>Register for the event here</p>
 
  <button @click="register">Register Me</button>
</template>
<script>
import VueToast from "vue-toast";
export default {
  props: ["event"],
  components: {
    VueToast,
  },
  methods: {
    register() {
      //  alert('Registered Successfully')
      const toast = this.$refs.toast;
      toast.showToast("Show me toast");
      this.$router.push({
        name: "EventDetails",
        params: { id: this.event.id },
      });
    },
  },
};
</script>
