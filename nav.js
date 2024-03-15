document.addEventListener('DOMContentLoaded', () =>{
const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
});
const closeButton = document.querySelector('closebutton');
     closeButton.addEventListener('click', () =>{
        sidebar.classList.toggle.remove('active');
        content.classList.toggle.remove('active');
     });
    });