"use strict";

/**
 *
 */
jQuery(function ($) {
  $.validator.addMethod('eMail', function (value, element) {
    return this.optional(element) || /.+@.+/.test(value);
  });
  $('.form-login').validate({
    rules: {
      eMail: {
        required: true,
        maxlength: 256,
        eMail: true
      },
      password: {
        required: true,
        maxlength: 72
      }
    },
    messages: {
      eMail: {
        required: 'メールアドレスは必ず入力してください。',
        maxlength: 'メールアドレスは255文字以下で入力してください。',
        eMail: 'メールアドレスは正しい形式で入力してください。'
      },
      password: {
        required: 'パスワードは必ず入力してください。',
        maxlength: 'パスワードは72文字以下で入力してください。'
      }
    },
    errorElement: 'span',
    errorClass: 'text-danger'
  });
});