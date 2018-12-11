function select_page( name_of_header )
{
    var id = document.getElementById(name_of_header);
    id.classList.add("selected");
}

function show_header()
{
    var id = document.getElementById("header_area");
    id.classList.add("overlay");
}