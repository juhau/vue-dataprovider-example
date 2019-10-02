const DataProvider = {
  created() {
    this.loadData();
  },
  computed: {
    data() {
      return this.$store.getters['users/get'];
    },
    loading() {
      return this.$store.getters['users/loading'];
    },
  },
  methods: {
    loadData() {
      this.$store.dispatch('users/load');
    },
  },
  render() {
    return this.$scopedSlots.default({
      loading: this.loading,
      data: this.data,
    });
  },
};

export default DataProvider;
