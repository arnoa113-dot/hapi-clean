// お問い合わせフォーム：FormSubmit（https://formsubmit.co）経由でメール送信
// 送信先を変えるときは FORM_ENDPOINT のメールアドレス部分を書き換える
var FORM_ENDPOINT = 'https://formsubmit.co/ajax/mjam830.32@gmail.com';

// consult.html のボタンから来た場合、依頼タイプを自動で選択（?type=training / ?type=home）
(function(){
  var m = location.search.match(/[?&]type=(\w+)/);
  var map = {training:'清掃スタッフの教育', home:'家庭清掃'};
  if(m && map[m[1]]){ document.querySelector('#inq select[name=type]').value = map[m[1]]; }
})();

document.getElementById('inq').addEventListener('submit', function(e){
  e.preventDefault();
  var form = e.target;
  if(!form.checkValidity() || !document.getElementById('agree').checked){
    alert('必須項目とプライバシーポリシーへの同意をご確認ください。');
    return;
  }
  if(form._honey && form._honey.value){ return; } // スパム対策（ボットのみ入力する隠し欄）

  var btn = form.querySelector('button[type=submit]');
  var btnText = btn.textContent;
  btn.disabled = true;
  btn.textContent = '送信中…';

  var payload = {
    '_subject': '【HAPI CLEAN】お問い合わせ：' + form.facility.value,
    '_template': 'table',
    '_replyto': form.email.value,
    '施設名': form.facility.value,
    '担当者名': form.person.value,
    '電話番号': form.tel.value,
    'メールアドレス': form.email.value,
    '施設の所在地': form.place.value,
    '客室数・物件の広さ': form.rooms.value,
    '希望する依頼タイプ': form.type.value,
    '相談内容': form.message.value
  };

  fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify(payload)
  }).then(function(res){
    if(!res.ok) throw new Error('HTTP ' + res.status);
    form.style.display = 'none';
    var thanks = document.getElementById('thanks');
    thanks.style.display = 'block';
    thanks.scrollIntoView({behavior:'smooth', block:'center'});
  }).catch(function(){
    alert('送信できませんでした。時間をおいて再度お試しいただくか、メール（mjam830.32@gmail.com）で直接ご連絡ください。');
    btn.disabled = false;
    btn.textContent = btnText;
  });
});
