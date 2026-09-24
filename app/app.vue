<script setup lang="ts">
const { data } = await useFetch("/api/dashboard");
</script>

<template>
  <main>
    <DailyMilkSummary :targetAmount="data.dailyTarget" :totalAmount="data.dailyTotal" />

    <LastFeeding
      :amount="data.lastFeeding.amount"
      :datetime="data.lastFeeding.datetime"
      :elapsed-minutes="data.elapsedMinutes"
    />
  </main>
</template>
