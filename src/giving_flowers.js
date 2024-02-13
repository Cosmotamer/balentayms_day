    const giving_flowers =document.getElementById('giving_flowers_container')
    const gifContainer = document.getElementById('gif_container');
    const gif = document.getElementById('giving_flowers1');
    const gif2 = document.getElementById('giving_flowers_static');


  document.getElementById('take_button').addEventListener('click', function(){


    gif.style.display ='flex';
    gif2.style.display ='none';

    setTimeout(function() {
        giving_flowers.style.display = 'none';
        document.getElementById('date_place').style.display = 'flex';
    }, 2300); // 000

  });
