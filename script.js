function toggleMobileMenu(menu) {
	menu.classList.toggle('open');
}


const filterBtn = document.querySelectorAll('.willow')
var lastClickedBtn = filterBtn[0]
alert(filterBtn.length)
for (let i = 0; i < filterBtn.length; i++) {
	alert("hello2")
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.replaceAll(" ", "")
    filterFunc(selectedValue)

    lastClickedBtn.classList.remove("active")
    this.classList.add("active")
    lastClickedBtn = this
  })
}

const filterItems = document.querySelectorAll("[data-filter-item]")
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
  let Categ = filterItems[i].dataset.category
  let CatSplit = Categ.split(' ')
    if (selectedValue === "All") {
      filterItems[i].classList.add("active")
    } else if (CatSplit.includes(selectedValue)) {
      filterItems[i].classList.add("active")
    } else {
      filterItems[i].classList.remove("active")
    }
  }
}
