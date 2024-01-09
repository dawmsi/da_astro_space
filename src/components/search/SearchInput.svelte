<script>
  import { onMount } from 'svelte';
  import { debounce } from '../../utils/debounce';
  import { searchQuary } from '../../stores';
  export let id = '';

  onMount(() => {
    const urlParams = new URLSearchParams(
      window.location.search
    );
    $searchQuary = urlParams.get('search');
  });

  function changeHandler() {
    const urlParams = new URLSearchParams(
      window.location.search
    );

    if ($searchQuary) {
      urlParams.set('search', $searchQuary);
    } else {
      urlParams.delete('search');
    }

    const queryString = urlParams.toString();
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;

    window.history.replaceState(null, '', newUrl);
  }
  let debounced = debounce(changeHandler, 500);
</script>

<input
  name="search-input"
  id={!!id ? String(id) : null}
  class={`bg-[#00000013] dark:bg-[#f7f7f708] placeholder:text-[#00000053] dark:placeholder:text-[#f7f7f773] outline-none align-middle leading-[11px] pt-[9px] ${
    $$props.class ?? ''
  }`}
  type="text"
  placeholder="Search"
  maxlength="30"
  bind:value={$searchQuary}
  on:input={() => debounced()} />
