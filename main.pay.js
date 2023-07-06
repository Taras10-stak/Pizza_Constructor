

send.onclick = function(){
   if (email.value) {
     alert('Відправлено');
     notificationContainer.style.display = 'flex';
     wrap.style.filter = 'blur(10px)';
     email.value = '';
   } else {
     email.placeholder = 'Обов`язкове поле';
   }
 }

 document.getElementById('closeBtn').onclick = function() {
  window.location.href = 'index.html';
};

