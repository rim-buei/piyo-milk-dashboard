<script setup lang="ts">
const { data } = await useFetch("/api/dashboard");
</script>

<template>
  <main>
    <DailyMilkSummary :targetAmount="data.dailyTarget" :totalAmount="data.dailyTotal" />
  </main>
</template>
