<script>
  import Link from "@/router/Link";

  import { api } from "@/api/api";
</script>

<style lang="scss">
  h1 {
    color: $primary;
  }
</style>

<h1>Hello!</h1>
<div>x: {$api.x}, y: {$api.y}, sum: {$api.sum}</div>
<div>
  <button on:click={() => (api.x += 1)}>Increment x</button>
  <button on:click={() => (api.y += 1)}>Increment y</button>
</div>

<Link to="home">Home</Link>
<Link to="about">About</Link>
<Link to="user" params={{ name: 'bob' }}>Users/Bob</Link>
