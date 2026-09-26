<script setup lang="ts">
const { data, _pending, _error, refresh } = useDashboard();

useAutoRefresh(refresh);
</script>

<template>
  <main class="h-screen bg-slate-100 p-6">
    <div class="grid h-full grid-cols-4 grid-rows-4 gap-6">
      <div class="col-span-2 row-span-2">
        <DailyMilkSummary
          :target-amount="data.dailyTarget"
          :total-amount="data.dailyTotal"
          class="h-full"
        />
      </div>

      <div class="col-span-2 row-span-1">
        <CurrentTime :date-time="data.updatedAt" class="h-full" />
      </div>

      <div class="col-span-2 row-span-4">
        <FeedingHistory :feedings="data.feedings" class="h-full" />
      </div>

      <div class="col-span-2 row-span-3">
        <LastFeeding
          :elapsed-minutes="data.elapsedMinutes"
          :last-feeding="data.lastFeeding"
          class="h-full"
        />
      </div>
    </div>
  </main>
</template>
