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
        country: "India",
        imgSrc: "./img/indi/Flag_of_India.jpg"
        
}]
var capt = [{
    capital: "Brasília",
    imgSrc2: "./img/brazil/Bairro_dos_jardins_em_são_paulo.jpg",
    para:"Le Brésil, officiellement la République fédérative du Brésil, est le plus grand pays d'Amérique du Sud et d'Amérique latine. Avec 8,5 millions de kilomètres carrés et plus de 217 millions d'habitants, le Brésil est le cinquième pays du monde par sa superficie et le septième par sa population.",
    link:"https://fr.wikipedia.org/wiki/Brésil",
    audio:"./audio/crowd.mp3"
},
    { capital:"Rome",
        imgSrc2:"./img/italy/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
        para:"L'Italie, pays européen doté d'un long littoral méditerranéen, a fortement marqué la culture et la cuisine occidentales. Sa capitale, Rome, abrite le Vatican ainsi que des œuvres d'art remarquables et des ruines anciennes. Parmi les autres grandes villes, citons Florence, qui abrite des chefs-d'œuvre de la Renaissance tels que le David de Michel-Ange et le Duomo de Brunelleschi, Venise, la ville des canaux, et Milan, la capitale italienne de la mode",
        link:"https://en.wikipedia.org/wiki/Italy",
        audio:"./audio/Italians.mp3"},
        
    { capital:"Tokyo",
        imgSrc2:"./img/japan/tokyo.jpg",
        para:"Tokyo, la capitale animée du Japon, mélange l'ultramoderne et le traditionnel, des gratte-ciel éclairés au néon aux temples historiques. L'opulent sanctuaire shintoïste Meiji est connu pour sa porte imposante et les bois qui l'entourent. Le palais impérial se trouve au milieu de grands jardins publics. Les nombreux musées de la ville proposent des expositions allant de l'art classique (au musée national de Tokyo) à la reconstitution d'un théâtre kabuki (au musée Edo-Tokyo).",
        link:"https://en.wikipedia.org/wiki/Tokyo",
        audio:"./audio/Onii.mp3"},
    { capital:"New Delhi",
        imgSrc2:"./img/indi/RASHTRAPATI_BHAVAN.jpg",
        para:"New Delhi is the capital of India and a part of the National Capital Territory of Delhi. New Delhi is the seat of all three branches of the government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India.",
        link:"https://en.wikipedia.org/wiki/New_Delhi",
        audio:"./audio/indi.mp3"}
]
//our data
//high order func
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

//our work!
each(flags, function (e, i) {
    $("#flg").append('<div class="grid-item"><img id="' +i+ '" src="' + e.imgSrc + '" class="imgHome"/></div>')
})
//our displayfunc
$("#btn").on("click", function () {
    var filterdata = filter(flags, function (e, i) {
        var srrc = $("#Ctry").val()
        return srrc === e.country || srrc == ""
    })
    $("#flg").empty()
    each(filterdata, function (e, i) {
        $("#flg").append('<div id="' + i + '"class="grid-item"><img id="img' + i + '" src="' + e.imgSrc + '" class="imgHome" /> </div>')
    })
})
$(document).on("click",function (e) {
    if(e.target.tagName==="IMG") {
       var x =  $(e.target).attr("id")//the id is (i)
       //console.log(x)
        $("#flg").replaceWith('<div style="width:1500; margin:0 auto;" class="grid-item">'+//here we replace a new div with the capital img
        '<h1>'+capt[x].capital+'</h1>'+//here the capital title
        '<div><img  src="' + capt[x].imgSrc2 + '" class="imgDetails"/></div> '+//here our capital img
        '<p class="paracss">'+capt[x].para+'</p>  '+ //paragraph add
        '<a href="'+capt[x].link+'" class="linkcss">Voire Plus !</a>'+//here a link of wiki for more info
        '<h4>utiliser des écouteurs 🙉 🙉</h4>'+
        '<div><audio controls>'+
        '<source src="'+capt[x].audio+'" type="audio/mpeg">'+//here we add the audio from our source
      '</audio></div> </div>')
    }})
    ///
    $("#return").on("click",function () {
        location.reload()
    })
         
   