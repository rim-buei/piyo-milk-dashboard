<script setup lang="ts">
interface Props {
  amount: number;
  datetime: string;
  elapsedMinutes: number;
}

const props = defineProps<Props>();
</script>

<template>
  <section>
    <h2>前回のミルクから</h2>

    <div>
      <div>
        <strong>{{ elapsedMinutes }}</strong>
      </div>
      <div>
        <span>前回:</span>
        <strong>{{ datetime }}</strong>
        <strong>{{ amount }}</strong>
      </div>
    </div>
  </section>
</template>
