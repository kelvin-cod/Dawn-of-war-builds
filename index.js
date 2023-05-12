$(document).ready(function () {
    var heroes = ["bloodseeker", "bristleback", "broodmother", "centaur warrunner", "crystal maiden", "dark willow", "dawnbreaker", "death prophet", "doom", "dragon knight", "earth spirit", "ember spirit", "enchantress", "grimstroke", "hoodwink", "huskar", "kunkka", "lina", "lion", "lone druid", "mars", "monkey king", "morphling", "muerta", "naga siren", "night stalker", "nyx assassin", "outworld destroyer", "pangolier", "phantom assassin", "phantom lancer", "phoenix", "primal beast", "puck", "pudge", "queen of pain", "riki", "silencer", "skywrath mage", "slardar", "snapfire", "spectre", "spirit breaker", "storm spirit", "techies", "templar assassin", "tidehunter", "timbersaw", "tinker", "tiny", "tusk", "weaver", "winter wyvern", "zeus"];

    for (var i = 0; i < heroes.length; i++) {
        $('#example-multiselect').append($(`<option>`, {
            value: heroes[i].toLowerCase(),
            text: heroes[i]
        }));
    }

    $('#example-multiselect ').multiselect({
        nonSelectedText: 'Select the Heroes',
        allSelectedText: 'All Heroes selected',
        nSelectedText: ' Heroes Selected',
        buttonWidth: '100%',
        enableFiltering: true,
        filterBehavior: 'value',
        filterPlaceholder: 'Search...',
        maxHeight: 500,
        selectedClass: 'active multiselect-selected',
        onChange: function (option, checked) {
            var selectedImages = $('#example-multiselect option:selected');
            var selectedImagesHtml = ''; // $(this).val() + "_" +


            selectedImages.each(function () {
                selectedImagesHtml +=
                    //'<h4 class="text-white text-center">'+${$(this).text()}+
                    '</h4> <img class="rounded images" src="./assets/img/' +
                    $(this).text().toLowerCase() + "_1" +
                    '.png" alt=""> ';
            });

            // Caso queria colocar mais de uma imagem usar o padrao abaixo
            // as imagens devem conter o numero correspondente apos o nomes
            // ex. dark willow_2.png

            // selectedImages.each(function () {
            //     selectedImagesHtml += '<img class="rounded images" src="./assets/img/' +
            //         $(this).text().toLowerCase() + "_2" +
            //         '.png" alt=""> ';
            // });


            if (selectedImages.length > 2) {
                $(".container").css("height", "auto !important")
            }
            $('#selected-images').html(selectedImagesHtml);
        }
    });

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