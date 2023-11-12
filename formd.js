document.getElementById("openFormButton").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
    history.pushState({ formOpen: true }, '', '/eightth.github.io');
    
  });
  


  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    var slapform = new Slapform();
    slapform.submit({
    form: 'SdX08q72qr',
    data: {
    name: '',
    message: '',
    }
    })
    .then(function (response) {
    console.log('Success', response)
    })
    .catch(function (e) {
    console.error('Fail', e)
    })

    document.getElementById("popupForm").style.display = "none"; 
  });
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
    window.location.href = "/eightth.github.io/";
  }
