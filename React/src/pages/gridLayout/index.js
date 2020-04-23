function toCheck() {
  //获取conferenceId
  var rows = $('#dg').datagrid('getSelections');
  if (rows.length != 1) {
    $.messager.alert('提示', '请选择一条数据');
    return false;
  }
  if (rows[0].status == '2') {
    $.messager.alert('提示', '该状态不需要审核！');
    return false;
  }
  if (rows[0].status == '0' && rows[0].checkUser != '${user.userId}') {
    $.messager.alert('提示', '该状态不需要审核！');
    return false;
  }
  if (rows[0].status == '1' && rows[0].check2User != '${user.userId}') {
    $.messager.alert('提示', '该状态不需要审核！');
    return false;
  }

  submitData(
    '/pro_Conference!queryOtherPersonnelList.action',
    {
      'conference.conferenceId': rows[0].id
    },
    function(data) {}
  );
  $.ajax({
    url: '/pro_Conference!queryOtherPersonnelList.action',
    data: { 'conference.conferenceId': rows[0].id },
    async: false,
    success: function(data) {
      if (data.length <= 0) {
        $.messager.alert(
          '提示信息',
          '该条数据没有参会人员，请编辑后再提交审核'
        );
        flag = true;
        return;
      }
    }
  });
  $('#check_dlg').css('display', 'block');
  $('#check_dlg').dialog({ modal: true });
  $('#check_dlg')
    .dialog('open')
    .dialog('setTitle', '审核意见');
  $('#check_dlg').dialog('center');
  $('#checkPass').hide();
  $('#toGetCheckUser').show();
  if (rows[0].status == '1') {
    $('#checkPass').show();
    $('#toGetCheckUser').hide();
  }
}
