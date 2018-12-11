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

function init()
{
    console.log('init');
    
}

var mobile_overlay = false;

// Mobile. Show's the menu
function overlay_click()
{
    console.log(mobile_overlay);

    var i;

    //
    if( mobile_overlay == false )
    {
        // Turn overlay state
        mobile_overlay = !mobile_overlay;

        // Show Menu
        var x = document.getElementsByClassName('mobile_page_navigation_area');

        for( i =0; 
             i < x.length; 
             i++ )
        {
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
 
        for( i =0; 
             i < x.length; 
             i++ )
         {
             x[i].classList.add('hide');
         }

    }
}