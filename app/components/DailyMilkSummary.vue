<script setup lang="ts">
const props = defineProps({
  totalAmount: {
    type: Number,
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <section>
    <h2>今日のミルク</h2>

    <div>
      <div>
        <strong>{{ totalAmount }}</strong>
        <span> / {{ targetAmount }} ml</span>
      </div>
    </div>
  </section>
</template>
