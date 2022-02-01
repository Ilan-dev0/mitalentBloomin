
function pageload(){
	document.getElementById("page_id").classList.add("pageopen");
}
function search_btn() {
		    document.getElementById("search_input").classList.toggle("search_input_show");
		} 
var x=[document.getElementById("top_link_1"),document.getElementById("top_link_2")];
function menu_btn(){
	document.getElementById("hidden_menu_id").classList.toggle("hidden_menu_open");
	document.getElementById("menu_btn_top_line").classList.toggle("menu_btn_top_line_class");
	document.getElementById("menu_btn_bottom_line").classList.toggle("menu_btn_bottom_line_class");
	document.getElementById("menu_btn_middle_line").classList.toggle("menu_btn_middle_line_class");
	document.getElementById("top_link_1").classList.toggle("top_link_hidden");
	document.getElementById("top_link_2").classList.toggle("top_link_hidden");
	document.getElementById("page_title_id").classList.toggle("invert");
	document.getElementById("svg_search").classList.toggle("invert");
}
