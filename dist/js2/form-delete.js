"use strict";

jQuery(function ($) {
  var $form = null;
  $('.form-delete').on('submit', function (e) {
    e.preventDefault();
    var $self = $(this);
    var $record = $(this).parents('.record');
    $('.form-delete-confirm').find('.modal-body').html('以下の顧客情報を削除します。よろしいですか？' + '<table class="table">' + '<tr>' + '<td>姓</td>' + '<td>' + $record.find('.lastName').text() + '</td>' + '<td>名</td>' + '<td>' + $record.find('.firstName').text() + '</td>' + '</tr>' + '<tr>' + '<td>住所①</td>' + '<td colspan="3">' + $record.find('.address1').text() + '</td>' + '</tr>' + '<tr>' + '<td>住所②</td>' + '<td colspan="3">' + $record.find('.address2').text() + '</td>' + '</tr>' + '</table>');
    return $.confirm('.form-delete-confirm').done(function () {
      console.log('done');
      $self.off('submit').submit();
    }).fail(function () {
      console.log('fail');
    });
  });
});