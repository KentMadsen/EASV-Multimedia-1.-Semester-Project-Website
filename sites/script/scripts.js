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

var mobile_overlay=false;

// Mobile. Show's the menu
function overlay_click()
{
    if( mobile_overlay )
    {
        mobile_overlay = true;
        
        var x = document.getElementsByClassName('mobile_page_navigation_area');
        var i;

        for(i=0; i < x.length; i++)
        {
            console.log('added');
            x[i].classList.add('show');
        }
    }
    else
    {
        mobile_overlay = false;

        var x = document.getElementsByClassName('mobile_page_navigation_area');
        var i;

        for(i=0; i < x.length; i++)
        {
            console.log('removed');
            x[i].classList.remove('show');
        }
    }

}