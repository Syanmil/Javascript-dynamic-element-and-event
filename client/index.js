$(document).ready(function(){

})

$('#newForm').on('submit', function(e) {
  e.preventDefault()
  let content = $('#newForm input.form-control').val()
  $('#TodoList').append(
    `<tr>
      <td>${content}</td>
      <td>Uncomplete</td>
      <td>
        <button type="button" class="btn btn-info delete" name="complete">Complete</button>
        <button type="button" class="btn btn-danger delete" name="delete">Delete</button>
      </td>
    </tr>`
  )
})
