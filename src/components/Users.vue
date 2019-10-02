<template>
  <div>
    <h2>Result: {{ list.length }} users</h2>
    <p v-for="user in list" :key="user.id">{{ user.name }}</p>
  </div>
</template>

<script>
export default ({
  props: {
    list: Array,
  },
});
</script>
