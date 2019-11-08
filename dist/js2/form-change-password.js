"use strict";

jQuery(function ($) {
  var $form = $('.form-change-password');
  var $confirm = $('.dialog');
  $form.validate({
    rules: {
      currentPassword: {
        required: true
      },
      newPassword: {
        required: true,
        maxlength: 72
      },
      confirmPassword: {
        required: true
      }
    },
    messages: {
      currentPassword: {
        required: '現在のパスワードは必ず入力してください。'
      },
      newPassword: {
        required: '新しいパスワードは必ず入力してください。',
        maxlength: 'パスワードは72文字以下で入力してください。'
      },
      confirmPassword: {
        required: '新しいパスワード(確認用)は必ず入力してください。'
      }
    },
    submitHandler: function (f, e) {
      e.preventDefault();
      $confirm.find('.modal-body').html('パスワードを変更します。よろしいですか？');
      return $.confirm('.dialog').done(function () {
        f.submit();
      }).fail(function () {
        console.log('fail');
      });
    }
  });
});