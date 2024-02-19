const container = document.querySelector('.container')
const btns = document.querySelector('.btn')
const imgageslist = ["1","2","3","4"]

let index=0
btns.forEach((button) => {
    button.addeventlistenner('click',()=>{
       console.log('clicked')
      if(button.classList.contains('btn-left')){
        index--;
        if(index<0){
            index = imgageslist.lenght-1;
        }
        container.style.background =url("images/${imagesList[index]}.png");
      
      }
      else{
        index;
        if(index===imgagesList.length){
            index = 0;
        }
        container.style.background =url("images/${imagesList[index]}.png");
      } 
    })
})