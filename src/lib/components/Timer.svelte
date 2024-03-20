<script>
    import { createEventDispatcher } from "svelte";
    export let index;
    const dispatch = createEventDispatcher()
    
  let countdownTime = 10; // 1 hour in seconds


  const countdownInterval = setInterval(() => {
    countdownTime--;
    if (countdownTime < 0) {
      dispatch('message', {index:index} );
      clearInterval(countdownInterval);
    }
  }, 1000);
</script>
<span>
   {Math.floor((countdownTime % 3600) / 60) > 0
      ? `${Math.floor((countdownTime % 3600) / 60)}:`:""}
    {countdownTime % 60 > 0 ? `${countdownTime % 60}`.padStart(2, 0):""}
</span>