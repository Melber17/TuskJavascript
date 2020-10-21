let form = document.forms.my;
let arr = [];
form.addEventListener('submit' , (e) => {
  alert('console')
  e.preventDefault();
  let elements = form.elements;
 for(let i = 0 ; i < elements.length ; i++) {

  arr.push(elements[i])
  console.log(elements[i])

}
 console.log(arr)
})
console.log(Array.isArray(arr))