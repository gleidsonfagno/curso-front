// instacia jquery e evita conflitos
// seletores simples
// jQuery( function($){

$(document).ready(function(){
                
        $('.owl-carousel').owlCarousel();

        let titulos = $('h4') //seletor de tag

       let itens = $('.teste-1') //seletor class

       let destaque =$('#teste-2') // seletor id

       console.log(titulos.first());

//        configuracao de Produtos adicionando butao dark

       $('.featured-items a').addClass('btn btn-dark stretch-link');

       $('.featured-items:first h4').append('<span class="badge bg-secondary">Novo título </span>')

       // $('.featured-items:first h4').start('<span class="badge bg-secondary">Novo título </span>')

       // $('.featured-items:first h4').html('<span class="badge bg-secondary">Novo título </span>')

       // $('.featured-items:first h4').addClass('active')

       // $('.featured-items:first h4').removeClass('active')

       // $('.featured-items:first h4').toggleClass('active')

       // $('.featured-items:first h4').hide()

       // $('.featured-items:first h4').fadeIn(2000)

       //  $('.featured-items:first h4').fadeOut(2000)

       // $('.featured-items:first h4').show()

       // $('.featured-items:first h4').fade()

       // $('.featured-items:first h4').css('color', '#ff0000')

       //  $('.featured-items:first h4').css('background', '#ccc')

              // $('.featured-items:first h4').css({
              //        'background':  '#ff0',
              //        'color': '#f00',
              //        'font-weight': '100'
              // })

       $('.featured-items h4').dblclick( function(){

              $(this).css({
                     'background':  '#ff0',
                     'color': '#f00',
                     'font-weight': '100', 
              });

       });

       

       // manipulacao de eventos

       // $('.featured-item').hover(function(){

       //        console.log($(this).find('h4').text());
              
       //    },
       //   function(){
           
       //       console.log($(this).find('h4').text()); 
       //    + " " +console.log($(this).find('h6').text());  
       //    }
       //   )


       // $('.featured-item').mouseleave(function(){

       //        console.log($(this).find('h4').text());
              
       //    })

       //    $('.featured-item').mouseenter(function(){

       //        console.log($(this).find('h4').text());
              
       //    })

       $('.featured-item').on('click', function(event){

              event.preventDefault();
       
              alert('Produto esgotado');
       
       })

           
       // calback

       $('featured-item:nth(1)')
       .hide(2000, function(){
              // este e o calbeck

              alert($(this).find('h4').text() + "esgotado")
       })
       .show(2000, function(){
              console.log($(this).find('h4').text() + "em estoque")
       })


       // animaceoes

       const  duracao = 1000

       $('.featured-item:nth(0)')
       .hide(duracao)
       .show(duracao)
       .fedeOut(duracao)
       .fadeIn(duracao)
       .toggle(duracao)
       .toggle(duracao)
})




// console.log($('h4').text('fala grego'));