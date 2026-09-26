<script setup lang="ts">
const { data, pending, error, refresh } = useDashboard();

useAutoRefresh(refresh);
</script>

<template>
  <main class="h-screen bg-slate-100 p-6">
    <div class="grid h-full grid-cols-4 grid-rows-4 gap-6">
      <div class="col-span-2 row-span-2">
        <DailyMilkSummary
          :targetAmount="data.dailyTarget"
          :totalAmount="data.dailyTotal"
          class="h-full"
        />
      </div>

      <div class="col-span-2 row-span-1">
        <Clock :datetime="data.updatedAt" class="h-full" />
      </div>

      <div class="col-span-2 row-span-4">
        <FeedingHistory :feedings="data.feedings" class="h-full" />
      </div>

      <div class="col-span-2 row-span-3">
        <LastFeeding
          :elapsedMinutes="data.elapsedMinutes"
          :lastFeeding="data.lastFeeding"
          class="h-full"
        />
      </div>
    </div>
  </main>
</template>
