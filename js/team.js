var team = [
	{
		img : "images/team/vishal.jpg",
		Name : "Vishal Menon",
		Position : "Chairman",
		Department : "Electronics Department",
	},
	{
		img : "images/team/abhishek.jpg",
		Name : "Abhishek J",
		Position : "Vice Chairman",
		Department : "Electrical Department",
	},
	{
		img : "images/team/sreevisakh.jpg",
		Name : "Sreevisakh V",
		Position : "Secretary",
		Department : "Electronics Department",
	},
	{
		img : "images/team/amal.jpg",
		Name : "Amal Jose Arackal",
		Position : "Joint Secretary",
		Department : "Mechanical Department",
	},
	{
		img : "images/team/amrutha.jpg",
		Name : "Amrutha Maria Paul",
		Position : "PRO",
		Department : "Electrical Department",
	},
	{
		img : "images/team/merin.jpg",
		Name : "Merin Mariam Jose",
		Position : "Treasurer",
		Department : "Electrical Department",
	},
	{
		img : "images/team/niranjan.jpg",
		Name : "Niranjan S",
		Position : "Overseer",
		Department : "Mechanical Department",
	},
	{
		img : "images/team/georgin.jpg",
		Name : "Georgin Jacob",
		Position : "Overseer",
		Department : "Electrical Department",
	},
	{
		img : "images/team/anar.jpg",
		Name : "Afsal Anar",
		Position : "Event Head",
		Department : "Civil Department",
	},
	{
		img : "images/team/sidharth.jpg",
		Name : "Sidharth N",
		Position : "Event Head",
		Department : "Electronics Department",
	},
	{
		img : "images/team/gayathri.jpg",
		Name : "Gayathri G",
		Position : "Workshop Head",
		Department : "Electrical Department",
	},
	{
		img : "images/team/ashwin.jpg",
		Name : "Ashwin G",
		Position : "Workshop Head",
		Department : "Mechanical Department",
	},
	{
		img : "images/team/adarsh.jpg",
		Name : "Adarsh Anil",
		Position : "Project Head",
		Department : "Electronics Department",
	},
	{
		img : "images/team/tom.jpg",
		Name : "Tom Johnson V",
		Position : "Project Head",
		Department : "Electrical Department",
	},
	{
		img : "images/team/sourav.jpg",
		Name : "Sourav Satheesh",
		Position : "Web Admin",
		Department : "Computer Science",
	},
	{
		img : "images/team/aswin.jpg",
		Name : "Aswin Jayaji",
		Position : "Web Admin",
		Department : "Computer Science",
	},
	{
		img : "images/team/favas.jpg",
		Name : "Favas",
		Position : "Design Head",
		Department : "Electronics Department",
	},
	{
		img : "images/team/nidhi.jpg",
		Name : "Nidhi",
		Position : "Design Head",
		Department : "Electronics Department",
	},
	{
		img : "images/team/manu.jpg",
		Name : "Manu Moncy",
		Position : "Documentaion Head",
		Department : "Electrical Department",
	},
	{
		img : "images/team/vidhya.jpg",
		Name : "Vidhya Sunil",
		Position : "Documentaion Head",
		Department : "Electronics Department",
	},
	{
		img : "images/team/febin.jpg",
		Name : "Febin D Sam",
		Position : "Inventory Management",
		Department : "Electronics Department",
	},
	{
		img : "images/team/roshith.jpg",
		Name : "Roshith S",
		Position : "Inventory Management",
		Department : "Electronics Department",
	},
	{
		img : "images/team/natasha.jpg",
		Name : "Natasha Mathew",
		Position : "Student Rep",
		Department : "Computer Science",
	},
	{
		img : "images/team/vivek.jpg",
		Name : "Vivek",
		Position : "Student Rep",
		Department : "Computer Science",
	},
	{
		img : "images/team/niranjana.jpg",
		Name : "Niranjana J",
		Position : "Campus Coordinator",
		Department : "Electronics Department",
	},
	{
		img : "images/team/tejus.jpg",
		Name : "Thejus P Aditya",
		Position : "Campus Coordinator",
		Department : "Electronics Department",
	},
]

var i;

for(i = 0; i < 26; i++){
	let html = document.getElementById("row").innerHTML;
	html += 
	'<div class="col-sm-4 col-md-3 col-6 team-member">'+
	'<div class="team-image">'+
		'<img src="' + team[i]["img"] + '">'+
	'</div>'+
	'<div class="team-info">'+
	'<span class="team-position">' + team[i]["Position"] + '</span><br>'+
	'<span class="team-name">' + team[i]["Name"] + '</span><br>' +
	'<span class="team-department">' + team[i]["Department"] + '</span>'+
	'</div>'+
	'</div>';
	document.getElementById("row").innerHTML = html;
}