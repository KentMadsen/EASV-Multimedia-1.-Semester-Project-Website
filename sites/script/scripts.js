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

var mobile_overlay = true;

// Mobile. Show's the menu
function overlay_click()
{
    console.log(mobile_overlay);

    //
    if( mobile_overlay == false )
    {
        // Turn overlay state
        mobile_overlay = !mobile_overlay;

        // Show Menu
        var x = document.getElementsByClassName('mobile_page_navigation_area');
        var i;

        for(i =0; i < x.length; i++)
        {
            console.log('removed');
            x[i].classList.remove('hide');
        }

    }
    else 
    {
        // Turn overlay state to it's opposite
        mobile_overlay = !mobile_overlay;

        // Remove
         // Show Menu
         var x = document.getElementsByClassName('mobile_page_navigation_area');
         var i;
 
         for(i =0; i < x.length; i++)
         {
             console.log('add');
             x[i].classList.add('hide');
         }

    }
}