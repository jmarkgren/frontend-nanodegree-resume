/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Janelle");

//var awesomeThoughts = "I am Janelle and I am AWESOME!";

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

//console.log(awesomeThoughts);

//console.log(funThoughts);

//$("#main").append(funThoughts);

var name = "Janelle";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Designer");
var skills = ["font-end design, ", "graphic design, ", "UI design"]

$("#header").append(formattedName);
$("#header").append(formattedRole);
//$("#main").append(skills);
//$("#main").append(skills[0]);

var bio = {
  "name" : "Janelle Markgren",
  "role" : "front-end developer",
  "picture" : "images/fry.jpg",
  "welcomeMessage" : "Let's work together!",
  "skills" : ["awesomeness", "delivering things", "design"],
  "contacts" : {
    "phone" : "888",
    "email" : "jsmarkgren@gmail.com"
  }

};

var work = {};
work.position = "Front-end developer";
work.employer  = "PropertySimple";
work.years = 1;

var education = {};
education["name"] = "Univeristy of Minnesota";
education["years"] = "2010-2015";
education["city"] = "Twin Cities";


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.phone);
$("#main").append(bio.picture);
$("#main").append(bio.welcomeMessage);

$("#main").append(work["position"]);
$("#main").append(education.name);




var bio = {
  "name" : "Janelle Markgren",
  "role" : "Front-end Designer",
  "skills" : ["Photoshop", "InDesign","Illustrator", "UX design", "UI design"],
  "languages" : ["English", "Spanish", "HTML5", "CSS3", "JavaScript"],
  "contacts" :
  {
    "whatsapp" : "+569 7794 3338",
    "email" : "jsmarkgren@gmail.com"
  }
}

var education = {
  "schools" : [
  {
    "name" : "University of Minnesota",
    "city" : "Twin Cities",
    "degree" : "BFA",
    "majors" : ["Graphic Design", "Spanish"],
    "dates" : "2010-2015",
    "url" : "http://umn.edu"
  }
],
  "onlineCourses" : [
  {
    "title" : "Font-end Developer Nano Degree",
    "school" : "Udacity",
    "dates" : "2017",
    "url" : "http://www.udacity.com"
  }

