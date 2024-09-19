// Séquence correcte (haut, bas, droite, gauche)
const correctSequence = ['haut', 'bas', 'droite', 'gauche'];
let userSequence = [];

document.querySelectorAll('.direction').forEach(button => {
    button.addEventListener('click', (event) => {
        const direction = event.target.id;
        userSequence.push(direction);

        // Si la séquence entrée est de la même longueur que la séquence correcte
        if (userSequence.length === correctSequence.length) {
            if (arraysEqual(userSequence, correctSequence)) {
                document.getElementById('result').textContent = 'Succès ! Vous avez trouvé la bonne combinaison.';
                document.getElementById('result').style.color = 'green';
            } else {
                document.getElementById('result').textContent = 'Échec ! Essayez à nouveau.';
                document.getElementById('result').style.color = 'red';
            }
            // Réinitialiser la séquence de l'utilisateur
            userSequence = [];
        }
    });
});

// Fonction pour comparer deux tableaux
function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
