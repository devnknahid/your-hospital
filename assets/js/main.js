const containerFluid = document.querySelectorAll('.container-fluid');
const darkMode = document.getElementById('darkMode');
const darkIcon = document.getElementById('darkIcon');
// const whiteIcon = document.getElementById('whiteIcon');
darkMode.addEventListener('click', () => {
   if (darkMode.classList.toggle('darkMode')) {
      darkIcon.setAttribute('class', 'fas fa-sun');
      document.body.classList.remove('dark');
      containerFluid.forEach(function (item) {
         item.classList.remove('dark');
      })

   } else {
      darkIcon.setAttribute('class', 'fas fa-moon');
      document.body.classList.remove('dark');

      containerFluid.forEach(function (item) {
         item.classList.add('dark');
      })
   }
})