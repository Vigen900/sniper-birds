
function gun(element){
    if (+document.getElementById('cartridge-count').innerHTML == 0){
        return 
    }
    document.getElementById('score').innerHTML = +document.getElementById('score').innerHTML +1
    const left = getLeftPosition(element)
    console.log(left)
    element.style.left = left
    element.className = element.className + ' failing'
    setTimeout(()=>{
        element.className = element.className.replace('failing', '')
        element.style.left = 0
    },4000)
}
window.onclick = function(){
    if (+document.getElementById('cartridge-count').innerHTML == 0){
        return 
    }
    document.getElementById('cartridge-count').innerHTML = +document.getElementById('cartridge-count').innerHTML -1
}
function getLeftPosition(animatedElement) {
    const computedStyle = window.getComputedStyle(animatedElement);
    const leftPosition = computedStyle.getPropertyValue('left');
    console.log('Left position:', leftPosition);
    return leftPosition
}