document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve retornaremos.');
  this.reset();
});
const carrossel = document.getElementById('carrossel');

let scrollPos = 0;
const velocidade = 1; 

function autoScroll() {
  scrollPos += velocidade;
  carrossel.scrollLeft = scrollPos;

  
  if (scrollPos >= carrossel.scrollWidth - carrossel.clientWidth) {
    scrollPos = 0;
  }

  requestAnimationFrame(autoScroll); 
}



autoScroll(); 

