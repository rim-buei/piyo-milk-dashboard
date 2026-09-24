<script setup lang="ts">
const { data } = await useFetch("/api/dashboard");
</script>

<template>
  <main>
    <DailyMilkSummary :targetAmount="data.dailyTarget" :totalAmount="data.dailyTotal" />

    <LastFeeding :elapsed-minutes="data.elapsedMinutes" :lastFeeding="data.lastFeeding" />
  </main>
</template>
