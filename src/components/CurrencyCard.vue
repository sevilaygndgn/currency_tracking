<template>
  <div class="wrapper">
      <ul class="card">
        <li class="Isim">{{ currency.Isim }}</li>
        <li class="CurrencyName">{{ currency.CurrencyName }}</li>
        <li class="Forex">Alış: {{ currency.ForexBuying }}</li>
        <li class="Forex">Satış: {{ currency.ForexSelling }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "CurrencyCard",
  props: {
    currency: Object,
  },
};
</script>

<style>


</style>
