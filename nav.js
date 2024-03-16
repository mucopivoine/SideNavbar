document.addEventListener('DOMContentLoaded', () =>{
const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
});
const closeBtn = document.querySelector(".close-btn");
 closeBtn.addEventListener('click' ,() =>{
    sidebar.classList.remove('active');
    content.classList.remove('active');
 });
});
 
