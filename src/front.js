const happy_img = document.getElementById('happy_pic');
const sad_img = document.getElementById('sad_pic');
const img_cont = document.getElementById('image_container');
const nervous_gif = document.getElementById('nervous_gif');

document.getElementById('no_but').addEventListener('mouseenter', function(){
     document.getElementById('sad_pic').classList.add('show');
     nervous_gif.style.display ='none';
     happy_img.style.display ='none';
    sad_img.style.display ='flex';

 });

 document.getElementById('no_but').addEventListener('mouseleave', function(){
    document.getElementById('sad_pic').classList.remove('show');
    nervous_gif.style.display ='flex';
     happy_img.style.display ='none';
     sad_img.style.display ='none';

 });

 document.getElementById('yes_but').addEventListener('mouseenter', function(){
    document.getElementById('happy_pic').classList.add('show');
    nervous_gif.style.display ='none';
     happy_img.style.display ='flex';
     sad_img.style.display ='none';
 });

 document.getElementById('yes_but').addEventListener('mouseleave', function(){
    document.getElementById('happy_pic').classList.remove('show');
    nervous_gif.style.display ='flex';
     happy_img.style.display ='none';
    sad_img.style.display ='none';

 });

 document.getElementById('yes_but').addEventListener('click', function(){

    document.getElementById('front_page').style.display ='none';  
    document.getElementById('giving_flowers_container').style.display ='flex';


 });


 document.getElementById('no_but').addEventListener('click', function(){

        window.location.href = 'https://youtu.be/K3Qzzggn--s?t=46'

 });

document.getElementById('choice_1').addEventListener('click' ,function(){


    document.getElementById('empty_modal').style.display ='flex';
    document.getElementById('the_beanery_menu').style.display ='flex';
    document.getElementById('empty_modal_bg').style.display ='flex';
    document.getElementById('cafe_natalia_menu').style.display ='none';
    document.getElementById('sukoname_menu').style.display ='none';



});

document.getElementById('choice_4').addEventListener('click' ,function(){


    document.getElementById('empty_modal').style.display ='flex';
    document.getElementById('empty_modal_bg').style.display ='flex';
    document.getElementById('the_beanery_menu').style.display ='none';
    document.getElementById('cafe_natalia_menu').style.display ='flex';
    document.getElementById('sukoname_menu').style.display ='none';



});


document.getElementById('choice_5').addEventListener('click' ,function(){


    document.getElementById('empty_modal').style.display ='flex';
    document.getElementById('empty_modal_bg').style.display ='flex';
    document.getElementById('the_beanery_menu').style.display ='none';
    document.getElementById('cafe_natalia_menu').style.display ='none';
    document.getElementById('sukoname_menu').style.display ='flex';



});

document.getElementById('click_mo_ko').addEventListener('click' ,function(){


    window.location.href = "https://www.google.com/maps/@14.6771579,120.5367196,3a,75y,105.68h,75.92t/data=!3m6!1e1!3m4!1sNEOkGQ1tiYgOvLj0GyBKoQ!2e0!7i16384!8i8192?entry=ttu";


});

document.getElementById('click_mo_ko_2').addEventListener('click' ,function(){


    window.location.href = "https://www.google.com/maps/@14.6774322,120.5372212,3a,75y,144.19h,77.49t/data=!3m6!1e1!3m4!1sP-5eIW6bWUtTPXJlcX5QWw!2e0!7i16384!8i8192?entry=ttu";


});

document.getElementById('click_mo_ko_3').addEventListener('click' ,function(){


    window.location.href = "https://www.google.com/maps/@14.6774322,120.5372212,3a,75y,144.19h,77.49t/data=!3m6!1e1!3m4!1sP-5eIW6bWUtTPXJlcX5QWw!2e0!7i16384!8i8192?entry=ttu";


});


document.getElementById('natalia_close').addEventListener('click' ,function(){


    document.getElementById('empty_modal').style.display ='none';
    document.getElementById('empty_modal_bg').style.display ='none';


});

document.getElementById('beanery_close').addEventListener('click' ,function(){


    document.getElementById('empty_modal').style.display ='none';
    document.getElementById('empty_modal_bg').style.display ='none';


});

document.getElementById('sukoname_close').addEventListener('click' ,function(){


    document.getElementById('empty_modal').style.display ='none';
    document.getElementById('empty_modal_bg').style.display ='none';


});




