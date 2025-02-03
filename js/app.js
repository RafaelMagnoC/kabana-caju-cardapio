function showDetails(descricao, imagemUrl) {
    // Atualiza o conteúdo do modal com a descrição do prato
    document.getElementById('descricaoModal').innerText = descricao;
    
    // Atualiza a imagem do prato no modal
    document.getElementById('imgModal').src = imagemUrl;
    
    // Exibe o modal
    var modal = new bootstrap.Modal(document.getElementById('modalDescricao'));
    modal.show();
}
