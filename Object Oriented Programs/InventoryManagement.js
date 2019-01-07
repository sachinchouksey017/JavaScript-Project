/**
 * purpose     :  A program to Create InventoryManager to manage the Inventory. The 
 *                Inventory Manager will use InventoryFactory to create Inventory Object
 *                from JSON. The InventoryManager will call each Inventory Object in its list 
 *                to calculate the Inventory Price and then call the Inventory Object to return
 *                the JSON String.
 *             
 * @description
 * @file       :  InventoryManagemant.js
 * @author     :  Sachin chouksey
 * @version    :  1.0
 * @since      :  4-01-19
 * 
 */

var utility=require('../Object Oriented Programs/Utility');
function manage() {
    utility.inventoryManage();//call inventoryMangage method
}
manage();