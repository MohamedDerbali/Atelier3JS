let btnSubmit = document.querySelector(".submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let inputs = document.getElementsByName("input");
  let nom = inputs[0].value;
  let prenom = inputs[1].value;
  let address = inputs[2].value;
  let numPhone = inputs[3].value;
  let dateNaiss = inputs[4].value;
  let MotPasse = inputs[5].value;
  let confirmMotPasse = inputs[6].value;
  let formData = {
    nom,
    prenom,
    address,
    numPhone,
    dateNaiss,
    MotPasse,
    confirmMotPasse,
  };
  validate(formData);
});

const validate = (data) => {
    console.log( /^[A-Za-z\s]*$/.test(data.nom))
  if (data.nom.length < 3 || !/^[A-Za-z\s]*$/.test(data.nom)) {
    document.getElementsByClassName("errorsInputs")[0].innerHTML =
      "<span style='color:red'>error: le nom doit contenir au moins 3 lettres et vous devez supprimer les chiffres</span>";
  } else{
        document.getElementsByClassName("errorsInputs")[0].innerHTML =
          "<span style='color:green'>validation ok</span>";
  }
};
