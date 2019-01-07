var file=require('fs');
var read=require('readline-sync');
var utility=require('../Object Oriented Programs/Utility');
var filedata=file.readFileSync('Clinique.json','utf8');
var dataObj=JSON.parse(filedata);
var appo=dataObj.DrAppointment;
var dt=new Date;
var str=(dt.getDate()+2)+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear();
console.log(str);
var Appointment=dataObj.DrAppointment;
utility.RegisterDr(dataObj,file);
// var val=utility.appoinmentSearch(Appointment,0,dataObj,file,str);
// console.log(val);
// var id="D1";
// for(key in Appointment){
//     if(Appointment[key].ID==id){
//         for(key1 in Appointment[key].AppointmentTaken){
//             console.log("hello");
//             if(Appointment[key].AppointmentTaken[key1][str]!=undefined)
//             console.log(Appointment[key].AppointmentTaken[key1][str]);
            
//         }
//     }
// }