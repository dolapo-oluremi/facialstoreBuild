window.addEventListener('load', () =>{
    var menuIcon = document.getElementById('menuStrip')
    menuIcon.addEventListener('click', ()=>{
        menuIcon.classList.toggle('change')
    })

    const buyBtn = document.getElementsByClassName('buyBtn');
  for(var i = 0; i < buyBtn.length; i++){
      const thisBuyBtn = buyBtn[i]
    thisBuyBtn.addEventListener('click', function(event){
        const thisItem = event.target;
        const thisItemName = thisItem.parentElement.firstChild.innerText;
        const thisItemPrice =  thisItem.parentElement.children[2].innerText.slice(1, 5);

        
        console.log(thisItemPrice);
    })
  }







})