<script>
    import { createEventDispatcher } from "svelte";
    export let start;
    const dispatch = createEventDispatcher()
    
  let countdownTime = 3600; // 1 hour in seconds


  const countdownInterval = setInterval(() => {
    countdownTime--;
    if (countdownTime < 0) {
      dispatch('message', {start} );
      clearInterval(countdownInterval);
    }
  }, 1000);
</script>
<span>
    {Math.floor((countdownTime % 3600) / 60).toString()}:{countdownTime % 60 > 0 ? String(countdownTime % 60).padStart(2, 0):""}
</span>
