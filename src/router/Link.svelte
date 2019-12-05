<script>
  import { routes, currentUrl, resolvedRoute } from "@/router/router";
  export let to;
  export let params = null;

  function getPath() {
    let path = routes.lookup(to);
    if (params != null) {
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          path = path.replace(`:${param}`, params[param]);
        }
      }
    }
    return path;
  }

  $: toPath = getPath();
  $: active = $resolvedRoute.name == to;

  function nav() {
    // change current router path
    currentUrl.set(toPath);
    // push the path into web browser history API
    window.history.pushState(
      { path: toPath },
      "",
      window.location.origin + toPath
    );
  }
</script>

<style>
  .active {
    font-weight: bold;
  }
</style>

<a class:active href={toPath} on:click|preventDefault={nav}>
  <slot />
</a>
