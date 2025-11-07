var arr = [
    {
        dp: "photo-1562572159-4efc207f5aff.avif",
        story: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
    },
     {
        dp: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        story: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
    },
      {
        dp: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        story: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        story: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974"
    },
    
    
]

var storiyan = document.querySelector("#storiyan");
var clutter = ""
//elem is the object of the array which is accessed one after another
// idx is index of the object
arr.forEach(function (elem,idx) { 
    console.log(elem, idx);
    clutter += `<div class="story">
                <img id ="${idx}" src="${elem.dp}" alt="">
            </div>`
   // is a template literals
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) { 
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    
    
    setTimeout(function () {
       document.querySelector("#full-screen").style.display = "none";
     },3000)
})

