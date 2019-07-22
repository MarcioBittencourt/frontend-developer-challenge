function validateEmail(field) {
    user = field.value.substring(0, field.value.indexOf("@"))
    domain = field.value.substring(field.value.indexOf("@") + 1, field.value.length)

    if ((user.length >= 1) &&
        (domain.length >= 3) &&
        (user.search("@") == -1) &&
        (domain.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (domain.search(" ") == -1) &&
        (domain.search(".") != -1) &&
        (domain.indexOf(".") >= 1) &&
        (domain.lastIndexOf(".") < domain.length - 1)) {

        const alert = document.getElementById("newsletteralert");
        alert.setAttribute('class', 'alert alert-success');
        alert.setAttribute('role', 'alert');
        return alert.innerHTML = "E-mail válido";
    }
    else {
        const alert = document.getElementById("newsletteralert");
        alert.setAttribute('class', 'alert alert-danger');
        alert.setAttribute('role', 'alert');
        return alert.innerHTML = "E-mail inválido";
    }
}