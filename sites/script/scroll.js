var currentPosition = false;

window.onscroll = function()
{
  var currentScrollPos = window.pageYOffset;

  if( currentScrollPos > 400 )
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
      for(  i = 0; 
            i < x.length; 
            i ++ )
      {
          x[i].classList.remove('show');
      }
  }
}