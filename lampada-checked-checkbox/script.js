const turnOn = document.getElementById('onoff');
const turnOff = document.getElementById('onoff');
const lamp = document.getElementById('lamp');
const checkbox = document.getElementById('onoff')   ;

    function isCheck(){
        if(!isBroken()){
            if(checkbox.checked){
                lamp.src='./images/ligada.jpg'

            }else{
                lamp.src='./images/desligada.jpg'
            }
        }
    }

function isBroken(){
    return lamp.src.indexOf ('quebrada')>-1//função para verificar se a lampada está quebrada
}

function lampOn(){
    if(!isBroken()){
    lamp.src='./images/ligada.jpg'
    
    }
    
}

function lampOff(){
    if(!isBroken()){
    lamp.src='./images/desligada.jpg'
    }
    
}

function lampBroken(){
    lamp.src='./images/quebrada.jpg'
}

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)