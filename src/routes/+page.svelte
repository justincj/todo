<script>
    import "$lib/styles/style.css"
    import Timer from "$lib/components/Timer.svelte"
    let tasks = [];
    let inputValue;
    let checked=false;
    function handleKeyDown(e){
        if(e.key=="Enter"){
            addTask()
        }
    }

    function addTask(){
        if(!inputValue){
            return;
        }
        tasks = [...tasks, {start:Date.now(), inputValue}]
        inputValue=""
    }

    function handleMessage(event){
       tasks=tasks.filter(task=>task.start!=event.detail.start)
       console.log(tasks)
    }

    function removeTask(start){
        tasks = tasks.filter(task=>task.start != start);
    }
</script>
<div class="container">
    <header>
        <h1>SELFDESTRUCT COUNTDOWN</h1>
        <p>Add a task and It will self destruct in exactly 1 hour</p>
    </header>
    <main>
    <div  class="addTask">
        <input on:keydown={handleKeyDown} bind:value={inputValue} placeholder="add task"/>
        <button on:click={addTask}>submit</button>
    </div>
    <ul class="list">
        {#each tasks as task (task.start)}
            <li class="list-item">
                <input type="checkbox" on:change={()=>removeTask(task.start)} bind:value={checked}/>
                <span>{task.inputValue.trim()} </span>
                <span>  <Timer start={task.start} on:message={handleMessage}/></span>
             </li>
        {/each}
    </ul>
    </main>
</div>
<style>

:global(body) {
    background:#dce1f8;
	min-height: 100vh;
    font-family: 'Courier New', Courier, monospace;
}

.container {
    max-width: 800px;
    margin:0 auto;
}


header {
    color: black;
    /* background:#ddedfa; */
    margin:0 auto;
    width: 70%;
    /* border: 4px solid #4dabf7; */
    text-align: center;
}

main {
    margin-top:2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.addTask {
    display: grid;
    grid-template-columns: 1fr auto;
    gap:30px;
    padding:2rem;
    background:#ddedfa;
    border: 4px solid #4dabf7;
    border-radius: 10px;
    width:70%;
}

.list {
    padding:0;
    list-style: none;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap:5px;

}

.list-item {
    background:#eedbe2;
    font-size: 1.2rem;
    width: 100%;
    border:4px solid #f5a0a6;
    border-radius: 10px;
    margin-left:0;
    display: flex;
    justify-content: space-around;
}


</style>