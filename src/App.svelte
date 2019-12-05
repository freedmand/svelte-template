<script>
  import { routes, resolvedRoute, currentUrl } from "@/router/router";
  import { onMount } from "svelte";

  onMount(() => {
    currentUrl.set(window.location.pathname);
    if (!history.state) {
      window.history.replaceState(
        { path: window.location.pathname },
        "",
        window.location.href
      );
    }
  });

  function handleBackNav(e) {
    currentUrl.set(e.state.path);
  }
</script>

<svelte:window on:popstate={handleBackNav} />

<svelte:component this={$resolvedRoute.component} {...$resolvedRoute.props} />
