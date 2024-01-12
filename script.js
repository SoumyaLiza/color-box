let Cont=document.querySelector('.cont')
for(i=0;i<100;i++){
    let col=generatecol()
    let colbox=document.createElement('div')
    colbox.classList.add('colbox')
    colbox.innerHTML=`
    <div style="background-color:${col} ;"></div>
            <p>${col}</p>
            `
    Cont.appendChild(colbox)
}
function generatecol(){
    let hcol=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let s='#'
    for(let i=0;i<6;i++){
        let ran=Math.floor(Math.random()*hcol.length)
        s+=hcol[ran]
    }
    return s
}
