<template>
  <DataProvider>
    <div slot-scope="{ data, loading }">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <Users :list="data" />
      </div>
    </div>
  </DataProvider>
</template>

<script>
import DataProvider from './DataProvider';
import Users from './Users.vue';

export default {
  name: 'List',
  components: { DataProvider, Users },
};
</script>
