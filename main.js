/* START */
const addCategory = document.querySelector('.add-category');
const sub = document.querySelector('.category-sub');

addCategory.addEventListener('click', () => {
    console.log("Added new category")
    const div = document.createElement('div');
    div.className = "sub";
    const divsub = document.createElement('div');
    divsub.className = "divsub";
    const input = document.createElement('input')
    input.className = "category-input";
    const span = document.createElement('span')
    span.className = "property"
    const buttonCreate = document.createElement('button');
    buttonCreate.className = "create"
    buttonCreate.textContent = "➕"
    buttonCreate.title = "Add"
    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = "✔"
    buttonEdit.className = "edit"
    buttonEdit.title = "Save"
    const buttonDelete = document.createElement('button');
    buttonDelete.className = "delete"
    buttonDelete.textContent = "❌"
    buttonDelete.title = "Delete"
    span.append(buttonCreate, buttonEdit, buttonDelete)
    div.append(input, span)
    sub.append(div)

    buttonCreate.style.display = "none"
})

const categorySub = document.querySelector('.category-sub');
categorySub.addEventListener('click', (e) => {
    const x = e.target;
    if (x.className === "delete") {
        x.parentNode.parentNode.remove()
    } else if (x.className === "edit") {
        const input = x.parentNode.parentNode.firstElementChild;
        const add = x.parentNode.firstElementChild

        input.toggleAttribute('disabled')
        if (x.textContent === '✔') {
            x.textContent = '🖊'
            x.title = "Edit"
            add.style.display = "inline"
        } else {
            x.textContent = "✔"
            x.title = "Save"
            add.style.display = "none"
        }
    } else if (x.className === "create") {
        const divsub = e.target.parentNode.parentNode
        console.log("Added new sub category")
        const div = document.createElement('div');
        div.className = "sub-1";
        const input = document.createElement('input')
        input.className = "category-input";
        const span = document.createElement('span')
        span.className = "property"
        const buttonCreate = document.createElement('button');
        buttonCreate.className = "create"
        buttonCreate.textContent = "➕"
        buttonCreate.title = "Add"
        const buttonEdit = document.createElement('button');
        buttonEdit.textContent = "✔"
        buttonEdit.className = "edit"
        buttonEdit.title = "Save"
        const buttonDelete = document.createElement('button');
        buttonDelete.className = "delete"
        buttonDelete.textContent = "❌"
        buttonDelete.title = "Delete"
        span.append(buttonCreate, buttonEdit, buttonDelete)
        div.append(input, span)
        divsub.append(div)

        buttonCreate.style.display = "none";

    }
})




/* Zoom In and Zoom Out */
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const center = document.querySelector('.center')
var Page = document.querySelector('.categories');
const zoomNumber = document.querySelector(".zoomNumber")
var defaultZoom = 100;
minus.addEventListener('click', () => {
    plus.removeAttribute('disabled')
    defaultZoom -= 10
    console.log(defaultZoom)
    if (defaultZoom === 20) {
        minus.toggleAttribute("disabled")
        console.log("disabled")
    }
    Page.style.zoom = `${defaultZoom}%`
    zoomNumber.innerHTML = defaultZoom + "%"
})
plus.addEventListener('click', () => {
    minus.removeAttribute('disabled')
    defaultZoom += 10
    console.log(defaultZoom)
    if (defaultZoom === 200) {
        plus.toggleAttribute("disabled")
        console.log("disabled")
    }
    Page.style.zoom = `${defaultZoom}%`
    zoomNumber.innerHTML = defaultZoom + "%"
})

center.addEventListener('click', () => {
    defaultZoom = 100
    Page.style.zoom = `${defaultZoom}%`;
    zoomNumber.innerHTML = defaultZoom + "%"
})


/* THE END */