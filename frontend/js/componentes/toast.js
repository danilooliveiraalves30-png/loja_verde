// ==================== TOAST ====================

function mostrarToast(mensagem) {
    const toast = document.getElementById('toast');
    toast.textContent = mensagem;
    toast.classList.add('visivel');
    
    setTimeout(() => {
        toast.classList.remove('visivel');
    }, 3000);
}