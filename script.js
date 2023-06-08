const allowDrop = (e) => {
    e.preventDefault()
}

// handler that handles the dragging of an item
// it stores the id of the item being dragged
const drag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id)
    e.target.classList.add("dragging");
}

// handler that handles the dropping of an item
// uses the id carried by the item and appends it to the container2 DOM
const drop = (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("text/plain")
    const item = document.getElementById(id)
    item.classList.remove('dragging')
    e.target.appendChild(item)
    showMessage('Item dropped successfully!');
    setTimeout(() => showMessage(""),[1000])
}


// handler to show messages
const showMessage = (message) => {
    const messageContainer = document.querySelector('.message');
    messageContainer.textContent = message;
}

const dragitems = document.querySelectorAll('.drag-item')
// storing initial state of DOM of container1 for resetting purpose
let initialContainer1 = []
let initialContainer2 = document.querySelector('.container2').innerHTML

// adding event listeners for all the draggable items
dragitems.forEach(item => {
    initialContainer1.push(item)
    item.addEventListener("dragstart", drag)
})


const dropContainer = document.querySelector('.container2')


// handler that handles resetting
const resetHandler = () => {
    while (dropContainer.lastElementChild) {
        dropContainer.removeChild(dropContainer.lastElementChild);
    }
    initialContainer1.forEach(child => {
        document.querySelector('.container1').appendChild(child)
    })
    document.querySelector('.container2').innerHTML = initialContainer2
    showMessage("Successfully resetted!")
    setTimeout(() => showMessage(""),[1000])
}