<script setup lang="ts">
const { data } = await useFetch("/api/dashboard");
</script>

<template>
  <main>
    <DailyMilkSummary :totalAmount="data.dailyTotal" :targetAmount="data.dailyTarget" />
  </main>
</template>
