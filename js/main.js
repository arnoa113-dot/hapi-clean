// お問い合わせフォーム：送信先サービス接続までの簡易動作（送信内容は保存されません）
document.getElementById('inq').addEventListener('submit', function(e){
  e.preventDefault();
  var form = e.target;
  if(!form.checkValidity() || !document.getElementById('agree').checked){
    alert('必須項目とプライバシーポリシーへの同意をご確認ください。');
    return;
  }
  form.style.display = 'none';
  document.getElementById('thanks').style.display = 'block';
  document.getElementById('thanks').scrollIntoView({behavior:'smooth', block:'center'});
});
