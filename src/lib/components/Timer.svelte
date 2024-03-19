<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
    
  let countdownTime = 10; // 1 hour in seconds


  const countdownInterval = setInterval(() => {
    countdownTime--;
    if (countdownTime < 0) {
      clearInterval(countdownInterval);
      dispatch('message', null);
    }
  }, 1000);
</script>
   {Math.floor((countdownTime % 3600) / 60) > 0
      ? `${Math.floor((countdownTime % 3600) / 60)}:`
      : ""}
    {countdownTime % 60 > 0 ? `${countdownTime % 60}`.padStart(2, 0) : ""}
