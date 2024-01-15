$(document).ready(function () {
    // bar almosthere.html  & index.html
    let arrowbackindex = $("#arrowbackindex");
    let hamburgericon = $("#hamburgericon");
    let logotype = $("#logotype");
    let createorlogin = $("#createorlogin");

    let facebookshare = $("#facebookshare");
    let whatsappshare = $("#whatsappshare");
    let telegramshare = $("#telegramshare")
    arrowbackindex.click(function(){
        if(window.location.pathname !== "/index.html"){
            window.history.back()
        }
    })

    logotype.click(function(){
        if(window.location.pathname !== '/index.html'){
            window.location.href = "../index.html"
        }
    })

    createorlogin.click(function(){
        window.location.href = "php/createcc.html"
    })

    facebookshare.click(function(){
        window.location.href = "https://www.facebook.com/sharer/sharer.php?u=https://beatrizyamammotofotos.netlify.app/&quote=Compre%20uma%20rifa%20e%20concorra%20a%20prêmios"
    })
    whatsappshare.click(function(){
        window.location.href = "https://api.whatsapp.com/send?text=Compre%20uma%20Rifa%20e%20Concorra%20a%20um%20Iphone%2014%2C%20por%20apenas%20R%24%201%2C99%20https://beatrizyamammotofotos.netlify.app/&img=https://instagram.fbsb16-1.fna.fbcdn.net/v/t51.2885-15/416889116_1436869697245598_8148463646234573677_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fbsb16-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=occixhLLN1sAX9L0Mc-&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI3Mjk2ODA5MTM5Mzk0Mzg3MA%3D%3D.2-ccb7-5&oh=00_AfDumU1dGKkmRLVqbp5lYi4XksNJgLk-sxnn-L3z77PTYA&oe=65A5CB42&_nc_sid=ee9879"
    })



    // almosthere.html

    $("#copiarpix").on("click", function() {
      // Texto que será copiado
      let textoParaCopiar = "a81c057a-9d14-4267-8f7f-b86da87061ab";

      // Cria um elemento de input temporário
      let inputTemporario = $("<input>");
      $("body").append(inputTemporario);

      // Define o valor do input como o texto a ser copiado
      inputTemporario.val(textoParaCopiar).select();

      // Copia o texto para a área de transferência
      document.execCommand("copy");

      // Remove o elemento de input temporário
      inputTemporario.remove();

      // Exibe uma mensagem ou executa qualquer ação adicional desejada
      console.log("Texto copiado: " + textoParaCopiar);
    });




    let inputTelfone3 = $(".InputfromJS");
    inputTelfone3.on("input",function(){
      let valtel = inputTelfone3.val()
      let lengtel = valtel.length
      console.log(lengtel)
      notAllowDelete(this)
    })
    function notAllowDelete(input){
        if(input.value.length < 4){input.value = "+55 "}
    }



    // relogio do index.html
    var countDownDate = new Date("Jan 20, 2024 00:00:00").getTime();
    var x = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();
        // Calculate the remaining time
        var distance = countDownDate - now;
        // Calculate days, hours, minutes, and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the countdown using jQuery
        $("#hours").text(hours < 10 ? "0" + hours : hours);
        $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
        $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);
        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            $("#hours, #minutes, #seconds").text("EXPIRED");
        }
    }, 1000);

    
    // chamar o carrocel index.html
    function initializeSlider() {
        let currentSlide = 0;
        $(document).ready(function () {
          showSlide(currentSlide);
          $(".prev").click(function () {
            changeSlide(-1);
          });
          $(".next").click(function () {
            changeSlide(1);
          });
          $(".dot").click(function () {
            currentSlide = $(this).index();
            showSlide(currentSlide);
          });
        });
      
        function changeSlide(n) {
          showSlide(currentSlide += n);
        }
      
        function showSlide(n) {
          const slides = $(".slide");
          const dots = $(".dot");
          if (n >= slides.length) {
            currentSlide = 0;
          }
          if (n < 0) {
            currentSlide = slides.length - 1;
          }
          slides.hide();
          slides.eq(currentSlide).show();
          dots.removeClass("active");
          dots.eq(currentSlide).addClass("active");
        }
      }
      
    initializeSlider(); 
      




});