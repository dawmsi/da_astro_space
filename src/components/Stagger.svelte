<script>
  import { onMount, onDestroy } from 'svelte';
  import anime from 'animejs';

  const colors = [
    'rgb(119, 0, 255)',
    'rgb(94, 86, 90)',
    'rgb(169, 203, 183)',
    'rgb(0,0,0)',
    'rgb(255, 170, 79)',
    'rgb(255,255,255)',
    'rgb(255, 10, 10);',
    'rgb(255, 91, 79)',
  ];

  let tiles = [];
  let currentColor = 'white';
  let columns = currSize('innerWidth');
  let rows = currSize('innerHeight');
  let count = -1;
  let lastClickedIndex = 0;
  let intervalId;

  function currSize(l) {
    return Math.floor(window[l] / 40);
  }

  function createTiles() {
    columns = currSize('innerWidth');
    rows = currSize('innerHeight');

    tiles = Array.from(Array(columns * rows)).map(
      (_, index) => ({
        id: index,
        onClick: () => {
          lastClickedIndex = index;
        },
      })
    );
  }

  onMount(() => {
    createTiles();
    lastClickedIndex = tiles.length / 2;
    intervalId = setInterval(() => {
      count += 1;
      currentColor = colors[count % (colors.length - 1)];
      anime({
        targets: '.tile',
        color: currentColor,
        scale: [
          {
            value: 1.35,
            easing: 'easeOutSine',
            duration: 250,
          },
          {
            value: 1,
            easing: 'easeInOutQuad',
            duration: 500,
          },
        ],
        translateY: [
          {
            value: -15,
            easing: 'easeOutSine',
            duration: 250,
          },
          {
            value: 15,
            easing: 'easeInOutQuad',
            duration: 500,
          },
        ],
        opacity: [
          {
            value: 1,
            easing: 'easeOutSine',
            duration: 250,
          },
          {
            value: 0.5,
            easing: 'easeInOutQuad',
            duration: 500,
          },
        ],
        delay: anime.stagger(120, {
          grid: [columns, rows],
          from: lastClickedIndex,
        }),
      });
    }, 3000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<svelte:window on:resize={createTiles} />

<div
  class="tiles"
  style="--columns: {columns}; --rows: {rows}">
  {#each tiles as tile (tile.id)}
    <button
      data-index={tile.id}
      class="tile text-xs"
      on:click={tile.onClick}>
      {`${'🤬'}`}
      <div
        class="bg-[#533566] rounded-sm py-2 {lastClickedIndex ===
          tile.id && 'bg-orange-300'}"
        style="color: {currentColor}">
        {`${'#%!'}`}
      </div>
    </button>
  {/each}
</div>

<style>
  .tiles {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
  }
  .tile {
    border-radius: 100%;
    margin-inline: 8px;
    margin-block: 8px;
    font-weight: bold;
    font-size: xx-large;
  }
</style>
