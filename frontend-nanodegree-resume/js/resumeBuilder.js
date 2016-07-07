// $("#main").append("Natalie");

//var awesomeThoughts="I am Natalie and I am AWESOME!"
//console.log(awesomeThoughts);
//	var funThoughts=
//	awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

//var formattedName = HTMLheaderName.replace("%data%", "Natalie Baker");

//$("#header").prepend(formattedName);

//var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");

//$("#header").append(formattedRole);

//var formattedMobile = HTMLmobile.replace("%data%", "713-245-0099");

//var formattedEmail = HTMLemail.replace("%data%", "bakernataliea@gmail.com");

//var formattedWebsite = HTMLblog.replace("%data%", "baker-natalie.github.io");

//var formattedWelcome = HTMLwelcomeMsg.replace("%data%", "Welcome to my Resume Page!");

//var bio = {
//	"name" : formattedName,
//	"role" : formattedRole,
//	"contact" : [formattedMobile, formattedEmail, formattedWebsite],
//	"picture" : picture,
//	"welcome" : formattedWelcome,
//	"skills" : ["aewsomeness", "HTML", "CSS", "JavaScript"],
//};

//$("#header"). prepend(bio.name);
//$("#header"). append(bio.role);
//$("#topContacts"). append(bio.contact);
//$("#header"). prepend(bio.picture);
//$("#header"). append(bio.welcome);
//$("#main"). append(bio.skills);

//var work = {};
//work.currentJob = "Housewife";
//work.timeServed = "7 years";
//work.location = "I go where the party takes me";

//var education = {};
//education["school"] = "Udacity";
//education["timeServed"] = "3 months";
//education["location"]= "online";

//$("#main"). append(work["currentJob"]);
//$("#main"). append(education.school);

//var education = {
//	"schools": [
//		{
//			"name" : "Udacity",
//			"location" : "online",
//			"degree" : "Nanodegree",
//			"major" : "Front-end Web Development"
//		},
//		{
//			"name" : "Auburn University",
//			"location" : "Auburn, AL",
//			"major" : "Fine Arts"
//		}
//	]
//}


var bio = {
	"name" : "Natalie Baker",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "713-245-0099",
		"email" : "bakernataliea@gmail.com",
		"github" : "baker-natalie",
		"twitter" : "@ohcodinglady",
		"location" : "Houston, TX"
	},
	"welcomeMessage" : "Welcome to my resume page!",
	"skills" : ["Awesomeness", "HTML", "CSS", "JavaScript", "jQuery"],
	"biopic" : "images/profile-pic.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "Auburn University",
			"location" : "Auburn, AL",
			"degree" : "N/A",
			"majors" : ["Fine Arts", "Graphic Design"],
			"dates" : "8/2004 - 5/2007",
			"url" : "http://www.auburn.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "6/2016 - 9/2016",
			"url" : "http://www.udacity.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Self",
			"title" : "Mom",
			"location" : "Houston, TX",
			"dates" : "01/2009 - present",
			"description" : "Mom it all up"
		},
		{
			"employer" : "Taco Mama",
			"title" : "Lead Server/Caterer",
			"location" : "Huntsville, AL",
			"dates" : "10/2014 - 6/2015",
			"description" : "sling tacos"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Portfolio Project",
			"dates" : "6/2016",
			"description" : "An online portfolio to showcase my front-end design work",
			"images" : ["images/glasses-logo.png"]
		},
		{
			"title" : "funVector",
			"dates" : "5/2016 - present",
			"description" : "A collection of vector images",
			"images" : ["images/funvector-logo.png"]
		}
	]
}

var headerName = HTMLheaderName.replace("%data%", bio.name);
$("#header"). append(headerName);

if (bio.skills.length > 0) {
	$("#header"). append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills"). append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills"). append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills"). append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills"). append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills"). append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience"). append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last"). append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last"). append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last"). append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
		$(".work-entry:last"). append(formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects"). append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last"). append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last"). append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last"). append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last"). append(formattedImage);
			}
		}
	}
}

$("#main"). append(projects.display);

$("#mapDiv"). append(googleMap);