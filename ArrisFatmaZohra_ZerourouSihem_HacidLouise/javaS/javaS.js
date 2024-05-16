
document.addEventListener('DOMContentLoaded', function() {
 const openModalButton = document.getElementById('openModalButton');
 const reservationModal = document.getElementById('reservationModal');
 const closeModalButton = document.getElementById('closeModalButton');
 const reservationForm = document.getElementById('reservationForm');

 // Fonction pour ouvrir la modal
 function openModal() {
     reservationModal.style.display = 'block';
 }

 // Fonction pour fermer la modal
 function closeModal() {
     reservationModal.style.display = 'none';
 }

 openModalButton.addEventListener('click', openModal);

 // Écouter le clic sur le bouton pour fermer la modal
 closeModalButton.addEventListener('click', closeModal);

 // Écouter la soumission du formulaire
 reservationForm.addEventListener('submit', function(event) {
     event.preventDefault(); // Empêcher le comportement par défaut du formulaire

     // Récupérer les valeurs saisies par l'utilisateur
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const date = document.getElementById('date').value;
     const time = document.getElementById('time').value;

     
     const reservationData = {
         name: name,
         email: email,
         date: date,
         time: time
     };

     // Affichage des données dans la console (à des fins de débogage)
     console.log('Données de réservation:', reservationData);

      throw new Error('Erreur lors de la soumission du formulaire.');
    
     
     // Exemple avec alerte de succès (à supprimer une fois le code backend réel implémenté)
     alert('Réservation confirmée avec succès !');
     closeModal(); // Fermer la modal (pour l'exemple, à adapter avec votre code réel)
 });
});

