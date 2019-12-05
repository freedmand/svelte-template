<script>
  import Link from "@/router/Link";
</script>

<style lang="scss">
  h1 {
    color: $primary;
  }
</style>

<h1>Hello!</h1>
<Link to="home">Home</Link>
<Link to="about">About</Link>
<Link to="user" params={{ name: 'bob' }}>Users/Bob</Link>
