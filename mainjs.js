var flags = [
    {
        country: "brazil",
        imgSrc: "./img/brazil/720px-Flag_of_Brazil.jpg",
     },
    {
        country: "italy",
        imgSrc: "./img/italy/Flag_of_Italy.svg.png",
},
    {
        country: "japan",
        imgSrc: "./img/japan/Flag_of_Japan.jpg",
},
    {
        country: "turkey",
        imgSrc: "./img/turkey/Flag_of_Turkey.jpg",
}]

var capt = [{
    capital: "saopaulo",  
    imgSrc2: "./img/brazil/Bairro_dos_jardins_em_são_paulo.jpg"
},
    { capital:"rome",
        imgSrc2:"./img/italy/Colosseum_in_Rome,_Italy_-_April_2007.jpg"},

    { capital:"tokyo",
        imgSrc2:"./img/japan/tokyo.jpg"},

    { capital:"ankara",
        imgSrc2:".img/turkey/Ankara_from_bus_station.jpg"}
  
          
     
]
//our data
var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function (array, predicate) {
    var acc = [];
    each(array, function (e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}
//high order func
//our work!

each(flags, function (e, i) {
    $("#flg").append('<div class="grid-item"><img src="' + e.imgSrc + '"/></div>')

})
//our displayfunc
$("#btn").on("click", function () {
    var filterdata = filter(flags, function (e, i) {
        var srrc = $("#Ctry").val()
        return srrc === e.country || srrc == ""
    })
    $("#flg").empty()
    each(filterdata, function (e, i) {
        $("#flg").append('<div id="' + i + '"class="grid-item"><img id="img' + i + '" src="' + e.imgSrc + '"/></div>')
    })
})



$(document).on("click", function (e) {
    if (e.target.tagName === "IMG") {
        var filterdata2= filter(capt,function(e,i){
            return e.imgSrc2
})
each(filterdata2,function(e,j){
    $("#flg").replaceWith('<div id="'+j+'"class="grid-item"><img id="img'+j+'"src="'+e.imgSrc2+'"/></div>')
})
        
        
        
        //$("#flg").replaceWith('<div ><img src="' + e.imgSrc2 + '"> </div>')

    }



})