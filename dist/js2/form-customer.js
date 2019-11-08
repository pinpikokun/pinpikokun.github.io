"use strict";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Confirm from './confirm.js';
// import Confirm from './confirm.js';
jQuery(function ($) {
  var $form = $('.form-customer');
  var $confirm = $('.form-customer-confirm'); // var $conf = new Confirm();
  // var $conf = Confirm();
  // let $conf;(async () => {
  //   $conf = await import('./confirm.js')
  //   $conf = $conf.default
  // })()

  let $conf;

  (async () => $conf = await Promise.resolve().then(() => _interopRequireWildcard(require('./confirm.js'))))();

  $.validator.addMethod('postalCode', function (value, element) {
    return this.optional(element) || /[0-9]{3}-[0-9]{4}/.test(value);
  });
  var dialogResult = false;
  $form.validate({
    rules: {
      lastName: {
        required: true
      },
      firstName: {
        required: true
      },
      postalCode1: {
        required: true,
        postalCode: true
      },
      address1: {
        required: true
      },
      postalCode2: {
        postalCode: true
      }
    },
    messages: {
      lastName: {
        required: '姓は必ず入力してください。'
      },
      firstName: {
        required: '名は必ず入力してください。'
      },
      postalCode1: {
        required: '郵便番号①は必ず入力してください。',
        postalCode: '郵便番号はハイフンを含めて入力してください。'
      },
      address1: {
        required: '住所①は必ず入力してください。'
      },
      postalCode2: {
        postalCode: '郵便番号はハイフンを含めて入力してください。'
      }
    },
    submitHandler: function (f, e) {
      e.preventDefault();
      $confirm.find('.modal-body').html('以下の顧客情報を登録します。よろしいですか？' + '<table class="table">' + '<tr>' + '<td>姓</td>' + '<td>' + $(f).find('[name=lastName]').val() + '</td>' + '<td>名</td>' + '<td>' + $(f).find('[name=firstName]').val() + '</td>' + '</tr>' + '<tr>' + '<td>郵便番号①</td>' + '<td colspan="3">' + $(f).find('[name=postalCode1]').val() + '</td>' + '</tr>' + '<tr>' + '<td>住所①</td>' + '<td colspan="3">' + $(f).find('[name=address1]').val() + '</td>' + '</tr>' + '<tr>' + '<td>郵便番号②</td>' + '<td colspan="3">' + $(f).find('[name=postalCode2]').val() + '</td>' + '</tr>' + '<tr>' + '<td>住所②</td>' + '<td colspan="3">' + $(f).find('[name=address2]').val() + '</td>' + '</tr>' + '</table>');
      return $conf.confirmDialog('.form-customer-confirm').done(function () {
        f.submit();
      }).fail(function () {
        console.log('fail');
      });
    }
  }); //住所検索ボタン

  $form.find('.search-address').on('click', function () {
    $.ajax({
      url: '/postal-code',
      type: 'GET',
      data: {
        'postalCode': $(this).parents('form').find('[name=' + $(this).data('source') + ']').val()
      },
      context: this
    }).done(function (data) {
      console.log(data);
      $(this).parents('form').find('[name=' + $(this).data('dest') + ']').val(data);
    });
  });
});