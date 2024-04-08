let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
let txt = document.querySelector("#txt")
button1.addEventListener("click", () => {
    let raqamlar= input1.value;
    let arrey =[]
    let raqam =raqamlar.split('').reverse()
    raqam.forEach((l)=>{
        let m=Number(l)
        arrey.push(m)
    })
    console.log(arrey)
  txt.textContent += '['+arrey+']                           '
});
button2.addEventListener("click", () => {
    let a= input1.value
    let b= input2.value;
    if(a<b){
        let arrey =[]
        for(a;a<=b;a++){
            arrey.push(a)
        }
        console.log(arrey)
        txt.textContent += '['+arrey+']                                  ';
    }else{
        txt.textContent +='siz A=dan B=ni kichik qilib qydinggiz Yoki B=ga qiymat bermadinggiz                                       '

    }
});
button3.addEventListener("click", () => {
    let raqamlar= input1.value;
    let yigindi1 =0
    let arrey =[]
    let raqam =raqamlar.split('')
    raqam.forEach((l)=>{
        let m=Number(l)
        arrey.push(m)
        yigindi1+=Number(m)
    })
    console.log(arrey)
    if(arrey[0]>=0){
        txt.textContent += 'B=['+arrey+']'+'+='+yigindi1+'                                         '

    }
  let raqamlar2= input2.value;
  let yigindi =0
    let arrey2 =[]
    let raqam2 =raqamlar2.split('')
    raqam2.forEach((l)=>{
        let m=Number(l)
        arrey2.push(m)
        yigindi+=Number(m)
    })
    let ng =yigindi1+yigindi
    
    
    console.log(arrey2)
    if(arrey2[0]>=0){
        txt.textContent += 'B=['+arrey2+']'+'+='+yigindi+'                                         '

    }
    if(arrey2[0]>=0&&arrey[0]>=0){
        txt.textContent += 'Yigindi'+ng+'                                        '

    }

});
button4.addEventListener("click", () => {
    let raqamlar= input1.value;
    let yigindi1 =0
    let arrey =[]
    let l = arrey
    let raqam =raqamlar.split('')
    raqam.forEach((l)=>{
        let m=Number(l)
        arrey.push(m)
        yigindi1+=Number(m)
    })
    console.log(arrey)
    l.sort((a, b) => a - b);
    console.log(String(l[0]))
    let x =Number(l[0])
    let m=x*x*x*x

  txt.textContent += 'A=eng kichigi '+l[0]+'                                           '
  txt.textContent += '4=inchi darajasi '+m+'                                '
});
button5.addEventListener("click", () => {
    let raqamlar= input1.value;
    let arrey =''
    let raqam =raqamlar.split('').reverse()
    console.log(raqam)
    raqam.forEach((k)=>{
        arrey+=k
    })
    console.log(arrey)
  txt.textContent +=arrey+'                                  '
});
button6.addEventListener("click", () => {
  txt.textContent=null
});
