import { userServices } from '../services/user-service.js';

(() => {
  
  const editUser = (id, name) => {
    const editUserName = document.getElementById('editUserName');
    editUserName.value = name;

    const saveButton = document.getElementById('saveUserButton');
    const editUserModal = new bootstrap.Modal(document.getElementById('editUserModal'));

    const handleSaveClick = async () => {
      const updatedName = editUserName.value;
      try {
        await userServices.updateUser(id, updatedName);
        renderUsers(); // Re-renderiza a lista após a atualização
        editUserName.value = '';
        editUserModal.hide(); // Fecha o modal após salvar
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    };

    // Remover o ouvinte de evento anterior
    saveButton.removeEventListener('click', saveButton.saveHandler);
    
    // Adicionar o novo ouvinte de evento
    saveButton.addEventListener('click', handleSaveClick);
    saveButton.saveHandler = handleSaveClick;

    editUserModal.show();
  };

  renderUsers();
})();