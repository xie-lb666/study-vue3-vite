<!-- <script lang="jsx">
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    count() {
      this.counter++;
    },
  },
  render(h) {
    return (
      <>
        {" "}
        <div>jsxcom</div>
        <h1 onClick={this.count}>{this.counter}</h1>
      </>
    );
  },
};
</script>

<style lang="scss" scoped></style> -->

<!-- <script lang="jsx">
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const onclick = () => {
      counter.value++;
    };
    return () => (
      <>
        {" "}
        <div>jsxcom</div>
        <h1 onClick={onclick}>{counter.value}</h1>
      </>
    );
  },
};
</script> -->
