const body = document.body
const toDoTab = document.getElementById("to_do_tab_heading")
const doneTab = document.getElementById("done_tab_heading")
const toDoWrapper = document.getElementById("main_tab")
const doneWrapper = document.getElementById("done_tab")
const taskInput = document.getElementById("task_input")
const addBtn = document.getElementById("add_btn")
const block = document.getElementById("wrapper_element")
const light = document.getElementById("sun_icon")
const dark = document.getElementById("moon_icon")
const clearAllBtn = document.getElementById("clear_all_btn");
const doneBlock = document.getElementById("done_wrapper");

clearAllBtn.addEventListener("click", () => {
    doneBlock.innerHTML = ""; 
});

let taskText = "";

toDoTab.addEventListener("click", () => {
    toDoWrapper.style.display = "block";
    doneWrapper.style.display = "none";
    toDoTab.classList.add("active-header")
    toDoTab.classList.remove("non-active-header")
    doneTab.classList.add("non-active-header")
    doneTab.classList.remove("active-header")
})

doneTab.addEventListener("click", () => {
    doneWrapper.style.display = "block";
    toDoWrapper.style.display = "none";
    doneTab.classList.add("active-header")
    doneTab.classList.remove("non-active-header")
    toDoTab.classList.add("non-active-header")
    toDoTab.classList.remove("active-header")
    doneTab.appendChild(taskBlock)

    const taskBlock = document.createElement("div")
    taskBlock.classList.add("task-block")
})



addBtn.addEventListener("click", function(){

    taskText = taskInput.value.trim();

    if(taskText !== ""){

        const taskBlock = document.createElement("div")
        taskBlock.classList.add("task-block")

        const taskP = document.createElement("p")
        taskP.textContent = taskText


        const iconWrapper = document.createElement("div")
        iconWrapper.classList.add("icon-wrapper")
        
        const doneIcon = document.createElement("i")
        doneIcon.classList.add("fa-solid", "fa-square-check")

        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-solid", "fa-trash")

        doneIcon.addEventListener("click", () => {

            setTimeout(() => {
                taskBlock.remove();

                const completedTaskText = taskP.textContent

                const doneTask = document.createElement("div")
                doneTask.classList.add("task-block")
                doneTask.textContent = completedTaskText;
                doneTask.style.padding = "0"
                doneTask.style.display = "flex"
                doneTask.style.justifyContent = "space-evenly"
                doneTask.style.alignItems = "center"
                doneTask.style.color = "#c3ced6"

                const clearBtn = document.createElement("button")
                clearBtn.textContent = "Clear"
                clearBtn.classList.add("clear-btn")

                clearBtn.addEventListener("click", () => {
                    doneTask.remove();
                });

                doneTask.appendChild(clearBtn)
                document.getElementById("done_wrapper").appendChild(doneTask)
            }, 1000)
            doneIcon.remove()
            deleteIcon.remove()
            taskBlock.style.backgroundColor = "#2E8B57"
        })

        deleteIcon.addEventListener("click", () => {
            setTimeout(() => {
                taskBlock.remove();
            }, 1000)
            doneIcon.remove()
            deleteIcon.remove()
            taskBlock.style.backgroundColor = "#8B0000"
            localStorage.removeItem("taskText")
        })

        iconWrapper.appendChild(doneIcon)
        iconWrapper.appendChild(deleteIcon)
        taskBlock.appendChild(taskP)
        taskBlock.appendChild(iconWrapper)
        block.appendChild(taskBlock)

        taskInput.value = ""

    }
    
})

light.addEventListener("click", () => {
    dark.classList.remove("moon-on")
    light.classList.add("sun-on")
    body.style.backgroundColor = "#c3ced6"
 })

dark.addEventListener("click", () => {
   dark.classList.add("moon-on")
   light.classList.remove("sun-on")
   body.style.backgroundColor = "#0e1111"
})
