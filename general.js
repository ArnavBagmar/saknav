$(document).ready(function () {
	// Timeline data array
	var timelineData = [
		{
			date: 'Febuary 21, 2024'
		},

		{
			date: 'Febuary 14, 2024',
			title: "Valentine's Day",
			image: 'images/valentines.jpg',
			message: "OML its valentine's day, and you are my first ever valentine find it not hard to believe. It's crazy to think that even though I have known you for less than a year, that I had fallen for you for your crazy personality. You are funny, crazy, dedicated, caring, curious and someways creative (the random noises). You are such a crazy person who has such a unique laugh and voice which is soo noticeble (hint for the future: I was able to catch your voice while sinigng.) It's kinda hard for me to believe that I have pulled such a person. 0-0"
		},

		{
			date: 'January 30, 2024',
			title: "What Just Happened??",
			image: 'images/prevalentine.jpg',
			message: 'This was a speical moment for me because this is the first time I have ever asked a girl to be my Valentines. Its crazy for me to believe that I asked you out in the park with a bouqet and you saying YES!! You are a very spcial person to me and will always will be so this day of me asking you out for the first time will always and forever be a special moment and seeing that smile is a sight I will always look forward to seeing because its really that spcial and cute.'
		},

		{
			date: 'January 15, 2024',
			title: 'Mean Girls',
			image: 'images/meangirls.jpg',
			message: 'Someone was being a mean girl and wanted to watch mean girls. This was our 2nd movie together and you forced to me watch mean girls 1 before we went to go watch this movie. You also found this to be the opportunity to wear your leather jacket and wore your pinkie girlie fit to be a "mean girl." '
		},
		{
			date: 'January 10, 2024',
			title: 'Favorite Picture',
			image: 'images/bestboba.jpg',
			message: "THIS JUST HAD TO BE INCLUDED BECAUSE IT IS MY ALL TIME FAVORITE .5 OF YOU AND IT CANNOT BE MISSED. YOUR EYES ARE SOO FCKING CUTE AND THE WAY YOU STARE UP AND YOU SIPPING ON YOUR BOBA IS SOOOO DAMN CUTE. THIS IS MY WALLPAPER OF WHEN YOU CALL ME AND OMLL ITS TOO CUTE FOR ANYONE TO HAVE AND SEE!!"
		},
		{
			date: 'January 1, 2024',
			title: 'Happy New Years',
			image: 'images/newyears.jpg',
			message: "HAPPY NEW YEAR'S!! Crazy to believe that we both started our new year's calling each other and waiting for the countdown to happen. Someone broke their bedtime schedule that day, but it was such a great moment to believe that we will start the year off together and yelling out HAPPY NEW YEARS'S!!"
		},
		{
			date: 'November 24-25, 2023',
			title: 'GOING TO DISNEYYY',
			images: [
			  'images/Disney1.jpg',
			  'images/Disney2.jpg',
			  'images/Disney3.jpg',
			  'images/Disney4.jpg',
			  'images/Disney5.jpg',
			  'images/Disney6.jpg',
			  'images/Disney7.jpg',
			  'images/Disney8.jpg',
			],
			message: "OML WE WENT TO DISNEY!! Not even an entire year of you living here in Florida we went to Disney. It's a bit crazy to believe you came to Orlando and we went to Epcot and Magic Kingdom. We did so many rides together, and we also went with your parents lol but it is one of the core moments of us together.",
		  },

		  {
			date: 'October 17, 2023',
			title: 'Piggy Back Ride',
			image: 'images/piggybackride.jpg',
			message: "I THINK THIS IS OUR FIRST PIGGYBACK RIDE. Didn't know I can carry your ass that easily LOLLL but it was a fun experiment and now willing to give you piggyback rides anytime your legs get tired OR YOU JUST BORED BAHAHA.",
		  },

		  {
			date: 'October 8, 2023',
			title: 'When I First FELL',
			image: 'images/amoment.jpg',
			message: "This is the moment where I started liking you, the pure joy on your face, your arms wrapped around my neck, me holding your hands, everything that is showcased here made me realize that DAMN, I am actually falling for someone who is and always will be my best friend. This is the picture which I never tell much about but I look back at when I realize how I started falling for you.",
		  },

		  {
			date: 'August 23, 2023',
			title: 'First Day of UF',
			image: 'images/UFdat1.jpg',
			message: "It's still crazy to think that we started our first day at UF together, capturing photos to represent the years and memories we are about to make throughout our college journey.",
		  },

		  {
			date: 'August 15, 2023',
			title: 'Frost Fox Runs',
			image: 'images/frostyfox.jpg',
			message: 'It was our speciality to get Frosty Fox every time we hung out during summer. You getting your Brown Sugar Boba and me getting the Taro Milk Tea. The long 2-hour conversations we used to have there are still some of the best memories for me during the summer. One of my most memorable spots of ours in Gainesville.',
		  },

	  {
		date: 'July 24, 2023',
		title: 'The Day We Met',
		image: 'images/Day1.jpg',
		message: 'Crazy to believe that this is the first time we ever met in person. We went to watch the Barbie movie and had such a great time. It was so interesting meeting you for the first time, and I realized how wonderful you are!',
	  }
	];
  
	// Reverse the timeline data array
	timelineData.reverse();
  
	// Function to create and append timeline items
	function createTimelineItem(item, index) {
	  var sideClass = index % 2 === 0 ? 'left' : 'right';
	  var animation = sideClass === 'left' ? 'fade-right' : 'fade-left';
  
	  var frontContent = '';
	  if (Array.isArray(item.images) && item.images.length > 0) {
		// Handle multiple images (carousel)
		frontContent = `
		  <div class="image-carousel" id="carousel-${index}">
			${item.images
			  .map((imgSrc) => `<img src="${imgSrc}" alt="">`)
			  .join('')}
		  </div>
		`;
	  } else {
		// Handle single image
		frontContent = `<img src="${item.image}" alt="${item.title}">`;
	  }
  
	  var timelineItem = `
		<div class="timeline-item ${sideClass}" data-aos="${animation}">
		  <div class="flip-card">
			<div class="flip-card-inner">
			  <div class="flip-card-front">
				${frontContent}
				<div class="date">${item.date}</div>
			  </div>
			  <div class="flip-card-back">
				<div class="message">
				  <h2>${item.title}</h2>
				  <div class="decorative-divider"></div>
				  <p>${item.message}</p>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  `;
	  $('.timeline').append(timelineItem);
  
	  if (Array.isArray(item.images) && item.images.length > 0) {
		initializeCarousel(`#carousel-${index}`, item.images.length);
	  }
	}
  
	function initializeCarousel(carouselSelector, imageCount) {
	  var currentIndex = 0;
	  var $carousel = $(carouselSelector);
	  var $images = $carousel.find('img');
	  $images.hide();
	  $images.eq(0).show();
  
	  setInterval(function () {
		$images.eq(currentIndex).fadeOut(1000);
		currentIndex = (currentIndex + 1) % imageCount;
		$images.eq(currentIndex).fadeIn(1000);
	  }, 3000); // Change image every 3 seconds
	}
  
	// Create timeline items
	timelineData.forEach(function (item, index) {
	  createTimelineItem(item, index);
	});
  
	// Handle click events to flip the cards
	$('.timeline').on('click', '.flip-card', function () {
	  $(this).toggleClass('flipped');
	});
  
	$('#starting-screen').on('click', function () {
	  // Add the fade-out class to start the animation
	  $(this).addClass('fade-out');
  
	  // Remove the overlay after the animation completes
	  setTimeout(function () {
		$('#starting-screen').remove();
		// Allow the body to scroll again
		$('body').removeClass('overlay-active');
  
		// Scroll to the bottom of the page
		$('html, body').scrollTop($(document).height());
	  }, 1000);
	});
  
	$('body').addClass('overlay-active');
  
	// Music Control
	var musicPlaying = false;
	$('#music-toggle').on('click', function () {
	  var music = document.getElementById('background-music');
	  if (musicPlaying) {
		music.pause();
		$(this).text('Play Music');
	  } else {
		music.play();
		$(this).text('Pause Music');
	  }
  
	  musicPlaying = !musicPlaying;
	});
  });
  
