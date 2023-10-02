var heroesSelecionados = []; // Array para armazenar os heróis selecionados
var heroesBase = [];
var mostrarSomenteSelecionados = false;
let url = 'https://api.opendota.com/api/heroes'; // url da api


var heroesImages = [{
        heroName: "bloodseeker",
        imageURL: "./assets/img/bloodseeker_1.png"
    },
    {
        heroName: "bristleback",
        imageURL: "./assets/img/bristleback_1.png"
    },
    {
        heroName: "broodmother",
        imageURL: "./assets/img/broodmother_1.png"
    },
    {
        heroName: "centaur warrunner",
        imageURL: "./assets/img/centaur warrunner_1.png"
    },
    {
        heroName: "crystal maiden",
        imageURL: "./assets/img/crystal maiden_1.png"
    },
    {
        heroName: "dark willow",
        imageURL: "./assets/img/dark willow_1.png"
    },
    {
        heroName: "dawnbreaker",
        imageURL: "./assets/img/dawnbreaker_1.png"
    },
    {
        heroName: "death prophet",
        imageURL: "./assets/img/death prophet_1.png"
    },
    {
        heroName: "doom",
        imageURL: "./assets/img/doom_1.png"
    },
    {
        heroName: "dragon knight",
        imageURL: "./assets/img/dragon knight_1.png"
    },
    {
        heroName: "earth spirit",
        imageURL: "./assets/img/earth spirit_1.png"
    },
    {
        heroName: "ember spirit",
        imageURL: "./assets/img/ember spirit_1.png"
    },
    {
        heroName: "enchantress",
        imageURL: "./assets/img/enchantress_1.png"
    },
    {
        heroName: "grimstroke",
        imageURL: "./assets/img/grimstroke_1.png"
    },
    {
        heroName: "hoodwink",
        imageURL: "./assets/img/hoodwink_1.png"
    },
    {
        heroName: "huskar",
        imageURL: "./assets/img/huskar_1.png"
    },
    {
        heroName: "kunkka",
        imageURL: "./assets/img/kunkka_1.png"
    },
    {
        heroName: "lina",
        imageURL: "./assets/img/lina_1.png"
    },
    {
        heroName: "lion",
        imageURL: "./assets/img/lion_1.png"
    },
    {
        heroName: "lone druid",
        imageURL: "./assets/img/lone druid_1.png"
    },
    {
        heroName: "mars",
        imageURL: "./assets/img/mars_1.png"
    },
    {
        heroName: "monkey king",
        imageURL: "./assets/img/monkey_king_1.png"
    },
    {
        heroName: "morphling",
        imageURL: "./assets/img/morphling_1.png"
    },
    {
        heroName: "muerta",
        imageURL: "./assets/img/muerta_1.png"
    },
    {
        heroName: "naga siren",
        imageURL: "./assets/img/naga siren_1.png"
    },
    {
        heroName: "night stalker",
        imageURL: "./assets/img/night stalker_1.png"
    },
    {
        heroName: "nyx assassin",
        imageURL: "./assets/img/nyx assassin_1.png"
    },
    {
        heroName: "outworld destroyer",
        imageURL: "./assets/img/outworld destroyer_1.png"
    },
    {
        heroName: "pangolier",
        imageURL: "./assets/img/pangolier_1.png"
    },
    {
        heroName: "phantom assassin",
        imageURL: "./assets/img/phantom assassin_1.png"
    },
    {
        heroName: "phantom lancer",
        imageURL: "./assets/img/phantom lancer_1.png"
    },
    {
        heroName: "phoenix",
        imageURL: "./assets/img/phoenix 1.png"
    },
    {
        heroName: "primal beast",
        imageURL: "./assets/img/primal beast_1.png"
    },
    {
        heroName: "puck",
        imageURL: "./assets/img/puck_1.png"
    },
    {
        heroName: "pudge",
        imageURL: "./assets/img/pudge_1.png"
    },
    {
        heroName: "queen of pain",
        imageURL: "./assets/img/queen of pain_1.png"
    },
    {
        heroName: "riki",
        imageURL: "./assets/img/riki_1.png"
    },
    {
        heroName: "silencer",
        imageURL: "./assets/img/silencer_1.png"
    },
    {
        heroName: "skywrath mage",
        imageURL: "./assets/img/skywrath mage_1.png"
    },
    {
        heroName: "slardar",
        imageURL: "./assets/img/slardar_1.png"
    },
    {
        heroName: "snapfire",
        imageURL: "./assets/img/snapfire_1.png"
    },
    {
        heroName: "spectre",
        imageURL: "./assets/img/spectre_1.png"
    },
    {
        heroName: "spirit breaker",
        imageURL: "./assets/img/spirit breaker_1.png"
    },
    {
        heroName: "storm spirit",
        imageURL: "./assets/img/storm spirit_1.png"
    },
    {
        heroName: "techies",
        imageURL: "./assets/img/techies_1.png"
    },
    {
        heroName: "templar assassin",
        imageURL: "./assets/img/templar assassin_1.png"
    },
    {
        heroName: "tidehunter",
        imageURL: "./assets/img/tidehunter_1.png"
    },
    {
        heroName: "timbersaw",
        imageURL: "./assets/img/timbersaw_1.png"
    },
    {
        heroName: "tinker",
        imageURL: "./assets/img/tinker_1.png"
    },
    {
        heroName: "tiny",
        imageURL: "./assets/img/tiny_1.png"
    },
    {
        heroName: "tusk",
        imageURL: "./assets/img/tusk_1.png"
    },
    {
        heroName: "weaver",
        imageURL: "./assets/img/weaver_1.png"
    },
    {
        heroName: "winter wyvern",
        imageURL: "./assets/img/winter wyvern_1.png"
    },
    {
        heroName: "zeus",
        imageURL: "./assets/img/zeus_1.png"
    }
];

function limparHeroisSelecionados() {
    heroesSelecionados = []; // Limpa o array de heróis selecionados
    $('.hero-item.selecionado').removeClass(
        'selecionado'); // Remove a classe 'selecionado' dos elementos visuais
    $('#selectedHeroesImages').empty(); // Limpa as imagens dos heróis selecionados

    toggleSelectedHeroes(); //volta pra tela base

};

//função para selecionar heroi e chamas as imagens
function toggleSelectedHeroes() {

    $('.hero-item:not(.selecionado)').toggle();

    showSelectedHeroesImages();

    if (heroesSelecionados.length > 1) {

        // $(".images").css("width", "50% !important");
        $(".images").addClass("images50");
    }

}

// Função para ocultar um herói selecionado ao clicar nele
function ocultarHeroiSelecionado(link) {
    // Verificar se o link corresponde a um herói selecionado
    if (link.hasClass('selecionado')) {
        link.hide();
        // Atualizar a exibição das imagens dos heróis selecionados
        showSelectedHeroesImages();
    }
}

function showSelectedHeroesImages() {
    // Limpar as imagens exibidas anteriormente
    $('#selectedHeroesImages').empty();

    // Iterar pelos nomes dos heróis selecionados e exibir suas imagens relacionadas
    heroesSelecionados.forEach(function (heroName) {
        // Procurar o herói no array de imagens
        var heroImage = heroesImages.find(function (hero) {
            return hero.heroName === heroName;
        });

        if (heroImage) {
            var imgElement = $('<img>', {
                src: heroImage.imageURL,
                alt: heroName,
                class: 'selected-hero-image rounded images img-fluid'
            });
            $('#selectedHeroesImages').append(imgElement);
        }

    });
};




function verificarEstadoHeroisSelecionados() {
    // Verificar se o array de heróis selecionados está vazio
    if (heroesSelecionados.length === 0) {
        // Se estiver vazio, desabilite o botão de ocultar
        $('#ocultar').prop('disabled', true);
        $('.hero-item:not(.selecionado)').toggle();
        $("#clearSelections").hide();
    } else {
        // Caso contrário, habilite o botão de ocultar
        $('#ocultar').prop('disabled', false);
    }
}

//get na api de herois
$.ajax({
    url: url,
    type: 'GET',
    success: function (data) {
        var links = [];
        // console.log(data)

        data.forEach(function (hero) {
            var link = $('<div>', {
                id: hero.id,
                class: 'hero-item',
                hero_name: hero.localized_name.toLowerCase()
            });

            var divWrapper = $('<div>', {
                class: 'hero-wrapper'
            });


            let hero_regex = hero.localized_name.replace(' ', '_').toLowerCase();

            if (hero_regex == "anti-mage") {
                hero_regex = 'antimage';
            } else if (hero_regex == "windranger") {
                hero_regex = 'windrunner';
            } else if (hero_regex == "lifestealer") {
                hero_regex = 'life_stealer';
            } else if (hero_regex == "io") {
                hero_regex = 'wisp';
            } else if (hero_regex == "vengeful_spirit") {
                hero_regex = 'vengefulspirit';
            } else if (hero_regex == "keeper_of the light") {
                hero_regex = 'keeper_of_the_light';
            } else if (hero_regex == "timbersaw") {
                hero_regex = 'shredder';
            } else if (hero_regex == "wraith_king") {
                hero_regex = 'skeleton_king';
            } else if (hero_regex == "necrophos") {
                hero_regex = 'necrolyte';
            } else if (hero_regex == "zeus") {
                hero_regex = 'zuus';
            } else if (hero_regex == "doom") {
                hero_regex = 'doom_bringer';
            } else if (hero_regex == "nature's_prophet") {
                hero_regex = 'furion';
            } else if (hero_regex == "shadow_fiend") {
                hero_regex = 'nevermore';
            } else if (hero_regex == "magnus") {
                hero_regex = 'magnataur';
            } else if (hero_regex == "queen_of pain") {
                hero_regex = 'queenofpain';
            } else if (hero_regex == "treant_protector") {
                hero_regex = 'treant';
            } else if (hero_regex == "outworld_destroyer") {
                hero_regex = 'obsidian_destroyer';
            } else if (hero_regex == "clockwerk") {
                hero_regex = 'rattletrap';
            } else if (hero_regex == "centaur_warrunner") {
                hero_regex = 'centaur';
            } else if (hero_regex == "underlord") {
                hero_regex = 'abyssal_underlord';
            }
            var imgHero = $('<img>', {
                src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero_regex}.png`, // Substitua pela URL da imagem correspondente ao herói
                alt: hero.localized_name,
                class: 'hero-image'
            });

            var nomeHeroiBaixo = $(`<p class="text-white">${hero.localized_name} </p>`);

            // Adicionar evento de clique para tratar a seleção
            link.click(function () {
                var nomeHeroi = hero.localized_name.toLowerCase();

                // Verificar se o herói já está na lista de heróis selecionados
                var index = heroesSelecionados.indexOf(nomeHeroi);
                if (index !== -1) {
                    heroesSelecionados.splice(index, 1);
                    link.removeClass('selecionado');
                    // $(link).css("display", 'none');
                    //  ocultarHeroiSelecionado(link);
                   // verificarEstadoHeroisSelecionados();
                } else {
                    heroesSelecionados.push(nomeHeroi);
                    link.addClass('selecionado');
                    $("#ocultar").removeAttr("disabled");
                    $("#clearSelections").show();
                }

                // Imprimir os heróis selecionados
                console.log('Heróis selecionados:', heroesSelecionados);
            });


            divWrapper.append(imgHero);
            divWrapper.append(nomeHeroiBaixo);
            link.append(divWrapper);

            links.push(link);
            heroesBase.push(link)
        });

        // Ordenar os elementos <a> em ordem alfabética com base no texto
        links.sort(function (a, b) {
            return a.text().localeCompare(b.text());
        });

        // Limpar o contêiner antes de adicionar os elementos ordenados
        $('#container').empty();

        // Adicionar os elementos <a> ordenados ao contêiner
        links.forEach(function (link) {
            $('#container').append(link);
        });
        heroesBase = links;

    },
    error: function (xhr, status, error) {
        console.error('Erro na requisição:', error);
    }
});

$(document).ready(function () {
    $('#searchInput').on('input', function () {
        var searchText = $(this).val().toLowerCase();
        $('.hero-item').each(function () {
            var heroName = $(this).attr("hero_name").toLowerCase();;

            if (heroName.includes(searchText)) {
                $(this).show();
            } else {

                $(this).hide();
            }
        });
    });

    $('#searchInput').trigger('input');


    var selectedImagesHtml = '';
    // Adicionar evento de clique para ocultar um herói selecionado quando todos estão visíveis
    $("#clearSelections").hide();

    $('#selected-images').html(selectedImagesHtml);


});



PayPal.Donation.Button({
    env: 'production',
    hosted_button_id: 'HYFBKMYB2RMLQ',
    image: {
        src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
        alt: 'Donate with PayPal button',
        title: 'PayPal - The safer, easier way to pay online!',
    }
}).render('#donate-button');