function startGame() {
    document.getElementById('next_solitaire_button').removeEventListener('click', startGame), 
    
    document.getElementById('next_continue_button').removeEventListener('click', continueGame), 
    
    
 document.body.style.overflow = 'visible';
    var e = document.getElementById('splash_title');
    document.body.removeChild(e);
    var t = document.getElementById('splash_background');
    if (document.body.removeChild(t), canvasBoard = document.getElementById('board'), 
        canvasBoard.width = window.innerWidth > document.getElementById('map').width ? 
                            window.innerWidth : document.getElementById('map').width,
                            canvasBoard.height = document.getElementById('map').height, 
                            board = canvasBoard.getContext('2d'), 
                            canvasHexHighlights = document.getElementById('hex_highlights'), 
                            canvasHexHighlights.width = document.getElementById('map').width, 
                            canvasHexHighlights.height = document.getElementById('map').height, 
                            hexHighlights = canvasHexHighlights.getContext('2d'), 
                            canvasCountersHighlights = document.getElementById('counters_highlights'), 
                            canvasCountersHighlights.width = document.getElementById('map').width, 
                            canvasCountersHighlights.height = document.getElementById('map').height, 
                            countersHighlights = canvasCountersHighlights.getContext('2d'),
                            window.innerWidth > 2e3) {
        var e_60 = document.getElementById('help_terrain_img');
        board.drawImage(e_60, 1290, 530, 693, 600);
    }
    if (window.innerWidth > 2400) {
        var e_61 = document.getElementById('help_crt_img');
        board.drawImage(e_61, 0, 0, 600, 480, 2e3, 530, 381, 305), board.drawImage(e_61, 601, 0, 534, 480, 2e3, 830, 339, 305);
    }
    arrows = document.getElementById('arrows_counter'), document.getElementById('help_menu').style.display = 'block', b4mSave ? continueFromSave() : (drawPositionedUnits(), turn1GermanSetupPhase(board, hexHighlights, countersHighlights));
}