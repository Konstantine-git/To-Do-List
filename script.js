const taskInput = document.getElementById("task_input")
const addBtn = document.getElementById("add_btn")
const block = document.getElementById("wrapper_element")

addBtn.addEventListener("click", function(){

    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        
        const taskBlock = document.createElement("div")
        taskBlock.classList.add("task-block")

        const taskP = document.createElement("p")
        taskP.textContent = taskText
        
        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-solid", "fa-trash")

        deleteIcon.addEventListener("click", () => {
            taskBlock.remove();
        })

        taskBlock.appendChild(taskP)
        taskBlock.appendChild(deleteIcon)
        block.appendChild(taskBlock)

        taskInput.value = ""

    }
    
})