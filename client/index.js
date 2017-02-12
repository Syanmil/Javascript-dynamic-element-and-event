$('#newForm').on('submit', function(e) {
  e.preventDefault()
  let content = $('#newForm input.form-control').val()
  $('#TodoList').append(
    `<tr id="tr${$('tr').length}" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">
      <td draggable="false">${content}</td>
      <td draggable="false" id="td${$('tr').length}">Uncomplete</td>
      <td draggable="false">
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
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // $(ev.target).nextSibling.append(document.getElementById(data))
    // ev.target.parentNode.insertBefore(document.getElementById(data), ev.target)
}
