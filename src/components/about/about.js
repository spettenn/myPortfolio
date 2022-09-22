import React from 'react';

function displayAgeYoung() {
	document.getElementById('age').style.backgroundColor = '#C06C8C';
	document.getElementById('age').innerHTML =
		'I was born in oslo (1995), or more spesificly the suburbs. When i was young, me and my family lived abroad for three years. This forced me to learn english at a very young age, and in a sence gave me better oportunities to work with web-development as english has been the default language for the web.' +
		'Going to international school at this age helped give med perspective and recognize that the world we perceve trough our nordic lense is very different then what most people think it is' +
		'At this stage in my life i had allready found my interests when it comes to hobbies and activities. These include fotball, basketball, hiking & snowboarding.';
}
function displayAgeMiddle() {
	document.getElementById('age').style.backgroundColor = '#6C5B7B';
	document.getElementById('age').innerHTML =
		'during my youth i lived in Bærum, Norway. I was a pretty active child when i was younger, i continued my hobbies of playing fotball, basketball and snowboard during the winder. Sadly when i was 14 i had to stop with alot of sport due to a snowboarding incident where i hurt my back.' +
		'This incident changed my life and my activities or hobbies had to be put on hold. So the next few years was spent in front of the computer, thus giving me the opportunity to understand and learn the web. During this time i also started to learn how to code, and this is where my interest in web-development started to grow.' +
		'Later in my teens, i finished school (high school) and got a job at my old elementary school as a subtitute teacher. ';
}
function displayAgeLate() {
	document.getElementById('age').style.backgroundColor = '#355C7D';
	document.getElementById('age').innerHTML =
		'In my 20`s i started to study in Lillehammer, witch is a small town north of Oslo. During my time in Lillehammer i was studying tourism, this seemed (at the time) like a smart thing to study as the tourism industry was thriving in Norway at the time.' +
		'I then finished my studies with a bachelors in marketing & tourism. After my studies, i spent alot of time trying to find a job. I ended up having alot of luck and having the privelige of working in Longyearbyen, Svalbard. This sadly did not last, as 4 months after i landed the jobb, covid-19 hit the shores of Norway and the country went in to lock-down. Thus i had to move back to the mainland and start looking for something new to do.' +
		'After some time i realised that the tourism industri was not going to pick itself up after the initial covid-19 wave, so i started looking for a new trade.' +
		'At this time i signed up for frontend web-development course for two years in Oslo. ';
}

export default function About() {
	return (
		<div id='about' className='about_page_container'>
			<h1 id='about_title'>About me</h1>
			<div className='about_page_content'>
				<div className='about_page_content_left'>
					<div className='about_btn_container'>
						<button id='young_age_btn' type='button' onClick={displayAgeYoung}>
							Age 1 - 10
						</button>
						<button
							id='middle_age_btn'
							type='button'
							onClick={displayAgeMiddle}>
							Age 10 - 20
						</button>
						<button id='late_age_btn' type='button' onClick={displayAgeLate}>
							Age 20 - Today
						</button>
					</div>
					<p id='age'>Want to read trough a short summary of my life?</p>
				</div>
				<div className='about_page_content_right'>
					<h3>what can i do? </h3>
					<div>my experience with css / html</div>
					<div>my experience with javaScript</div>
					<div>my experience with react</div>
					<div>my experience with nextJS</div>
					<div>my experience with servers</div>
				</div>
			</div>
		</div>
	);
}
