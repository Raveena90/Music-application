var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0;

var relax = 0;
var travel = 0;
var party = 0;
var work = 0;

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

			var songs_relax = [{
				   'name': 'Four Five Seconds',
				   'artist': 'Kanye West, Rihanna',
				   'album': 'Four five seconds',
				   'duration': '3:10',
				   'fileName': 'song5.mp3',
				   'image' : 'song5.jpg'
				},
				{
					'name': 'Someone Like You',
					'artist': 'Adele',
					'album': '21',
					'duration': '4:45',
					'fileName': 'song6.mp3',
				    'image' : 'song6.jpg'
				},
				
				{
					'name': 'Please do not go',
					'artist': 'Barcelona',
					'album': 'Absolutes',
					'duration': '3:42',
					'fileName': 'song7.mp3',
					'image' : 'song7.jpg'
				}]	
				var songs_travel = [{
				 'name': 'Journey Song',
					'artist': 'Anupam Rai',
					'album': 'Piku',
					'duration': '4:11',
				    'fileName': 'song8.mp3',
				    'image' : 'song8.jpg'
				},
				
				{
					'name': 'Banjarey',
					'artist': 'Honey Singh',
					'album': 'Fugly',
					'duration': '4:02',
					'fileName': 'song9.mp3',
					'image' : 'song9.jpg'
				},
				{
					'name': 'Dil Dhadkne DO',
					'artist': 'Shanker Mahadevn',
					'album': 'Zindagi na milegi dobara',
					'duration': '3:49',
					'fileName': 'song10.mp3',
					'image' : 'song10.jpg'
				}]	
				var songs_party = [{
				 'name': 'Suit Suit',
					'artist': 'Arjun,Guru Randhawa',
					'album': 'Hindi Medium',
					'duration': '3:09',
				    'fileName': 'song11.mp3',
				    'image' : 'song11.jpg'
				},
				
				{
					'name': 'Sada Move',
					'artist': 'Diljit Dosanjh,Raftaar',
					'album': 'Raabta',
					'duration': '2:27',
					'fileName': 'song12.mp3',
					'image' : 'song12.jpg'
				},
				{
					'name': 'Radio',
					'artist': 'Kamal Khan,Amit Mishra',
					'album': 'Tubelight',
					'duration': '4:45',
					'fileName': 'song13.mp3',
					'image' : 'song13.jpg'
				}]	
				
				var songs_work = [{
				 'name': 'Watermark',
					'artist': 'Enya',
					'album': 'Watermark',
					'duration': '2:25',
				    'fileName': 'song14.mp3',
				    'image' : 'song14.jpg'
				},
				
				{
					'name': 'A sky full of stars',
					'artist': 'Coldplay',
					'album': 'Ghost stories',
					'duration': '5:34',
					'fileName': 'song15.mp3',
					'image' : 'song15.jpg'
				},
				{
					'name': 'Magic',
					'artist': 'Coldplay',
					'album': 'Ghost stories',
					'duration': '4:44',
					'fileName': 'song16.mp3',
					'image' : 'song16.jpg'
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


				 function updateTimer(){
					 var song = document.querySelector('audio');
					 var ct = song.currentTime;
					 var td = song.duration;
					 var percentage = (ct/td)*100;
					 $('.progress-filled').css('width', percentage+ "%");
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
						updateTimer();
						},1000);
						
			//var songName1 = 'Tamma Tamma';
			//var songName2 = 'Humma Song';
			//var songName3 = 'Nashe Si Chadh Gayi';
			//var songName4 = 'The Breakup Song';
	
			$('#songs').dataTable({
            paging: false
            });
			}	

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
			
			$('#mood-relax').on('click',function(){
				if(typeof songs_table != 'undefined'){
					songs_table.destroy();
				}
				relax=1;
				
				updateSongList();
				$('.mood-sorting').addClass('hidden');
				$('.content').removeClass('hidden');
				$('.content').addClass('animated   ')
			});
			
			
			
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
	
			