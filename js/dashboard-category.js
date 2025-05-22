function initDashBoardProduct() {
  fetch('./data/Categories.json')
    .then((response) => response.json())
    .then((response) => {
      listCategories = response;
      generateCategoriesDashBoard();
    });
}
function generateCategoriesDashBoard() {
  const table_body = document.getElementById('table-body');
  table_body.innerHTML = ''
  listCategories.forEach((item) => {
    table_body.innerHTML += `
        <tr>
                      <td>
                        <div class="product-td">
                          <h6>${item.name}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="product-td">
                          <p>${item.description}</p>
                        </div>
                      </td>
                      <td>
                        <button type="button" class="btn btn-danger" onclick="confirmDelete(${
                          item.id
                        })">
                          <i class="bi bi-x"></i>
                        </button>
                      </td>
                    </tr>`;
  });
}
function confirmDelete(id) {
  const btn_modal = document.getElementById('btnModal');
  btn_modal.click();
  const btn_delete = document.getElementById('btn-delete');
  btn_delete.onclick = function () {
    listCategories = listCategories.filter((item) => item.id != id);
    generateCategoriesDashBoard()
  };
}

initDashBoardProduct();
