let totalPrice = 0;

$('.item1').hide(0);
$('.choseOpen').hide(0);

$('#chease').click(function(){
   $('#chooseChease').slideToggle(400);
})

$('.fetaGroup').click(function(){
   $('.fetaGroup').hide();
   $('#fetaHide').show(300);
   totalPrice+=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#fetaHide').click(function(){
   $('.fetaGroup').show();
   $('#fetaHide').hide(300);
   totalPrice-=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.mozaGroup').click(function(){
   $('.mozaGroup').hide();
   $('#mozaHide').show(300);
   totalPrice+=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#mozaHide').click(function(){
   $('.mozaGroup').show();
   $('#mozaHide').hide(300);
   totalPrice-=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.chederGroup').click(function(){
   $('.chederGroup').hide();
   $('#chederHide').show(300);
   totalPrice+=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#chederHide').click(function(){
   $('.chederGroup').show();
   $('#chederHide').hide(300);
   totalPrice-=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.bluGroup').click(function(){
   $('.bluGroup').hide();
   $('#bluHide').show(300);
   totalPrice+=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#bluHide').click(function(){
   $('.bluGroup').show();
   $('#bluHide').hide(300);
   totalPrice-=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.parmGroup').click(function(){
   $('.parmGroup').hide();
   $('#parmHide').show(300);
   totalPrice+=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#parmHide').click(function(){
   $('.parmGroup').show();
   $('#parmHide').hide(300);
   totalPrice-=30;
   $('.total').text('Сума: '+totalPrice+' грн');
})


$('#meet').click(function(){
   $('#chooseMeet').slideToggle(400);
})

$('.chickenGroup').click(function(){
   $('.chickenGroup').hide();
   $('#chikenHide').show(300);
   totalPrice+=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#chikenHide').click(function(){
   $('.chickenGroup').show();
   $('#chikenHide').hide(300);
   totalPrice-=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.bekonGroup').click(function(){
   $('.bekonGroup').hide();
   $('#bekonHide').show(300);
   totalPrice+=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#bekonHide').click(function(){
   $('.bekonGroup').show();
   $('#bekonHide').hide(300);
   totalPrice-=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.shynkaGroup').click(function(){
   $('.shynkaGroup').hide();
   $('#shynkaHide').show(300);
   totalPrice+=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#shynkaHide').click(function(){
   $('.shynkaGroup').show();
   $('#shynkaHide').hide(300);
   totalPrice-=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.paperoniGroup').click(function(){
   $('.paperoniGroup').hide();
   $('#paperoniHide').show(300);
   totalPrice+=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#paperoniHide').click(function(){
   $('.paperoniGroup').show();
   $('#paperoniHide').hide(300);
   totalPrice-=40;
   $('.total').text('Сума: '+totalPrice+' грн');
})


$('#sous').click(function(){
   $('#chooseSous').slideToggle(400);
})

$('.alfredoGroup').click(function(){
   $('.alfredoGroup').hide();
   $('#alfredoHide').show(300);
   totalPrice+=15;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#alfredoHide').click(function(){
   $('.alfredoGroup').show();
   $('#alfredoHide').hide(300);
   totalPrice-=15;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.barbequGroup').click(function(){
   $('.barbequGroup').hide();
   $('#barbequHide').show(300);
   totalPrice+=15;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#barbequHide').click(function(){
   $('.barbequGroup').show();
   $('#barbequHide').hide(300);
   totalPrice-=15;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.chasnykGroup').click(function(){
   $('.chasnykGroup').hide();
   $('#chasnykHide').show(300);
   totalPrice+=15;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#chasnykHide').click(function(){
   $('.chasnykGroup').show();
   $('#chasnykHide').hide(300);
   totalPrice-=15;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('#veg').click(function(){
   $('#chooseVeg').slideToggle(400);
})

$('.kukurudzaGroup').click(function(){
   $('.kukurudzaGroup').hide();
   $('#kukurudzaHide').show(300);
   totalPrice+=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#kukurudzaHide').click(function(){
   $('.kukurudzaGroup').show();
   $('#kukurudzaHide').hide(300);
   totalPrice-=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.ananasGroup').click(function(){
   $('.ananasGroup').hide();
   $('#ananasHide').show(300);
   totalPrice+=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#ananasHide').click(function(){
   $('.ananasGroup').show();
   $('#ananasHide').hide(300);
   totalPrice-=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.tomatoGroup').click(function(){
   $('.tomatoGroup').hide();
   $('#tomatoHide').show(300);
   totalPrice+=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#tomatoHide').click(function(){
   $('.tomatoGroup').show();
   $('#tomatoHide').hide(300);
   totalPrice-=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.grubGroup').click(function(){
   $('.grubGroup').hide();
   $('#grubHide').show(300);
   totalPrice+=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#grubHide').click(function(){
   $('.grubGroup').show();
   $('#grubHide').hide(300);
   totalPrice-=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.shpunatGroup').click(function(){
   $('.shpunatGroup').hide();
   $('#shpunatHide').show(300);
   totalPrice+=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#shpunatHide').click(function(){
   $('.shpunatGroup').show();
   $('#shpunatHide').hide(300);
   totalPrice-=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})

$('.peretsGroup').click(function(){
   $('.peretsGroup').hide();
   $('#peretsHide').show(300);
   totalPrice+=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})
$('#peretsHide').click(function(){
   $('.peretsGroup').show();
   $('#peretsHide').hide(300);
   totalPrice-=20;
   $('.total').text('Сума: '+totalPrice+' грн');
})

setTimeout(function(){
   consultContainer.style.bottom = 0;
},1000)

closeBtn.onclick = function(){
   consultContainer.style.bottom = '-430px';
}

document.getElementById('buy').onclick = function() {
   window.location.href = 'index.pay.html';
};




