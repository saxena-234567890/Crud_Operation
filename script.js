let add = document.getElementById("Addbutton");
add.addEventListener('click', addchapter)
let parentList = document.getElementById("parentList")

function addchapter(e) {
    if (parentList.children[0].className == "newEmptyMessage") {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentChapter = currentInput.value;
    // console.log(currentInput.value);
    let newLi = document.createElement('li');
    // newLi.classList.add('list-group-item');
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapter}</h3> <button class="btn btn-warning mx-3">Edit</button> 
                <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`



    parentList.appendChild(newLi);
}
function removeChapter(currElement) {
    currElement.parentElement.remove();
    let parentList = document.getElementById("parentList")
    if (parentList.children.length <= 0) {
        let newEmptyMessage = document.createElement('h1');
        newEmptyMessage.classList.add("newEmptyMessage")
        newEmptyMessage.textContent = "nothing is here plese add some capter name";
        parentList.appendChild(newEmptyMessage);
    }
}
function editChapter(currElement) {
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit";
        let currentChapterName = currElement.previousElementSibling.value;
        let currnetHeading = document.createElement('h3');
        currnetHeading.className = "mx-grow-1";
        currnetHeading.textContent = currentChapterName;
        currElement.parentElement.replaceChild(currnetHeading, currElement.previousElementSibling);

    }
    else {
        currElement.textContent = "Done"
        let currentChapterName = currElement.previousElementSibling.textContent;
        let currentInput = document.createElement('input');
        currentInput.type = "text";
        currentInput.placeholder = "Chapter Name";
        currentInput.className = "form-control";
        currentInput.value = currentChapterName;
        currElement.parentElement.replaceChild(currentInput, currElement.previousElementSibling);
    }
}
