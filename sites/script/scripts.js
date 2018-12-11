function select_page( name_of_header )
{
    var x = document.getElementsByClassName( name_of_header );
    var i;

    for( i = 0; 
         i < x.length;
         i ++ )
    {
        x[i].classList.add( "selected_page" );
    }
}

// TODO: Renamed layer, another function. turns header darker. on desktop version.
function use_overlay()
{
    var x = document.getElementsByClassName('page_header_area');
    var i;

    for(i=0; i < x.length; i++)
    {
        x[i].classList.add("overlay");
    }
}

var mobile_overlay = false;

// Mobile. Show's the menu
function overlay_click()
{
    console.log(mobile_overlay);

    if(mobile_overlay == false)
    {
        mobile_overlay = true;

    }
    else 
    {
        mobile_overlay = false;
    }
}