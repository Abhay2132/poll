<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	<title> PHP LOL </title>
	<link rel="stylesheet" href="css/index.css" /> </head>

<body>
	<h1> Voting Poll ! </h1>
	<form onsubmit="return false;" enctype="multipart/form-data">
		<input title="Name should be 5 - 10 characters ( number and alphabets only ) " type="search" class="uid" pattern="[a-zA-Z0-9]{5,10}" placeholder="Your name" name="uid" required />
		<p class="q"> <big>Q. </big>How to get a bunch of like in your code ? </p>
		<div class="opts">
			<label for="a1">
				<div></div>
				<span class="opt" >Make awesome code</span>
				<span class="pc"></span>
			</label>
			<label for="a2">
				<div></div>
				<span class="opt" > Upload profile picture of a girl</span>
				<span class="pc"></span>
			</label>
			<label for="a3">
				<div></div>
				<span class="opt" > Just add this line at end "Please Like | Comment | Share" </span>
				<span class="pc"></span>
			</label>
			<label for="a4">
				<div></div>
				<span class="opt" > All of the Above</span>
				<span class="pc"></span>
			</label>
		</div>
		<input required type="radio" id="a1" name="option" value="a1" />
		<input required type="radio" id="a2" name="option" value="a2" />
		<input required type="radio" id="a3" name="option" value="a3" />
		<input required type="radio" id="a4" name="option" value="a4" />
		
		<div class="vote_cc" > Total Votes : <span class="total_votes" > 0 </span></div>
		<button> Submit </button>
		<p class="note"> Like this code so we can get more votes 😁 </p>
	</form>
</body>
<script src="js/main.js"></script>

</html>