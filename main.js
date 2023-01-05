//creation de la fonction calculateTip()
function calculateTip() {
    //recupere la valeur de l'année
    let billAmount = document.querySelector('#billamt')
    billAmount = billAmount.value 

    //Création de  la variable appelée serviceQuality
    let serviceQuality = document.querySelector('#serviceQual')
    serviceQuality=serviceQuality.value

    //creation de la variable appelée numberOfPeople
    let numberOfPeople = document.querySelector('#peopleamt')
    numberOfPeople = numberOfPeople.value

    // Si serviceQualityest égal à zéro ou billAmountest vide, 
    // alertez l'utilisateur pour qu'il entre ces valeurs.
    if (serviceQuality == 0 || billAmount == '') {
        alert('entrez les valeurs serviceQuality et billAmount')
        return
        
    }

    // Si l'entrée numberOfPeopleest vide ou est inférieure à 1,
    //  définissez une valeur par défaut de 1 sur numberOfPeopleet
    //   assurez-vous que la balise dont l'id est each ,
    //  n'est pas affichée (vérifiez la fin du fichier HTML).
    if (numberOfPeople == '' || numberOfPeople < 1) {
        numberOfPeople.value= 1
        document.querySelector('#each').style.display= 'none'
    }
    // creation de la variable nommée total : la valeur doit être 
    // ( billAmount * serviceQuality ) / numberOfPeople
    let total = ((billAmount*serviceQuality) / numberOfPeople).toFixed(2)

    // propriété CSS "display:block" à la balise dont l'id est totalTip .
    document.querySelector('#totalTip').style.display= 'block'

    // Affiche la variable totaldans la balise dont l'id est tip 
    let tip = document.querySelector('#tip')
    tip.textContent = total
}
// PART II
// ajoutez la propriété CSS "display:none" à la balise dont l'id est totalTi
document.querySelector('#totalTip').style.display= 'none'

// la fonction calculateTip()lorsque la balise dont l'id est calculé est cliquée.
// Astuce : utilisez la méthode onclick
document.querySelector('#calculate').addEventListener('click',calculateTip)

