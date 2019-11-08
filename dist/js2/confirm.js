"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmDialog = void 0;

// (function($){
//    $.confirm = function(expr){
//        var deferred = $.Deferred();
//        var $dialog = $(expr);
//        $dialog
//            .data('resolve', false)
//            .on('click', '.button-ok', function(){
//                $dialog
//                    .data('resolve', true)
//                    .modal('hide');
//            })
//            .one('hidden.bs.modal', function(){
//                $(this).off('click', '.button-ok');
//                if($(this).data('resolve')) {
//                    deferred.resolve();
//                } else {
//                    deferred.reject();
//                }
//            })
//            .modal();
//        return deferred.promise();
//    }
// })(jQuery);
// function confirmFunction(){
//    $.confirm = function(expr){
//        var deferred = $.Deferred();
//        var $dialog = $(expr);
//        $dialog
//            .data('resolve', false)
//            .on('click', '.button-ok', function(){
//                $dialog
//                    .data('resolve', true)
//                    .modal('hide');
//            })
//            .one('hidden.bs.modal', function(){
//                $(this).off('click', '.button-ok');
//                if($(this).data('resolve')) {
//                    deferred.resolve();
//                } else {
//                    deferred.reject();
//                }
//            })
//            .modal();
//        return deferred.promise();
//    }
// }
// export { confirmFunction };
// export default class {
//   constructor() {
//     this.confirmDialog = function(expr){
//       var deferred = $.Deferred()
//       var $dialog = $(expr)
//       $dialog
//       .data('resolve', false)
//       .on('click', '.button-ok', function(){
//         $dialog
//         .data('resolve', true)
//         .modal('hide')
//       })
//       .one('hidden.bs.modal', function(){
//         $(this).off('click', '.button-ok')
//         if($(this).data('resolve')) {
//           deferred.resolve()
//         } else {
//           deferred.reject()
//         }
//       })
//       .modal()
//       return deferred.promise()
//     }
//   }
// }
var confirmDialog = function (expr) {
  var deferred = $.Deferred();
  var $dialog = $(expr);
  $dialog.data('resolve', false).on('click', '.button-ok', function () {
    $dialog.data('resolve', true).modal('hide');
  }).one('hidden.bs.modal', function () {
    $(this).off('click', '.button-ok');

    if ($(this).data('resolve')) {
      deferred.resolve();
    } else {
      deferred.reject();
    }
  }).modal();
  return deferred.promise();
};

exports.confirmDialog = confirmDialog;