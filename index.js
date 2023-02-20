
(function(){
    let items = document.querySelector('.items');

    for(let i = 0; i < 7; i++) {
        let item = document.createElement('div');
        item.classList.add('item');
        items.append(item);
    }
})();


(function(){
    let burgerIcon = document.querySelector('.burger-icon');
    let left = document.querySelector('.left');
    let bg = document.querySelector('.bg');
    let parent = document.querySelector('.parent');

    burgerIcon.addEventListener('click', () => {
        left.style.left = '0px';
        bg.style.display = 'block';
    })

    bg.addEventListener('click', (e) => {
       if(e.target.classList.contains('bg')) {
        left.style.left = '-2000px';
        e.target.style.display = 'none';
       }
    })


    parent.addEventListener('click', (event)=> {
        if(event.target.tagName === 'A') {
            left.style.left = '-2000px';
            bg.style.display = 'none';
        }
    })

})();