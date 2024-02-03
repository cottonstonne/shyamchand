let ptr=0;
const changefont=()=>{
    let obj=document.getElementById("chfont");
    const arr = [
    'fruktur',
    'Kablammo',
    'finger paint',
    'karnky',
    'henny penny'
]
    ptr+=1;
    ptr=ptr%(arr.length);
    obj.style.fontFamily=`${arr[ptr]}`;
}
setInterval(()=>{
    changefont();
},1000)

const links={
    gmail:"https://mail.google.com/mail/u/1/?view=cm&fs=1&to=shyamchand118@gmail.com&tf=1",
    linkein:"https://www.linkedin.com/in/shyam-chand-6b603723b/",
    github:"https://github.com/cottonstonne/",
    leetcode:"https://leetcode.com/shyamchand/",
    instagram:"https://www.instagram.com/shyam_vd/"
}

const openlink=(str)=>{
    console.log(str);
    window.open(links[str]);
}
