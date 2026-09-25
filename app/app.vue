<script setup lang="ts">
const { data } = await useFetch("/api/dashboard");
</script>

<template>
  <main class="h-screen bg-slate-100 p-6">
    <div class="grid h-full grid-cols-5 grid-rows-2 gap-6">
      <div class="col-span-3 row-span-1">
        <DailyMilkSummary
          :targetAmount="data.dailyTarget"
          :totalAmount="data.dailyTotal"
          class="h-full"
        />
      </div>

      <div class="col-span-2 row-span-2">
        <FeedingHistory :feedings="data.feedings" class="h-full" />
      </div>

      <div class="col-span-3 row-span-1">
        <LastFeeding
          :elapsedMinutes="data.elapsedMinutes"
          :lastFeeding="data.lastFeeding"
          class="h-full"
        />
      </div>
    </div>
  </main>
</template>
