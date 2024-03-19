<!-- todo App: 
form to add to the task.
each li has a timer which countdown from t-60
when it reaches zero task is eliminated whether you do it or not.
-->
<script>
    import "$lib/styles/style.css"
    import Timer from "$lib/components/Timer.svelte"
    let tasks = [];
    let inputValue;
    function handleKeyDown(e){
        if(e.key=="Enter"){
            addTask()
        }
    }

    function destroy(){
        console.log('self destruct')
        tasks = tasks.pop()
        tasks = tasks;
    }
    function addTask(){
        tasks = [...tasks, inputValue]
        inputValue=""
    }
</script>
<div class="container">
    <h1>Self Destructing Todo</h1>
    <h3>Add the item you want to do for next one hour. it will delte itself after 1 hour</h3>
    <div>
        <input on:keydown={handleKeyDown} bind:value={inputValue} placeholder="add task"/>
        <button on:click={addTask}>submit</button>
    </div>
    <ul class="list">
        {#each tasks as task}
            <li>
             <div on:message={destroy} class="wrap">
                <span>{task}</span>
                <span on:message><Timer/></span>
             </div>
        {/each}
    </ul>
</div>
<style>
.container {
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #03031c;
	min-height: 100vh;
}
    .wrap {
        display: flex;
        gap:2em;
    }
    h1, h3, ul {
        color:white;
    }

    h1 {
        margin-bottom: 3px;
    }
    h3 {
        margin-top:0;
    }
    .list {
        list-style: none;
    }
</style>