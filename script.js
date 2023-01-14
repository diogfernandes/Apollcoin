// Buttons

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"});
})

const project = document.querySelector('#project');

project.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"});
})

const blockchain = document.querySelector('#blockchain');

blockchain.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*1.8, behavior: "smooth"});
})

const invest = document.querySelector('#invest');

invest.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*3.8, behavior: "smooth"});
})

// Progress Bar

const progress = document.getElementById('progress-bar');

const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


