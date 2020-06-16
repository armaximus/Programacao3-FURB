Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@armaximus 
armaximus
/
Programacao3-FURB
1
0
0
 Code
 Issues 0
 Pull requests 0 Actions
 Projects 0
 Wiki
 Security 0
 Insights
 Settings
Programacao3-FURB/Trabalho1/animacaoScroll.js /
@armaximus armaximus Update animacaoScroll.js
fd5fade 30 seconds ago
80 lines (61 sloc)  2.6 KB
  
Code navigation is available!
Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository. Learn more

(function() {

    let $target = $('.animacao'),
        $anotherTarget = $('.produtosIdentacaoEntreSi'),

        outraClasseDeAnimacao = 'produtosIdentacaoEntreSi-start',
        classeDeAnimacao = 'animacao-start',

        $targetMenu = $('.divsMenu'),
        classeDeAnimacaoDoMenu = 'AsMenus-start',

        offset = $(window).height() * 3 / 4;

    function animacaoDoScroll() {
        percorrendoEfeitos($target, classeDeAnimacao);
        percorrendoEfeitos($anotherTarget, outraClasseDeAnimacao);

        let posicaoMenuNaTela = window.innerHeight * 0.35;

        for (let o = $targetMenu.length - 1; o >= 0; o--) {
            let posicaoUltimoMenu = $targetMenu[o].offsetTop + posicaoMenuNaTela;

            if ($('#divContato').offset().top - $(document).scrollTop() < posicaoUltimoMenu) {
                $($targetMenu[o].children[0]).removeClass(classeDeAnimacaoDoMenu);
            } else if ($anotherTarget.offset().top - $(document).scrollTop() <= posicaoUltimoMenu) {
                $($targetMenu[o].children[0]).addClass(classeDeAnimacaoDoMenu);
            } else {
                $($targetMenu[o].children[0]).removeClass(classeDeAnimacaoDoMenu);
            }
        }
    }

    function percorrendoEfeitos(target, classe) {
        let windowTop = $(document).scrollTop();

        target.each(function() {
            let itemTop = $(this).offset().top;

            if (windowTop > itemTop - offset) {
                $(this).addClass(classe);
            }

            let idDivAtual = $(this)[0].id;
            if (windowTop + (windowTop * 5 / 100) > itemTop) {
                if (idDivAtual == 'divSobre' || idDivAtual == 'divObjetivo') {
                    $('nav')[0].style.background = '#d7bbbb';

                    if (!$(this).hasClass('produtosIdentacaoEntreSi')) {
                        let icone = document.getElementById('loginico');
                        icone.src = 'imagens/person.png';
                    }
                } else {
                    if ($(this).hasClass('produtosIdentacaoEntreSi')) {
                        let icone = document.getElementById('loginico');
                        icone.src = 'imagens/personWhite.png';
                    }
                    $('nav')[0].style.background = 'transparent';
                }
            }
        });
    }

    animacaoDoScroll();

    $(document).scroll(function() {
        animacaoDoScroll()
    });

}());


$('ul a').click(function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});
