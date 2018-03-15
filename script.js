$(function(){
	var colorArray = ["#F5A62A", "#FB6964", "#E74C3C", "#16A085", "#81B168", "#2C3E50", "#5A4347", "#27AE60", "#49393A", "#73A857"];
	var $quoteBox = $("#quoteBox");
	var quoteAndAuthor = null;
	var colorNumber = Math.floor(Math.random() * 10);
	$('body, #quoteBox > #buttons > #next, #quoteBox > #buttons > #twitterButton').css('background-color', colorArray[colorNumber]); 
	$("#quoteBox > #buttons > #twitterButton").hover(function(e) { 
		$("#quoteBox > #buttons > #twitterButton img").css("width",e.type === "mouseenter"?"40px":"25px");
	});

	$.ajax({
		type:'GET',
		url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
		dataType: 'json',
      	// data: {'method=getQuote&key=457653&format=json&lang=en'},
      	success: function (data) {

      	// var json = $.parseJSON(data);
      	quoteAndAuthor = data.quote + " " +data.author;
      	$("#quoteBox > #quotation").html("<p style='margin-left: 5px; text-align:center; '>" + "<i class='fa fa-quote-left' style='margin-right: 5px;'></i>"+data.quote+"</p> <n /><p style='font-size: 18px; text-align:right; margin-right: 5px;'>- "+data.author+"</p>").fadeIn();  

      	var headerHeight = $('#quoteBox > #quotation').height() + 100;
      	$('#quoteBox').css('height', headerHeight); 	

      	colorNumber = Math.floor(Math.random() * 10);
      	$('body, #quoteBox > #buttons > #next, #quoteBox > #buttons > #twitterButton').css('background-color', colorArray[colorNumber]); 
      },

      error: function (data) {
      	console.log("Shit");
      },  
      beforeSend: function(xhr) {
              xhr.setRequestHeader("X-Mashape-Authorization", "XcwrYFvkptmshqrKOJKhlNjXoJjip12WMvtjsnq2C9XsJuDoSR"); // Enter here your Mashape key
          }

      });

	$("#quoteBox > #buttons > #twitterButton").click(function() {
		 // window.open('https://twitter.com/share?related=freecodecamp&hashtags=quote&text='.concat(quoteAndAuthor));
    window.open('https://twitter.com/intent/tweet?related=freecodecamp&hashtags=quote&text='.concat(quoteAndAuthor));
    
		 // window.location.href=location;
	});


	$("#next").click(function() {  
		$.ajax({
			type:'GET',
			url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
			dataType: 'json',
    		// data: {'method=getQuote&key=457653&format=json&lang=en'},
    		success: function (data) {
    			quoteAndAuthor = data.quote + " " +data.author;
    			$( "#quoteBox > #quotation" ).fadeOut( "fast" );
    			// var json = $.parseJSON(data);
    			$("#quoteBox > #quotation").html("<p style='margin-left: 5px; text-align:center; '>" + "<i class='fa fa-quote-left' style='margin-right: 5px;'></i>"+data.quote+"</p> <n /><p style='font-size: 18px; text-align:right; margin-right: 5px;'>- "+data.author+"</p>"). fadeIn();  
    			var headerHeight = $('#quoteBox > #quotation').height() + 100;
    			$('#quoteBox').css('height', headerHeight); 	
    			colorNumber = Math.floor(Math.random() * 10);
    			$('body, #quoteBox > #buttons > #next, #quoteBox > #buttons > #twitterButton').css('background-color', colorArray[colorNumber]); 
    		},

    		error: function (data) {
    			console.log("Shit");
    		},  
    		beforeSend: function(xhr) {
           		xhr.setRequestHeader("X-Mashape-Authorization", "XcwrYFvkptmshqrKOJKhlNjXoJjip12WMvtjsnq2C9XsJuDoSR");
           	}


        });  
	});

});