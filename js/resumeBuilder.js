var bio = {
  'name':'Anita Patra',
  'role':'Software Developer',
  'biopic':'images/profile.jpg',
  'contacts': {
        'mobile': '8582609693',
        'email' : 'anita.ani2007@gmail.com',
        'github' : 'https://github.com/apatraray',
        'location' : 'San Diego'
    },
  'welcomeMessage':'Best is yet to come!!',
  'skills':['Java','SQL','HTML','CSS','Javascript']
};

/**
* @description displays personal details.
*/
bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%',bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
  $('#header').prepend(formattedName, formattedRole);

  var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);

  $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
  $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedGithub);

  var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%',bio.welcomeMessage);

  $('#header').append(formattedBioPic, formattedWelcomeMsg);

  if(bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkill);
    });
  }
};

/**
* @description internationalize name
* @return {string} internationalized name
*/
function inName(){
 var name = $('#name').html();
 var array = name.split(' ');
 array[0] = array[0].slice(0,1).toUpperCase() + array[0].slice(1).toLowerCase();
 name = array[0] + ' ' + array[1].toUpperCase();
 return name;
}

var work = {
  'jobs': [
   {
    'title':'System Developer Analyst',
    'employer':'Accenture',
    'dates':'2014 - present',
    'description': 'The project is to develop a web application which enlists the different benefits that a family ' +
    'can get from the state. Actively involved in web application development for state benefit form. Write rules to ' +
    'check the eligibility of people to get the benefits from the state. Modify Java code so that the new rules will be ' +
    'working fine. The information from the rules are being taken, stored in the database and they are being shown when ' +
    'the required web page is opened to checkout the benefits. Write SQL code to insert data into the database and to ' +
    'fetch data from the database.Test the application if it is running fine with the new rules in place.Find, analyze ' +
    'and fix the issues with the application.Work with Application Architects/Business Process Architects/Specialists ' +
    'and other System Specialists to gather and interpret user/system requirements into design specifications. Coordinate ' +
    'work with other Systems Specialists on and across Application.',
    'location':'Norwalk, CA, USA'},
   {
    'title':'Software Engineer',
    'employer':'Aricent',
    'dates':'2007 - 2009',
    'description': 'The project was to develop and maintain Middleware software.Worked on the log service module.Involved ' +
    'in testing different modules present in the project. Took training on debugging using GDB in Linux environment.logging ' +
    'service module. Wrote shell scripts for build automation. Using Linux command for day to day work. Responsible for ' +
    'detecting memory leaks in various modules by running Valgrind memory leak tool and reporting concerned teams about ' +
    'the memory leak issues.',
    'location':'Gurgaon, Haryana, India'
    }
  ]
};

/**
* @description displays job details.
*/
work.display = function(){
  work.jobs.forEach(function(job) {
    $('#workExperience').append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
    var formattedWorkHistory = HTMLworkDescription.replace('%data%', job.description);
    $('.work-entry:last').append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkHistory);
  });
};

var projects = {
  'projects': [
   {
    'title':'Portfolio Mockup to HTML',
    'dates':'November, 2015',
    'skills':['HTML','CSS','Bootstrap'],
    'images':'images/portfolio.jpg',
    'description':'Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page ' +
    'is fully responsive and works on mobile, tablet, and desktop browsers.'
   }
  ]
};

/**
* @description displays project details.
*/
projects.display = function(){
  projects.projects.forEach(function(project) {
  $('#projects').append(HTMLprojectStart);
  var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
  var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
  var formattedprojectImage = HTMLprojectImage.replace('%data%', project.images);
  var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
  $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedprojectImage);
  });
};

var education = {
  'schools': [
   {
    'name': 'University of Liverpool',
    'location': 'Liverpool, England, UK',
    'degree': 'Post Graduate Diploma',
    'majors': ['Information Technology'],
    'dates': '2011 - 2015',
    'url': 'https://www.liverpool.ac.uk/'
   },
   {
    'name': 'IIT Kharagpur',
    'location': 'Kharagpur, West Bengal, India',
    'degree': 'Masters',
    'majors': ['Mathematics'],
    'dates': '2005 - 2007',
    'url': 'http://www.iitkgp.ac.in/'
   },
   {
    'name': 'Regional institute of Education',
    'location': 'Bhubaneswar, Orissa, India',
    'degree': 'B.Sc,',
    'majors': ['Mathematics', 'Physics', 'Chemistry'],
    'dates': '2001 - 2005',
    'url': 'http://as.ori.nic.in/riebbs/'
   }
  ],
  'onlineCourses': {
    'title': 'Front end web developer nanodegree',
    'school': 'Udacity',
    'date': '2015',
    'url': 'https://www.udacity.com/'
   }
};

/**
* @description displays education details.
*/
education.display = function(){
  education.schools.forEach(function(school) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
    var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
    $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedMajor);
  });
  var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses.title);
  var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses.school);
  var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses.date);
  var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses.url);
  $('.education-entry:last').append(HTMLonlineClasses, formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDate, formattedOnlineURL);
};

bio.display();
work.display();
projects.display();
education.display();

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);