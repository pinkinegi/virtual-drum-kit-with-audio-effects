var currentSongNumber = 1;
var willLoop = 0; // 0 means abhi off h loop ni krna abhi
var willShuffle = 0;

// make single variable songs to make four objects having their property and value
var songs = [{
  'name': 'Tamma Tamma Again (Tittle Track)',       // left side is property and in ryt side hv a value
  'artist': 'Neha Kakkar, Monali Thaku, Ikka Singh, Dev Negi',
  'album': 'Badrinath Ki Dulhaniya',
  'duration': '2:56',
  'fileName': 'song1.mp3',
  'image'   : 'song1.jpg'
},
{
  'name': 'Humma Song',
  'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
  'album': 'Ok Jaanu',
  'duration': '3:15',
  'fileName': 'song2.mp3',
    'image'   : 'song2.jpg'
},
{
  'name': 'Nashe Si Chadh Gayi',
  'artist': 'Arjit Singh',
  'album': 'Befikre',
  'duration': '2:34',
  'fileName': 'song3.mp3',
    'image'   : 'song3.jpg'
},
{
  'name': 'The Breakup Song',
  'artist': 'Nakash Aziz, Arjit Singh, Badshah, Jonita Gandhi',
  'album': 'Ae Dil Hai Mushkil',
  'duration': '2:29',
  'fileName': 'song4.mp3',
    'image'   : 'song4.jpg'
},
{
  'name': 'Beautifull Eyes',
  'artist': 'Taylor Swift',
  'album': 'Beautifull Eyes',
  'duration': '2:59',
  'fileName': 'song5.mp3',
    'image'   : 'song5.png'
},
{
  'name': 'Kabhi Jo Badal Barse',
  'artist': 'Arjit Singh',
  'album': 'Jackpot',
  'duration': '4:14',
  'fileName': 'song6.mp3',
    'image'   : 'song6.jpg'
},
{
  'name': 'Shape Of You',
  'artist': 'Ed Sheeran',
  'album': 'Shape Of You',
  'duration': '3:53',
  'fileName': 'song7.mp3',
    'image'   : 'song7.jpg'
},
{
  'name': 'Speak Now',
  'artist': 'Taylor Swift',
  'album': 'Speak Now',
  'duration': '4:00',
  'fileName': 'song8.mp3',
    'image'   : 'song8.png'
},
{
  'name': 'Baarish',
  'artist': 'Ash King, Shashaa Tirupati',
  'album': 'Befikre',
  'duration': '2:58',
  'fileName': 'song9.mp3',
    'image'   : 'song9.jpg'
},
{
  'name': 'Dont Let Me Down',
  'artist': 'Chainsmokers',
  'album': 'Singles',
  'duration': '3:28',
  'fileName': 'song10.mp3',
    'image'   : 'song10.jpg'
}];

var songNumber = 1;        // var songNumber by default no.1 song store

function fancyTimeFormat(time)     // to calculation time from second into minute-second
{
// Hours, minutes and seconds
//here sec converting into hours like time=47000sec/3600= 1hrs and 1100sec
var hrs = ~~(time / 3600);
//and left sec are converted into minutes like 1100sec/60= 18min and 20sec
var mins = ~~((time % 3600) / 60);
//and left sec nw divided by 60 if not possible make it remainders like 20/60 nt divisble so reamming 20 sec
var secs = time % 60;
//answer= 1 hrs 18 min and 20 sec in above format
// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";       //var of ret type is creaated(local variable)

if (hrs > 0) {  // if hr value is greater than 0 then display under condition is true
ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}

ret += "" + mins + ":" + (secs < 10 ? "0" : "");//if not hours it show lyk this 18:20
ret += "" + secs; //if only sec then show like this 20
return ret;//after that return value of variable ret
}


//function defined
function toggleSong() {
var song = document.querySelector('audio');//ek var bnaya h song usm audio tag ko pakad liya
if(song.paused == true) {           //agar song paused hoga toh play krdo
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause'); //or ism play icon ko pkdo usm s play icon ko remove krdo or pause icon ko add
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');//jst oppposite of if part
song.pause();         // nhi toh pause krdo
}
}


// this function is used to change songs obj img,name,album
function changeCurrentSongDetails(songObj) {  //ek function bnaya h ism eek parameter pass kra songobj ka
    $('.current-song-image').attr('src','img/' + songObj.image)//current-song-image k clss ko pkdo or img k rc attribute ko bdl do
    $('.current-song-name').text(songObj.name)//
    $('.current-song-album').text(songObj.album)
}


//function defined
function updateCurrentTime() {
var song = document.querySelector('audio');
var currentTime = Math.floor(song.currentTime);//removes decimal value
currentTime = fancyTimeFormat(currentTime);// make times look good
var duration = Math.floor(song.duration);
duration = fancyTimeFormat(duration);
$('.time-elapsed').text(currentTime);// jo current time m text h usko time-elapsed k clss m dkhado
$('.song-duration').text(duration); //jo duration m text h usko song-duration k clss m dkhado

}

 function timeJump() {
  var song = document.querySelector('audio');
   song.currentTime = song.duration - 5;
 }


function addSongNameClickEvent(songObj,position) {
      var songName = songObj.fileName;
      var id = '#song' + position;

      $(id).click(function() {
        var audio = document.querySelector('audio');
        var currentSong = audio.src;
        if(songNumber !== position)
        {

          audio.src = songName;
          songNumber = position; //updating song no with new value
          changeCurrentSongDetails(songObj); // Function Call

        }
          toggleSong();

      });
}








window.onload = function() {      //window k load hone pr niche vle funcn chalana

       changeCurrentSongDetails(songs[0]); // calling our funcn for first time
        updateCurrentTime();           // update krega jo current time h
        setInterval(function() {        // every 1000 milli scnd m show hoga
        updateCurrentTime();           // then again update time
        updateTimer();
      },1000);




    for ( var i = 0; i < songs.length; i++){
      var obj = songs[i]; //sbs phle phla song k object k list check kra
      var name = '#song' + (i+1);
      var song = $(name); // just catching the element eg- #song1
      song.find('.song-name').text(obj.name); // find srf jquery k sth use krte h n ism song.find m song var ko use kra h
      song.find('.song-artist').text(obj.artist);//obj m artist list ko find krk song-artist clss m daalega
      song.find('.song-album').text(obj.album);// obj m album list ko find krk song-album clss m daalna
      song.find('.song-length').text(obj.duration);//obj m duration k text ko clss song-length m daaldo
      addSongNameClickEvent(obj,i+1);//passing 2 argumnts obj and position by i+1

}
        $('#songs').DataTable({
          paging: false
        });

}




// $('audio').on('ended',function() {
//     var audio = document.querySelector('audio');
//     if(currentSongNumber < 10) {
//         var nextSongObj = songs[currentSongNumber];
//         audio.src = nextSongObj.fileName;
//         toggleSong();
//         changeCurrentSongDetails(nextSongObj);
//         currentSongNumber = currentSongNumber + 1;
//     }
//     else if(willLoop == 1) {
//         var nextSongObj = songs[0];
//         audio.src = nextSongObj.fileName;
//         toggleSong();
//         changeCurrentSongDetails(nextSongObj);
//         currentSongNumber =  1;
//     }
//     else {
//         $('.play-icon').removeClass('fa-pause').addClass('fa-play');
//         audio.currentTime = 0;
//     }
// })
//for loop if it is on


$('audio').on('ended',function(){
  var audio = document.querySelector('audio');
  if(willLoop==1)
{
  if(currentSongNumber<songs.length)
  {
    var nextsong = songs[songNumber];
    audio.src = "songs/"+ nextsong.filename;
    changeCurrentSongDetails(nextsong);
    toggleSong();
    currentSongNumber = currentSongNumber+1;
}
else{
  var nextsong  = songs[0];
  audio.src = "songs/" + nextsong.filename;
  toggleSong();
  changeCurrentSongDetails(nextsong);
  currentSongNumber = 1;
}
}
});
// }
// else{
//   $('.play-icon').removeClass('fa-pause').addClass('fa-play');
//   audio.currentTime = 0;
// }













 $('audio').on('ended',function() { // audio k end hone p functn chlana
   var audio = document.querySelector('audio');
  if(currentSongNumber < 10) {
    //play nxt song
    var nextSongObj = songs[currentSongNumber]; //sbs phle currntsongno k value 0 hogi songs[0]mtlb no 1 p song h jo
    audio.src = nextSongObj.fileName; //change krdya source ko
    toggleSong();
    changeCurrentSongDetails(nextSongObj); // update img
    currentSongNumber = currentSongNumber + 1; // change state
  }
  else{
    $('.play-icon').removeClass('fa-pause').addClass('fa-play');//else icon chnge krk
    audio.currentTime = 0; //audio ka currnt time 0 krdo
   //stop playing
  }
 })












$('.next-icon').on('click',function() { //nxt-icon p click krk event hoga
  var audio = document.querySelector('audio');
  if(currentSongNumber < 10) { // if currentSongNumber less thn 10 tb  chlna ye
    var next = songs[currentSongNumber]; // eg- songs[0]=1st song
    audio.src = next.fileName;   // audio k source k chnge krdo
    toggleSong();                    //toggle funcn kro
    changeCurrentSongDetails(next);   // current details bhi chnge krd img vgrh
    currentSongNumber = currentSongNumber + 1;  // fr incremnt krdo usko 1 s

  }
else{ //nhi toh
currentSongNumber = 0; // vps s frst song p le aa
}
})


$('.back-icon').on('click',function() {  //back-icon k clss p click hone p
  var audio = document.querySelector('audio');
  if(currentSongNumber > 0 && currentSongNumber < 11) { //agr currentsongno 0 k bda h or 11 s chota tb ye krna
    var back = songs[currentSongNumber - 1];
    audio.src = back.fileName;
    toggleSong();
    changeCurrentSongDetails(back);
    currentSongNumber = currentSongNumber - 1; // decremnt krdo

  }
})

//progress bar k liye funcn bnaya
function updateTimer(){
  var song = document.querySelector('audio');
  var ct = song.currentTime;
  var td = song.duration;
  var percentage = (ct/td)*100;
  $('.progress-filled').css('width',percentage+"%");//progress-filled k clss k css m jo percnt aaya h vo width krdo

}

$('.player-progress').click(function(event){ //jb bhi player progress k clss m click ho
  var $this = $(this);
  var widthclicked = event.pageX - $this.offset().left; // left s kitni duri p pointer click k position h
  var totalWidth = $this.width(); //or jitni width aayi h store krdo
  var calc = (widthclicked / totalWidth) * 100;
  var song = document.querySelector('audio');
  song.currentTime = (song.duration*calc)/100;
});









$('.welcome-screen button').on('click', function() { // welcome screen clss ko find kro usk andr button ko find kro n usp click hone p
    var name = $('#name-input').val();    // id name-input k value ko dkhao
    if (name.length > 3) {                      // only when name k length greater thn 2 ho
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');   // nhi toh error clss ko add krna
        var wrong = "  Please Enter Your Name Length  more than 3 Letters ";
        $('.welcome-screen .wrong').text(wrong);
    }
});

$('.fa-repeat').on('click',function() {
  $('.fa-repeat').toggleClass('disabled')//toggleClass is pre-defined function in this if any clss is added it will remove if not then add it
  willLoop = 1 - willLoop;
});



$('.fa-random').on('click',function() {
  $('.fa-random').toggleClass('disabled')
  willLShuffle = 1 - willShuffle;
});

$('.fa-microphone-slash').on('click',function() {
  $('.fa-microphone-slash').toggleClass('disabled')

});





$('.play-icon').on('click', function() {      //jb plsy icon vli clss p click ho
    //function ko cll krna
    toggleSong();
});



        $('body').on('keypress',function(event) {
            var target = event.target; //Tag is being stored here
            if (event.keyCode == 32 && target.tagName !='INPUT')//&&=AND in this both must be true
            {
                toggleSong();
            }
        });
