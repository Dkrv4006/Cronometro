
function creasegundo(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    });
}

const salva = document.querySelector('.salva')
const container = document.querySelector('.container')

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const apagar = document.querySelector('.apagar')
const zerar = document.querySelector('.zerar')
const mostra = document.querySelector('.mostra')
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = creasegundo(segundos);
    },1000);
}

iniciar.addEventListener('click',function(event){
    clearInterval(timer)
    relogio.style.color = "#0f0f"
    iniciaRelogio()

})
pausar.addEventListener('click',function(event){
    clearInterval(timer)
    relogio.style.color = "red"

})
zerar.addEventListener('click',function(event){
    console.log(timer)
    clearInterval(timer);
     relogio.style.color = "#ffffff"
    relogio.innerHTML = '00:00:00'
    segundos = 0;
})

salva.addEventListener('click',function(event){
    console.log(timer)
    // clearInterval(timer);
    // relogio.innerHTML = '00:00:00'
    // segundos = 0;
    let salvo = relogio.textContent
    const title = document.createElement('h4')
    title.setAttribute('class','daniel')
    const texto = document.createTextNode(salvo)
    title.appendChild(texto)

    document.querySelector('.container').appendChild(title)
  
     
    console.log(title)
    localStorage.setItem("a",texto.textContent)

})

mostra.addEventListener('click',function(event){
    let botton = document.querySelector('.botton')
    let l = container.classList
    
    if("daniel" === l[1]){
        container.classList.toggle('daniel')
        mostra.innerHTML = ''
        apagar.style.display = 'none'
        container.style.display = "none";
        botton.lastElementChild.innerHTML = 'mostra'
        
    }else{
    
        container.style.display = "block";
        container.classList.toggle('daniel')
        apagar.style.display = 'block'
        
        botton.lastElementChild.innerHTML = 'feixa'

    }
    
    
    

    
})
    




apagar.addEventListener('click',function(event){
    container.innerHTML = ''

})


// function carregar(){
//     if(localStorage.info){
//     document.getElementById ("dado").value = localStorage.info;}

