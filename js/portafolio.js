
function showPersonajes(){
    document.getElementById('personajes').style.display='';
    document.getElementById('sombras').style.display='none';
    document.getElementById('gameplay').style.display='none';
    document.getElementById('consejos').style.display='none';
}

function showSombras(){
    document.getElementById('personajes').style.display='none';
    document.getElementById('sombras').style.display='';
    document.getElementById('gameplay').style.display='none';
    document.getElementById('consejos').style.display='none';
}

function showGameplay(){
    document.getElementById('personajes').style.display='none';
    document.getElementById('sombras').style.display='none';
    document.getElementById('gameplay').style.display='';
    document.getElementById('consejos').style.display='none';
}

function showConsejos(){
    document.getElementById('personajes').style.display='none';
    document.getElementById('sombras').style.display='none';
    document.getElementById('gameplay').style.display='none';
    document.getElementById('consejos').style.display='';
}