// real life counter part price (40000) divided by the Vector engine price (7)
const usd = 40000 / 7

function koinToUSD(x){
    return Math.round((usd * x) * 100) / 100
}

function usdToKoin(x){
    return Math.round((7 / x * 40000) * 100) / 100
}

$(document).ready(function(){
    console.log("Ready!")

    $("#container").on()

    $("#koin").on("input", function(){
        $("#usd").val(
            koinToUSD($("#koin").val())
        )
        console.log("Input")
    })
    
    $("#usd").on("input", function(){
        $("#koin").val(
            usdToKoin($("#usd").val())
        )
        console.log("Input")
    })
})
