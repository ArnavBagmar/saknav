$(document).ready(function () {
	// Timeline data array
	var timelineData = [
	  {
		date: 'July 24, 2023',
		title: 'The Day We Met',
		image: 'images/Day1.jpg',
		message: 'Crazy to believe that this is the first time we ever met in person. We went to watch the Barbie movie and had such a great time. It was so interesting meeting you for the first time, and I realized how wonderful you are!',
	  },
	  {
		date: 'August 15, 2023',
		title: 'Frost Fox Runs',
		image: 'images/frostyfox.jpg',
		message: 'It was our speciality to get Frosty Fox every time we hung out during summer. You getting your Brown Sugar Boba and me getting the Taro Milk Tea. The long 2-hour conversations we used to have there are still some of the best memories for me during the summer. One of my most memorable spots of ours in Gainesville.',
	  },
	  {
		date: 'August 23, 2023',
		title: 'First Day of UF',
		image: 'images/UFdat1.jpg',
		message: 'It\'s still crazy to think that we started our first day at UF together, capturing photos to represent the years and memories we are about to make throughout our college journey.',
	  },
	  // Add more timeline items as needed
	];
  
	// Function to create and append timeline items
	function createTimelineItem(item, index) {
	  var sideClass = (index % 2 === 0) ? 'left' : 'right';
	  var animation = (sideClass === 'left') ? 'fade-right' : 'fade-left';
  
	  // Flip card structure
	  var timelineItem = `
		<div class="timeline-item ${sideClass}" data-aos="${animation}">
		  <div class="flip-card">
			<div class="flip-card-inner">
			  <div class="flip-card-front">
				<img src="${item.image}" alt="${item.title}">
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
	}
  
	// Loop through the data and create timeline items
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
	  }, 1000);
	});
  
	// Add a class to prevent body scrolling when overlay is active
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
  