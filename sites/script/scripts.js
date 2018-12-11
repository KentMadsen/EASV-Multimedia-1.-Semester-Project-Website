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

function use_overlay()
{
    var x = document.getElementsByClassName('page_header_area');
    var i;

    for(i=0; i < x.length; i++)
    {
        x[i].classList.add("overlay");
    }
}

function show_overlay()
{
    
}