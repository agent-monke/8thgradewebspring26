function askName() {
    var nameReturn =  document.getElementById('ask-name');
    var name = prompt('Please enter your name in the box below.');
    if (name == '') {
        alert('Please try again');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meeet you!'
    }
    nameReturn.style.fontSize = '30px';
    nameReturn.style.color = 'green';
}

function askQuestion() {
    var p = prompt('How much wood would a woodchuck chuck if a woodchuchk could chuck wood?')
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'Yikes! ' + p + 'is a lot of wood!'
    }
}