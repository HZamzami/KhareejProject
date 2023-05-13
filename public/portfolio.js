// let primaries = document.getElementsByClassName('is-primary')
// let setPrimaries = document.getElementsByClassName('set-primary')
let resumes = document.querySelectorAll('.resumes');
let businessCards = document.querySelectorAll('.bcs');

function createResume() {
  window.location.href = '../Questions/cv.html';
}


function createBC() {
  window.location.href = '../Questions/card.html';
}

const setCV = (e) => {
  document.querySelectorAll('.is-primary-cv').forEach((el) => {
    el.classList.remove('active');
  })
  document.querySelectorAll('.set-primary-cv').forEach((el) => {
    el.classList.remove('active');
  })
  let caller = e.target;
  caller.classList.toggle('active')
  caller.nextElementSibling.firstChild.classList.toggle('active')
}
const setCard = (e) => {
  document.querySelectorAll('.is-primary-card').forEach((el) => {
    el.classList.remove('active');
  })
  document.querySelectorAll('.set-primary-card').forEach((el) => {
    el.classList.remove('active');
  })
  let caller = e.target;
  caller.classList.toggle('active')
  caller.nextElementSibling.firstChild.classList.toggle('active')
}


document.querySelectorAll('.set-primary-cv').forEach((el) => {
  el.addEventListener('click', setCV)
})

document.querySelectorAll('.set-primary-card').forEach((el) => {
  el.addEventListener('click', setCard)
})


resumes.forEach((resume) => {
  resume.addEventListener('click', createResume)
});

businessCards.forEach((bc) => {
  bc.addEventListener('click', createBC)
});



// modal

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.del-modal.active') // all in case there are more modals later.
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.del-modal')
    closeModal(modal)
  })
})
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}


function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}