 /**
 * purpose     :  Stopwatch Program for measuring the time that elapses between the start 
 *                and end clicks.and print elapsed time.
 *                
 * @description
 * @file       :  StopWatch.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  24-12-18
 * 
 */
var utility =require('../Functional program/Utility');
var rl=utility.input();
function stopwatchMain() {
    
    utility.stopwatch(rl);//calling of stopWatch method.
}
stopwatchMain();
