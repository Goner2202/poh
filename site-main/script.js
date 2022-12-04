let form_button = document.getElementById('form-button');
let select1 = document.getElementById('select1');


select1.onchange = function () {
    let sound1 = new Audio('./sound/i-dont-do-anal.mp3');
    let sound2 = new Audio('./sound/fisting-is-300.mp3');
    let sound3 = new Audio('./sound/stick-your-finger-in-my-ass.mp3');
    let sound4 = new Audio('./sound/iam-cumming.mp3');
    let sound5 = new Audio('./sound/lets-suck-some-dick.mp3');

    if (select1.value == 'Einal Cum') {
        sound1.play()
    }

    if (select1.value == 'Doungeon Fisting') {
        sound2.play()
    }

    if (select1.value == 'Finger in ASS') {
        sound3.play()
    }

    if (select1.value == 'Cum Shot') {
        sound4.play()
    }

    if (select1.value == 'Suck Some Dick') {
        sound5.play()
    }
}



form_button.onclick = function () {
    let inputs = document.getElementsByClassName('form-control');
    let email = document.getElementById('exampleInputEmail1').value;
    let name = document.getElementById('exampleInputText1').value;
    let first_name = document.getElementById('exampleInputText2').value;
    let date = document.getElementById('exampleInputDate').value;
    let check_sex = document.getElementById('defaultCheck1');
    let check_form = document.getElementById('exampleCheck1');
    let error = document.getElementById('text-error');



    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.add('inputs-error');
        }
        else {
            inputs[i].classList.remove('inputs-error')
        }
    }

    if (email == '' || name == '' || first_name == '') {
        error.innerHTML = 'Enter the information about you, Fucking Slave!';
        return false;
    }

    else if (email.split('@').length == 1 || email.split('.').length == 1) {
        error.innerHTML = 'Enter your Fucking Email adress!';
        return false;
    }

    else if (name.length <= 2) {
        error.innerHTML = 'Enter your Fucking Slave Name!';
        return false;
    }

    else if (first_name.length <= 2) {
        error.innerHTML = 'Enter your Fucking Slave First-Name';
        return false;
    }

    else if (select1.value == 'Select Your Fetish') {
        error.innerHTML = 'Select your Fetish Beach!';
        return false;
    }

    else if (date == '2018-03-03') {
        error.innerHTML = 'Select date'
        return false;
    }

    else if (select2.value == 'Select Your Cum-ир') {
        error.innerHTML = 'Select your Cum-ир Beach!';
        return false;
    }

    else if (!check_sex.checked) {
        document.getElementById('defaultCheck1').classList.add('inputs-error')
        error.innerHTML = 'Check your SEX'
        return false;
    }

    else if (!check_form.checked) {
        document.getElementById('exampleCheck1').classList.add('inputs-error')
        error.innerHTML = 'Give me Your ASS'
        return false;
    }

    else {
        return true;
    }

}

