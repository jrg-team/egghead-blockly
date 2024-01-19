'use strict';

let Code = {};
Code.LANGUAGE_NAME = {
  'en': 'English',
  'cn': '简体中文'
};
Code.getLang = function () {
  let lang = window.localStorage.lang;
  if (lang === undefined) {
    lang = 'cn'
    window.localStorage.lang = lang;
  }
  return lang
};
Code.isRtl = function () {
  return false;
};
Code.LANG = Code.getLang();
Code.initLanguage = function () {
  let rtl = Code.isRtl();
  $("html").attr('dir', rtl ? 'rtl' : 'ltr');
  $("html").attr('lang', Code.LANG);
  let languages = [];
  for (let lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  let comp = function (a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  let languageMenu = $('#languageMenu');
  languageMenu.empty();
  for (let i = 0; i < languages.length; i++) {
    let tuple = languages[i];
    let lang = tuple[tuple.length - 1];
    let option = new Option(tuple[0], lang);
    if (lang == Code.LANG) option.selected = true;
    languageMenu.append(option);
  }
  $('#aboutBody').text(MSG['aboutBody']);
  $('#warning').text(MSG['nanoWarning']);
  $('#aboutModalLabel').text(MSG['aboutModalLabel']);
  $('#cardLabel').text(MSG['cardLabel']);
  $('#aboutcardLabel').text(MSG['aboutcardLabel']);
  $('#aboutusbLabel').text(MSG['aboutusbLabel']);
  $('#usbLabel').text(MSG['usbLabel']);
  $('#configModalLabel').text(MSG['configModalLabel']);
  $('#versionModalLabel').text(MSG['versionModalLabel']);
  $('#exampleModalLabel').text(MSG['exampleModalLabel']);
  $('#levelLabel').text(MSG['levelLabel']);
  $('#letiableModalLabel').text(MSG['letiableModalLabel']);
  $('#letiablebody').text(MSG['letiablebody']);
  $('#labelToolboxDefinition').text(MSG['labelToolboxDefinition']);
  $('#survol').text(MSG['survol']);
  $('#span_about').text(MSG['span_about']);
  $('#span_example').text(MSG['span_example']);
  $('#span_connect_serial').text(MSG['span_connect_serial']);
  $('#span_select_all').text(MSG['span_select_all']);
  $('#span_languageMenu').text(MSG['span_languageMenu']);
  $('#span_blocklino').text(MSG['span_blocklino']);
  $('#span_update').text(MSG['span_update']);
  $('#span_verify_update').text(MSG['span_verify_update']);
  $('#span_site').text(MSG['span_site']);
  $('#span_forum').text(MSG['span_forum']);
  $('#span_contact').text(MSG['span_contact']);
  $('#btn_close_config').text(MSG['btn_close']);
  $('#btn_valid_config').text(MSG['btn_valid']);
  $('#btn_close_msg').text(MSG['btn_close']);
  $('#btn_valid_msg').text(MSG['btn_valid']);
  $('#btn_letiable').text(MSG['btn_letiable']);
  let prog = window.localStorage.prog;
  if (prog != "python") {
    $('#btn_preview').attr('title', MSG['btn_preview_ino']);
    $('#btn_saveino').attr('title', MSG['btn_save_ino'])
  } else {
    $('#btn_preview').attr('title', MSG['btn_preview_py']);
    $('#btn_saveino').attr('title', MSG['btn_save_py']);
  }
  $('#btn_copy').attr('title', MSG['btn_copy']);
  $('#btn_print').attr('title', MSG['btn_print']);
  $('#btn_undo').attr('title', MSG['btn_undo']);
  $('#btn_redo').attr('title', MSG['btn_redo']);
  $('#btn_search').attr('title', MSG['btn_search']);
  $('#btn_new').attr('title', MSG['btn_new']);
  $('#btn_saveXML').attr('title', MSG['btn_saveXML']);
  $('#btn_fakeload').attr('title', MSG['btn_fakeload']);
  // $('#btn_term').attr('title', MSG['btn_term']);
  $('#btn_factory').attr('title', MSG['btn_factory']);
  $('#btn_config').attr('title', MSG['btn_config']);
  $('#btn_about').attr('title', MSG['btn_about']);
  $('#btn_example').attr('title', MSG['btn_example']);
  $("xml").find("category").each(function () {
    if (!$(this).attr('id')) {
      $(this).attr('id', $(this).attr('name'));
      $(this).attr('name', Blockly.Msg[$(this).attr('name')]);
    }
  });
  $("#title-project-name").attr('placeholder', MSG['project_name_placeholder'])
};
document.write('<script src="lang/msg_' + Code.LANG + '.js"></script>\n');
document.write('<script src="lang/Blockly_' + Code.LANG + '.js"></script>\n');
document.write('<script src="lang/microbit_' + Code.LANG + '.js"></script>\n');
document.write('<script src="lang/Arduino_' + Code.LANG + '.js"></script>\n');
