const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT');
	res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get('/', function(req, res){
	return res.send({error: false, message: "Welcome"});
	
});


var dbConn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'weekly_report'
});

dbConn.connect();

app.get('/reports/login/:username/:user_password', function(req, res){
	
	let username = req.params.username;
	let user_password = req.params.user_password;
	if(!username || !user_password){
	  return res.status(400).send({error: true, message: "search values is required"})	
	}
	
	dbConn.query('SELECT department.depCode, department.deptName, hod.headNum, hod.headName, hod.headSurname, hod.email, hod.title FROM hod INNER JOIN department ON (hod.depCode = department.depCode) WHERE hod.headNum = ? AND hod.password = ?', [username, user_password], function(error, results, fields){
	
	if(error) throw error;
	let message = "";
	
	if(results.length == 0 || results === undefined){
		return res.send({error: false, data:results[0], state: 0});
	}else{
		return res.send({error: false, data:results[0], state: 1});
	}
					 
	console.log(data);
			
	});	
});

app.get('/reports', function(req, res){
	
	dbConn.query('SELECT lecture.lecName, lecture.lecSurname, lecture.title, lecture_subject.lecSubId, lecture_subject.subjCode, reports.reportNum, reports.presentMode, reports.numStudents, reports.attendAvg, reports.date, reports.reportNum, reports.topicsCovered, reports.challRecomm, reports.assess FROM ((reports INNER JOIN lecture_subject ON (reports.lecSubId = lecture_subject.lecSubId)) INNER JOIN lecture ON (lecture_subject.lecNum = lecture.lecNum ))', function(error, results, fields){
	
			if(error) throw error;
			let message = "";
	
			if(results.length == 0 || results === undefined){
				 message = "Report table is empty";
			}else{
				 message = "Retrieve reports";
			}
			
			 return res.send({error: false, data:results, message: message});
		         console.log(data);
			
	
	});	
});

app.get('/reports/search/all/reports/:reportDate', function(req, res){
	let id = req.params.reportDate;
	if(!id){
	  return res.status(400).send({error: true, message: "Id is required"})	
	}
	
	dbConn.query('SELECT lecture.lecName, lecture.lecSurname, lecture.title, lecture_subject.lecSubId, lecture_subject.subjCode, reports.reportNum, reports.presentMode, reports.numStudents, reports.attendAvg, reports.date, reports.reportNum, reports.topicsCovered, reports.challRecomm, reports.assess FROM ((reports INNER JOIN lecture_subject ON (reports.lecSubId = lecture_subject.lecSubId)) INNER JOIN lecture ON (lecture_subject.lecNum = lecture.lecNum )) WHERE reports.date =?', id, function(error, results, fields){
	
			if(error) throw error;
			let message = "";
	
			if(results.length == 0 || results === undefined){
				 message = "Report table is empty";
			}else{
				 message = "Retrieve reports";
			}
			
			 return res.send({error: false, data:results, message: message});
		         console.log(data);
			
	
	});	
});

app.get('/reports/search/report/:reportDate/:moduleCode', function(req, res){
	let date = req.params.reportDate;
	let moduleCode = req.params.moduleCode;
	if(!date || !moduleCode){
	  return res.status(400).send({error: true, message: "search values is required"})	
	}
	
	dbConn.query('SELECT lecture.lecName, lecture.lecSurname, lecture.title, lecture_subject.lecSubId, lecture_subject.subjCode, reports.reportNum, reports.presentMode, reports.numStudents, reports.attendAvg, reports.date, reports.reportNum, reports.topicsCovered, reports.challRecomm, reports.assess FROM ((reports LEFT JOIN lecture_subject ON (reports.lecSubId = lecture_subject.lecSubId)) INNER JOIN lecture ON (lecture_subject.lecNum = lecture.lecNum )) WHERE lecture_subject.subjCode=? AND reports.date =?', [moduleCode, date], function(error, results, fields){
	
			if(error) throw error;
			let message = "";
	
			if(results.length == 0 || results === undefined){
				 message = "Report table is empty";
			}else{
				 message = "Retrieve reports";
			}
			
			 return res.send({error: false, data:results, message: message});
		         console.log(data);
			
	
	});	
});

app.get('/reports/modules/list', function(req, res){
	
	dbConn.query('SELECT DISTINCT subject.subjCode FROM subject INNER JOIN hod ON (subject.depCode = hod.depCode)', function(error, results, fields){
	
			if(error) throw error;
			let message = "";
	
			if(results.length == 0 || results === undefined){
				 message = "Modules table is empty";
			}else{
				 message = "Retrieve modules";
			}
			
			 return res.send({error: false, data:results, message: message});
		         console.log(data);
			
	
	});	
});

app.get('/reports/:moduleCode', function(req, res){
	let id = req.params.moduleCode;
	if(!id){
	  return res.status(400).send({error: true, message: "Id is required"})	
	}
	
	dbConn.query('SELECT lecture.lecName, lecture.lecSurname, lecture.title, lecture_subject.lecSubId, lecture_subject.subjCode, reports.reportNum, reports.presentMode, reports.numStudents, reports.attendAvg, reports.date, reports.reportNum, reports.topicsCovered, reports.challRecomm, reports.assess FROM ((reports LEFT JOIN lecture_subject ON (reports.lecSubId = lecture_subject.lecSubId)) INNER JOIN lecture ON (lecture_subject.lecNum = lecture.lecNum )) WHERE lecture_subject.subjCode=?', id, function(error, results, fields){
	
			if(error) throw error;
			let message = "";
	
			if(results.length == 0 || results === undefined){
				 message = "Report table is empty";
			}else{
				 message = "Retrieve reports";
			}
			
			 return res.send({error: false, data:results, message: message});
		         console.log(data);
			
	
	});	
});

app.get('/reports/fetchById/:reportId', function(req, res){
	let id = req.params.reportId;
	if(!id){
	  return res.status(400).send({error: true, message: "Id is required"})	
	}
	
	dbConn.query('SELECT lecture.lecName, lecture.lecSurname, lecture.title, lecture_subject.lecSubId, lecture_subject.subjCode, reports.reportNum, reports.presentMode, reports.numStudents, reports.attendAvg, reports.date, reports.reportNum, reports.topicsCovered, reports.challRecomm, reports.assess FROM ((reports INNER JOIN lecture_subject ON (reports.lecSubId = lecture_subject.lecSubId)) INNER JOIN lecture ON (lecture_subject.lecNum = lecture.lecNum )) WHERE reports.reportNum=?', id, function(error, results, fields){
	
			if(error) throw error;
			let message = "";
	
			if(results.length == 0 || results === undefined){
				 message = "IReport table is empty";
			}else{
				 message = "Retrieve by Id reports";
			}
			
			 return res.send({error: false, data:results[0], message: message});
		         console.log(data);
			
	
	});	
});


app.listen(8080, function(){
	console.log('Node is running on port 8080');
});
module.exports = app; 