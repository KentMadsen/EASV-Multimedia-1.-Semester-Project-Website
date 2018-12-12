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
    
    
}

var mobile_overlay = false;
var id_for_mobile_overlay_nav = 'mobile_page_navigation_area';
var hide_overlay = 'hide';


function switch_mobile_overlay_mode()
{
    mobile_overlay = !mobile_overlay;
}

// Mobile. Show's the menu
function overlay_click()
{
    var i;

    //
    if( mobile_overlay == false )
    {
        // Turn overlay state
        switch_mobile_overlay_mode();

        // Show Menu
        var x = document.getElementsByClassName( id_for_mobile_overlay_nav );

        for( i = 0;
             i < x.length;
             i ++ )
        {
            add_overlay_button_move();
            x[i].classList.remove( hide_overlay );
        }

    }
    else 
    {
        // Turn overlay state to it's opposite
        switch_mobile_overlay_mode();

        // Remove
        // Show Menu
        var x = document.getElementsByClassName( id_for_mobile_overlay_nav );
 
        for( i = 0;
             i < x.length;
             i ++ )
         {
            remove_overlay_button_move();
             x[i].classList.add( hide_overlay );
         }

    }
}

function remove_overlay_button_move()
{
    var x = document.getElementsByClassName('menu_button');
    var i;

    for(i = 0; i < x.length; i++)
    {
        x[i].classList.remove('open');
    }
}

function add_overlay_button_move()
{
    var x = document.getElementsByClassName('menu_button');
    var i;

    for(i = 0; i < x.length; i++)
    {
        for(i = 0; i < x.length; i++)
        {
            x[i].classList.add('open');
        }
    }
}