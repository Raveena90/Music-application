var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0;
var songs = [{
        'name': 'Tamma Tamma',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
	   'image' : 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
	     'image' : 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
		'image' : 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
		'image' : 'song4.jpg'
    }]

function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
	 
	 function toggleSong() {
		var song = document.querySelector('audio');
	 if(song.paused == true) {
		console.log('Playing');
		$('.play-icon').removeClass('fa-play').addClass('fa-pause');
		song.play();
		}
	 else {
		console.log('Pausing');
		$('.play-icon').removeClass('fa-pause').addClass('fa-play');
		song.pause();
		}
		} 
		
   	function changeCurrentSongDetails(songObj) {
           $('.current-song-image').attr('src','img/' + songObj.image)
           $('.current-song-name').text(songObj.name)
           $('.current-song-album').text(songObj.album)
}

		
      	function updateCurrentTime() {
			var song = document.querySelector('audio');
			//console.log(song.currentTime);
			//console.log(song.duration);
			var currentTime = Math.floor(song.currentTime);
			currentTime = fancyTimeFormat(currentTime);
			var duration = Math.floor(song.duration);
			duration = fancyTimeFormat(duration)
			$('.time-elapsed').text(currentTime);
			$('.song-duration').text(duration);
			}
		function addSongNameClickEvent(songObj,position) {
			var songName = songObj.fileName; 
			var id = '#song' + position;
			$(id).click(function() {
			var audio = document.querySelector('audio');
			var currentSong = audio.src;
		if(currentSong.search(songName) != -1)
			{
			toggleSong();
			}
		else {
			audio.src = songName;
			toggleSong();
			changeCurrentSongDetails(songObj); // Function Call
			}
			});
			}
			
			window.onload = function() {
		    changeCurrentSongDetails(songs[0]);
			updateCurrentTime();
			setInterval(function() {
			updateCurrentTime();
			},1000);
			
			//var songName1 = 'Tamma Tamma';
			//var songName2 = 'Humma Song';
			//var songName3 = 'Nashe Si Chadh Gayi';
			//var songName4 = 'The Breakup Song';
	
			$('#songs').DataTable({
            paging: false
    });
			}	
	$('#songs').DataTable({
	paging:false});

	$('.fa-repeat').on('click',function(){
$('.fa-repeat').toggleClass('disabled')
willLoop = 1-willLoop;
	});
	$('.fa-random').on('click',function(){
$('.fa-random ').toggleClass('disabled')
willShuffle=1-willShuffle;
	});
	$('audio').on('ended',function(){
		var audio = document.querySelector('audio');
		if(currentSongNumber<4){
			var nextSongObj=songs[currentSongNumber];
			audio.src=nextSongObj.filename;
			toggleSong();
			changeCurrentSongDetails(nextSongObj);
			currentSongNumber=currentSongNumber +1;
		}
		else{
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			audio.currentTime=0;
		}
	})  
		  //for (var i = 0; i < fileNames.length ; i++) {
	      //addSongNameClickEvent(fileNames[i],i)
				
	//}			
		//window.onload = function() {
			
		for(var i =0; i < songs.length;i++) {
			var obj = songs[i];
			var name = '#song' + (i+1);
			var song = $(name);
			song.find('.song-name').text(obj.name);
			song.find('.song-artist').text(obj.artist);
			song.find('.song-album').text(obj.album);
			song.find('.song-length').text(obj.duration);
			addSongNameClickEvent(obj,i+1);
	}
			//addSongNameClickEvent(fileNames[0],1);
			//addSongNameClickEvent(fileNames[1],2);
			//addSongNameClickEvent(fileNames[2],3);
			//addSongNameClickEvent(fileNames[3],4);

			//for (var i = 0; i < fileNames.length ; i++) {
			//addSongNameClickEvent(fileNames[i],i+1)
	        //}
					
	
		$('.welcome-screen button').on('click', function() {
	
        var name = $('#name-input').val();
	/*condition ke true hone pr msg aata*/
        if (name.length > 2) {
            var message = "Welcome, " + name; 
			$('.main .user-name').text(message);
	
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
	/*Condition ke false hone pr red color se boundary aa jaati*/
            $('#name-input').addClass('error');
        }
    });
	
    $('.play-icon').on('click', function() {
        toggleSong(); 
    });
	
	/*Keypress aisa event hai jise hum space press krte he song ko play pause kr skte*/
         $('body').on('keypress', function(event) {
	//32 means clicking on space bar
	 var target = event.target;
                if (event.keyCode == 32 && target.tagName !='INPUT') 
				{
                  toggleSong();   
				  }
            });
	
			