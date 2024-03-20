<script>
    import { createEventDispatcher } from "svelte";
    export let start;
    const dispatch = createEventDispatcher()
    
  let countdownTime = 10; // 1 hour in seconds


  const countdownInterval = setInterval(() => {
    countdownTime--;
    if (countdownTime < 0) {
      dispatch('message', {start} );
      clearInterval(countdownInterval);
    }
  }, 1000);
</script>
<span>
   {Math.floor((countdownTime % 3600) / 60) > 0
      ? `${Math.floor((countdownTime % 3600) / 60)}:`:""}
    {countdownTime % 60 > 0 ? `${countdownTime % 60}`.padStart(2, 0):""}
</span>