/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Janelle Markgren",
  "role" : "Front-end Designer",
  "contacts" : {
        "mobile": "+569.5135.6275",
        "email": "jsmarkgren@gmail.com",
        "github": "jmarkgren",
        "location": "Santiago, CL"
      },
  "welcomeMessage" : "Designer and Adventure Seeker",
  "skills" : ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesgin", "UI design", "HTML", "CSS", "JavaScript"],
  "biopic" : "string url"
}

var education = {
  "schools": [
  {
    "name" : "University of Minnesota",
    "location" : "Twin Cities",
    "degree" : "BFA",
    "majors" : ["Graphic Design", "Spanish"],
    "dates" : "2010-2015",
    "url" : "http://umn.edu"
  }
],
  "onlineCourses": [
  {
    "title" : "Font-end Developer Nano Degree",
    "school" : "Udacity",
    "dates" : "2017",
    "url" : "http://www.udacity.com"
  }
  ]
}

var work = {
  "jobs": [
  {
    "employer" : "PropertySimple",
    "title" : "UI/Product Designer",
    "location" : "Santiago, CL",
    "dates" : "July 2016-in progress",
    "description" : "PropertySimple is a real estate tech company. I work as a front-end designer for the application."
    },
    {
      "employer" : "Univeristy of Chile",
      "title" : "English Tutor",
      "location" : "Santiago, CL",
      "dates" : "March 2016-August 2016",
      "description" : "I taught English to kids from 8 years to 14 years old. I created activites to keep things interesting."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "This is my title",
      "dates": "2010-2015",
      "description": "This is the descirption",
      "images": ["url", "url"]
    }
  ]
}

bio.display = function() {

var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedHeader);

var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedHeaderRole);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
}

}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchool);

  }
}

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
  }
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

bio.display();
work.display();
projects.display();




$("#mapDiv").append(googleMap);
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});




function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name [1].toUpperCase();
  name [0] = name [0].slice(0,1).toUpperCase() + name [0].slice(1).toLowerCase();
  return name [0] +" "+name[1];
}

$("#main").append(internationalizeButton);












