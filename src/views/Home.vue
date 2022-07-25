<template>
  <div class="container">
    <div class="header">
      <p>Döviz Kuru</p>
    </div>
    <currency-card
      v-for="(item, index) in getCurrency"
      :key="index"
      :currency="item"
    />
  </div>
</template>

<script>
import CurrencyCard from "@/components/CurrencyCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      interval: null,
    };
  },
  name: "Home",
  components: {
    CurrencyCard,
  },
  created() {
    this.fetchCurrency();
    this.interval = setInterval(() => {
      this.fetchCurrency();
      console.log("Home created");
    }, 10000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    ...mapActions(["fetchCurrency"]),
  },
  computed: {
    ...mapGetters(["getCurrency"]),
  },
};
</script>

<style></style>
