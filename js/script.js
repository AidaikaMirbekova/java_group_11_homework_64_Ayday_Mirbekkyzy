$('#task_button').on('click', e => {
    e.preventDefault();
    let form = document.getElementById('form_control').value
    document.getElementById('form_task').reset()
    document.getElementById('form_control').focus()
    let classname = document.getElementsByTagName("li").length
    $('<li class="task_text"></li>').attr('id', 'task_' + classname).appendTo('.task_list').text(form)
    $(`#task_${classname}`).attr('ondblclick', `style="text-decoration: line-through;"`)
  })

 