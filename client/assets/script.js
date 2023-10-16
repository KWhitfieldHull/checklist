window.addEventListener("DOMContentLoaded", () => {


  const allTabs = document.querySelector("#all-tab-pane");
  const currentTabs = document.querySelector("#current-tab-pane");
  const completedTabs = document.querySelector("#completed-tab-pane");
  const addTaskButton = document.querySelector("#addTask");
  let iterator = 0;

  const createCheckbox = (id, labelValue) => {
    const container = document.createElement('div')
    container.classList.add('form-check')
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.id = `checkbox-${id}`
    input.classList.add('form-check-input')
    container.appendChild(input)
    const label = document.createElement('label')
    label.for = `checkbox-${id}`
    label.classList.add('form-check-label')
    label.innerHTML = labelValue;
    container.appendChild(label)
    allTabs.appendChild(container)
  }
  addTaskButton.addEventListener('click', () => {
    const value = document.querySelector("#AddTaskButton").value;
    createCheckbox(iterator, value)
    iterator++
  })
})


const getAllItems = async () => {
  try {
    const response = await fetch("http://localhost:3003/checklist");
    const obj = await response.json();
    const items = await obj.data;
    items.forEach(async (item) => {
      const e = await addItem(item)
      allTabs.appendChild(e)
    })
  } catch (err) {
    console.error(err)
  }
};
getAllItems()

// add item
const addItem = async (item) => {
  const content = document.createElement('div')
  let id = item['id']
  let bid = await getBidById(id)
  content.id = `item-${id}`
  content.innerHTML = `
            
`
  return content;
}
