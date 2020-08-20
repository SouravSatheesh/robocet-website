!(function($) {
		
		var firebaseConfig = {
			apiKey: "AIzaSyDNmFA9oOjZ00hFWMWy5xhBxu2OTpmpgMQ",
			authDomain: "robocet-website.firebaseapp.com",
			databaseURL: "https://robocet-website.firebaseio.com",
			projectId: "robocet-website",
			storageBucket: "robocet-website.appspot.com",
			messagingSenderId: "159855587686",
			appId: "1:159855587686:web:ab6620127495ce62ad98a7",
			measurementId: "G-R7HF6M7PGD"
		};
			
		firebase.initializeApp(firebaseConfig);
		firebase.analytics();

		var messagesRef = firebase.database().ref('messages');


		$('#form-submit').click(function(e) {

			e.preventDefault();
			var name = $('#form-name').val();
			var email = $('#form-email').val();
			var subject = $('#form-subject').val();
			var message = $('#form-message').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var con = 0;
			
			if(name.length < 5){
				$('.form-name .validate').css("display","block");
			}
			else{
				$('.form-name .validate').css("display","none");
				con++;
			}
			if(subject.length < 8){
				$('.form-subject .validate').css("display","block");
			}
			else{
				$('.form-subject .validate').css("display","none");
				con++;
			}
			if(regex.test(email) == 0){
				$('.form-email .validate').css("display","block");
			}
			else{
				$('.form-email .validate').css("display","none");
				con++;
			}
			if(message.length < 1){
				$('.form-message .validate').css("display","block");
			}
			else{
				$('.form-message .validate').css("display","none");
				con++
				$('.contact-form .sent-messsage').css("display","none");

			}
		
			if(con == 4){

				saveMessage(name, email, subject, message)

				$('#form-message-sent').css("display","block");
				setTimeout(function() {
					$('#form-message-sent').css("display","none");
				},2000);
				$('#form-name,#form-email,#form-subject,#form-message').val("");
			}
			function saveMessage(name, email, subject, message) {
				var newMessageRef = messagesRef.push();
				newMessageRef.set({
					name: name,
					email: email,
					subject: subject,
					message: message,
				});
			}
	
		});
})(jQuery);