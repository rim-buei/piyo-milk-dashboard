<script setup lang="ts">
interface Feeding {
  amount: number;
  datetime: string;
}

const props = defineProps({
  elapsedMinutes: {
    type: Number,
    required: true,
  },
  lastFeeding: {
    type: Object as () => Feeding,
    required: true,
  },
});
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
        <strong>{{ lastFeeding.datetime }}</strong>
        <strong>{{ lastFeeding.amount }} ml</strong>
      </div>
    </div>
  </section>
</template>
