var currentPosition = false;

window.onscroll = function()
{
  var currentScrollPos = window.pageYOffset;

  if( currentScrollPos > 250 )
  {
      var x = document.getElementsByClassName('page_navigation_area');
      var i;
      
      for(  i = 0; 
            i < x.length; 
            i ++ )
      {
          x[i].classList.add('show');
      }
  }
  else 
  {
      var x = document.getElementsByClassName('page_navigation_area');
      var i;

      for(  i = 0; 
            i < x.length; 
            i ++ )
      {
          x[i].classList.remove('show');
      }
  }
}