/**
 * purpose     :This programme is used to manage a list of Doctors associated with 
 *              the Clinique. This also manages the list of patients who use the
 *              clinique. It manages Doctors by Name, Id, Specialization and 
 *              Availability (AM, PM or both). It manages Patients by Name, 
 *              ID, Mobile Number and Age. The Program allows users to search
 *              Doctor by name, id, Specialization or Availability. Also the 
 *              programs allows users to search patient by name, mobile number or id. 
 *              The programs allows patients to take appointment with the doctor.
 *              A doctor at any availability time can see only 5 patients
 *             
 * @description
 * @file       :  Clinique.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  5-01-19
 * 
 */
try {
    var file = require('fs');
    var utility = require('../Object Oriented Programs/Utility');
    var filedata = file.readFileSync('Clinique.json', 'utf8');
    //for converting object form
    var dataObj = JSON.parse(filedata);
    utility.clinique(dataObj, file);
} catch (err) {
    console.log("Error occured ");
}