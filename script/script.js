document.getElementById('whatsappButton').addEventListener('click', function() {
    var phoneNumber = '5541999016061'; // Substitua pelo seu número de telefone
    var whatsappLink = 'https://wa.me/' + phoneNumber;
    window.open(whatsappLink, '_blank');
  });