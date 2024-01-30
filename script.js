let ptr=0;
const changefont=()=>{
    let obj=document.getElementById("chfont");
    const arr = ['Arial, sans-serif', 'Helvetica, sans-serif', 'Tahoma, sans-serif', 'Trebuchet MS, sans-serif', 'Verdana, sans-serif', 'Georgia, serif', 'Times New Roman, serif', 'Courier New, monospace', 'Lucida Console, monospace', 'Palatino Linotype, Book Antiqua, Palatino, serif', 'Impact, Charcoal, sans-serif', 'Arial Black, Gadget, sans-serif', 'Comic Sans MS, cursive', 'Candara, Calibri, Arial, sans-serif', 'Optima, Segoe, sans-serif'];
    ptr+=1;
    ptr=ptr%(arr.length);
    obj.style.fontFamily=`${arr[ptr]}`;
    console.log(ptr);
}
setInterval(()=>{
    changefont();
},1000)