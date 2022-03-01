menu_list_array = ["Veg Margherita Pizza",
                        "Chicken Tandoori Pizza",
                        "Veg Supreme Pizza",
                        "Paneer Tikka Pizza",
                        "Deluxe Veggie Pizza",
                        "Veg Extravaganza Pizza"];

function  showmenu()
var htmldata = "";
menu_list_array.sort();
for(i=0;i<menu_list_array; i++){
    htmldata =htmldata+menu_list_array[i]; '<br>';
    
}
document.getElementById("display_menu").innerHTML = htmldata;

function 

                