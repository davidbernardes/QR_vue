import QRrious from 'qrious'

export default{
    generate:function(id,text){
        var qr = new QRrious({
        element: document.getElementById(id),
        value: text,
        size:300
      });
      console.log(qr);
    }
}