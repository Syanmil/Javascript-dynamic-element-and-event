$('#newForm').on('submit', function(e) {
  e.preventDefault()
  let content = $('#newForm input.form-control').val()
  $('#TodoList').append(
    `<tr id="tr${$('tr').length}">
      <td>${content}</td>
      <td id="td${$('tr').length}">Uncomplete</td>
      <td>
        <button type="button" class="btn btn-info delete" name="complete" onclick="complete(${$('tr').length})">Complete</button>
        <button type="button" class="btn btn-danger delete" name="delete" onclick="destroy(${$('tr').length})">Delete</button>
      </td>
    </tr>`
  )
})
function destroy(id){
  $(`#tr${id}`).empty()
}
function complete(id){
  $(`#td${id}`).text("Complete")
}
