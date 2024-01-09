<script>
  import { onMount } from 'svelte';
  import { animated } from '../../stores';
  const uniqueId = `${'id' + crypto.randomUUID()}`;

  const LSItemName = 'animated';
  const className = LSItemName;

  let starBackground;

  onMount(() => {
    starBackground = document.documentElement;
    animated.set(
      JSON.parse(localStorage.getItem(LSItemName)) !== false
    );
  });

  function changeHandler() {
    if ($animated) {
      starBackground.classList.add(className);
      localStorage.setItem(LSItemName, true);
    } else {
      starBackground.classList.remove(className);
      localStorage.setItem(LSItemName, false);
    }
  }
</script>

<label
  for={uniqueId}
  class="select-none cursor-pointer flex items-center w-fit rounded-full font-bold uppercase">
  <input
    hidden
    bind:checked={$animated}
    id={uniqueId}
    type="checkbox"
    on:change={changeHandler} />
  {$animated ? 'on' : 'off'}
</label>
