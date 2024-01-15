
$(document).ready(function(){
    $checkInputNumber = $("#telefone")
    $virbutton = $("#confirmatedNumber");
    var $errorNumberMessage = $("#errorNumber");
    var $fieldNumberDiv = $(".fieldnumber");

    $imagemhandle = $("#fotodabarra");
    $imagemhandle2 = $("#extract1");
    var srcdafoto = 'data:image/png;base64,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'
    var srcdafoto2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVR4nO2ZMU4CQRSG/8QDWBiNorX3sLAwcAjvIGprgifwFprYWRmxgEYT4A1q4hFsjAaxwIbfsEyIGnbDLG+WBedPpv3f+3jzftgFCJpT0aBEQZWCTxrQ+QheKDhjA8uzaP40VdPjQR5psJZl8yVbuEeDMhvYcPa4wNLMIGhwawuXp/T52Xx2EBR0o4JPWFcBaGGVggcL8ZxmoqkKa/rQJ0Rc2ij4/vIZXB/165SUNtoA6hBxaeMTQBUiLm0UATqRVxtbXiAo+IgM/iyUGoDg0npdeYFIGLHWBLYpeHX4xr7LFUDkJdikwfnoOiUD3OQOwKsCgKIoqA/O3F4hpqn5LwE4GPV0Dzf1eQeozRTAlxgA/ssEGJYYYYlHCim00Essbj/MmEOAWi4BfIkBYKEmIONft/gShw/+g146WgBVu4iHmo3GiYJjW6+qBVC0hj0KjthEwcl40vpNFKLmBV+2XtHNICkuDSpTPbi4n4r64kSTGL52H/7hoX0EXevv9slPCpB7MeO0UVeWaUPBPg3eKdjRNPWeNrzHCg0OoqQR9NnCrm6BrNJG0KfgRLX5TNJG8EaDa7ax56X5IPjXN9dbxeFO2ukcAAAAAElFTkSuQmCC'

    $virbutton.click(function() {
        if ($checkInputNumber.val().length === 15) {
            console.log("Número correto. Escondendo #fieldnumber");
            $fieldNumberDiv.hide().fadeOut(1000);
            $virbutton.hide();
            $(".afterfadeName").css({"display":"grid"})
            $("#confirmatedName").css({"display":"flex"})
            $("#loadingContainer").css({"display":"flex"})
            setTimeout(function() {$('#loadingContainer').fadeOut('slow')},500);
            nomeCompleted() 
        } else {
            console.log("Número incorreto. Mostrando mensagem de erro.");
            $errorNumberMessage.hide().fadeIn(1000);
            $($checkInputNumber).css({
                'border': '1px solid red'
            });
        }
    });
    function nomeCompleted(){
        $("#confirmatedName").click(function(){
            if($("#nomecompleted").val().length <= 2){
                $("#errorNome").hide().fadeIn(1000);
                $("#nomecompleted").css("border","1px solid red")
            }else{
                $("#loadingContainer").css({"display":"flex"})
                setTimeout(function() {$('#loadingContainer').fadeOut('slow');
                    $imagemhandle.attr("src",srcdafoto);
                    $("#mudancaimgdados").hide()
                    $("#mudancapdados").hide()
                    $(".afterfadeName").hide()
                    $("#confirmatedName").hide()
                    $("#fieldnumber").hide()
                    $("#confirmatedPix").css("display","flex")
                    $("#mudancaimgpayment").show()
                    $("#mudancappayment").show()
                    $(".pixmethod").css("display","grid")
                    $("#retaligacao").show()
                    pixcompleted()
                }, 500);
                
            }
        })
    }
    function pixcompleted(){
        $("#confirmatedPix").click(function(){
            $("#loadingContainer").css({"display":"flex"})
            setTimeout(function() {$('#loadingContainer').fadeOut('slow')},1000);
            $(".insernumber").hide()
            $(".copiedtransfer").css({"display":"grid"})
        })
    }






    // temporario buttão
    $("#id1").click(function(){
        console.log("Número correto. Escondendo #fieldnumber");
        $fieldNumberDiv.hide().fadeOut(1000);
        $virbutton.hide();
        $(".afterfadeName").css({"display":"grid"})
        $("#confirmatedName").css({"display":"flex"})
        $("#loadingContainer").css({"display":"flex"})
        setTimeout(function() {$('#loadingContainer').fadeOut('slow')},500);
        $imagemhandle.attr("src",srcdafoto);
        $("#mudancaimgdados").hide()
        $("#mudancapdados").hide()
        $(".afterfadeName").hide()
        $("#confirmatedName").hide()
        $("#fieldnumber").hide()
        $("#confirmatedPix").css("display","flex")
        $("#mudancaimgpayment").show()
        $("#mudancappayment").show()
        $(".pixmethod").css("display","grid")
        $("#retaligacao").show()
        $(".insernumber").hide()
        $(".copiedtransfer").css({"display":"grid"})
        $imagemhandle2.attr("src",srcdafoto2);
        $("#retaligacao2").show()

        
    })






})

