const happy_img = document.getElementById('happy_pic');
const sad_img = document.getElementById('sad_pic');
const img_cont = document.getElementById('image_container');

document.getElementById('no_but').addEventListener('mouseenter', function(){
     img_cont.classList.add('show');
     happy_img.style.display ='none';
    sad_img.style.display ='flex';

 });

 document.getElementById('no_but').addEventListener('mouseleave', function(){
    img_cont.classList.remove('show');
     happy_img.style.display ='none';
     sad_img.style.display ='none';

 });

 document.getElementById('yes_but').addEventListener('mouseenter', function(){
     img_cont.classList.add('show');
     happy_img.style.display ='flex';
     sad_img.style.display ='none';
 });

 document.getElementById('yes_but').addEventListener('mouseleave', function(){
     img_cont.classList.remove('show');
     happy_img.style.display ='none';
    sad_img.style.display ='none';

 });
 document.getElementById('yes_but').addEventListener('click', function(){

    document.getElementById('date_place').classList.add('show');  
    document.getElementById('front_page').style.display ='none';  
     document.getElementById('date_place').style.display ='flex';

 });


document.getElementById('choice_4').addEventListener('click' ,function(){


    window.location.href = "https://www.google.com/maps/@14.6774322,120.5372212,3a,75y,144.19h,77.49t/data=!3m6!1e1!3m4!1sP-5eIW6bWUtTPXJlcX5QWw!2e0!7i16384!8i8192?entry=ttu";


});


document.getElementById('choice_1').addEventListener('click' ,function(){


    window.location.href = "https://www.google.com/maps/@14.6771579,120.5367196,3a,75y,105.68h,75.92t/data=!3m6!1e1!3m4!1sNEOkGQ1tiYgOvLj0GyBKoQ!2e0!7i16384!8i8192?entry=ttu";


});

