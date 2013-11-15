
$('#titleInput').focus(function() {
            alert('hola');
            if( $(this).val() == 'Title needed' ) {
                $(this).animate({color:'white'}, 1000, function() {
                    $(this).val('').css('color','#333333');
                });
            }
          })
          .blur(function() {
              if( $(this).is(':animated') ) {
                  $(this).stop().css('color','#b94a48');
              }
              if( $(this).val() == '' ) {
                  $(this).val('Title needed');
              }
            });
         