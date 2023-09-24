const openModalinputs = document.querySelectorAll('[data-modal-target]')
const closeModalinputs = document.querySelectorAll('[data-close-button]')
const blackened = document.getElementById('blackened')

openModalinputs.forEach(input => {
    input.addEventListener('click', () => {
        const modal = document.querySelector(input.dataset.modalTarget)
        openModal(modal)
    })
})

blackened.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalinputs.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal)
{
    if (modal == null) return
    modal.classList.add('show')
    modal.classList.add('active')
    blackened.classList.add('active')
}

function closeModal(modal)
{
    if (modal == null) return
    modal.classList.remove('show')
    modal.classList.remove('active')
    blackened.classList.remove('active')
}