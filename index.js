let text=document.getElementById('text');
let treeLeft=document.getElementById('tree-left');
let treeRight=document.getElementById('tree-right');
let gateLeft=document.getElementById('gate-left');
let gateRight=document.getElementById('gate-right');

window.addEventListener('scroll',()=>{
    let value= window.scrollY;

    text.style.marginTop= value * 1.3 +'px';
    treeLeft.style.left=value* -0.125 + 'px';
    treeRight.style.left= value* 0.125 + 'px';
    gateLeft.style.left=value* 0.135 + 'px';
    gateRight.style.left= value* -0.135 + 'px';
})