// bai 1
function search(){
  var frm = document.getElementById('frm-search');
  if(frm.words.value.length==0){
    alert("Nhập nội dung tìm kiếm!!!");
    return false;
  }
  return true;
}




// bai 2
function frmValidate5(frm){
    return frm.checkValidity();
}

// Đăng nhập
var formDangNhap = document.getElementById('formDN');

function validateDN(formDangNhap){
  var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (reg.test(formDangNhap.email.value)==false){
    alert('Email không đúng');
    formDangNhap.email.focus();
    return false;
  }
  if (formDangNhap.pwd.value.length<8){
    alert('Mật khẩu dài hơn 8 ký tự');
    formDangNhap.pwd.focus();
    return false;
  }
  return true;
}

// Liên hệ
var formLienHe = document.getElementById('formLH');

function validateLH(formLienHe){
  if (formLienHe.name.value.length<4){
    alert('Tên dài hơn 4 ký tự');
    formLienHe.name.focus();
    return false;
  }
  var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (reg.test(formLienHe.email.value)==false){
    alert('Email không đúng');
    formLienHe.email.focus();
    return false;
  }
  if (formLienHe.content.value.length<10){
    alert('nội dung từ 10 ký tự');
    formLienHe.content.focus();
    return false;
  }
  return true;
}

// Đăng ký
var formDangKy = document.getElementById('formDK');

function validateDK(formDangKy){
  var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (reg.test(formDangKy.email.value)==false){
    alert('Email không đúng');
    formDangKy.email.focus();
    return false;
  }
  
  if (formDangKy.pwd2.value!=formDangKy.pwd.value){
    alert('Nhập lại mật khẩu');
    formDangKy.pwd.focus();
    return false;
  }
  return true;
}




//câu3
var itemList={
  "sp001":{
    "name":"Sữa chua vị Kiwi",
    "price":21000,
    "photo":"./images/sanpham/kiwi.jpg"
},

"sp002":{
"name":"Sữa chua vị Xoài",
"price":22000,
"photo":"./images/sanpham/mango.jpg"
},

"sp003":{
"name":"Sữa chua vị Dưa Lưới",
"price":23000,
"photo":"./images/sanpham/cantaloupe.jpg"
},

"sp004":{
"name":"Sữa chua vị Mâm Xôi",
"price":24000,
"photo":"./images/sanpham/blackberry.jpg"
},

"sp005":{
"name":"Sữa chua vị Dâu Tây",
"price":25000,
"photo":"./images/sanpham/strawberry.jpg"
},

"sp006":{
"name":"Sữa chua vị Việt Quất",
"price":26000,
"photo":"./images/sanpham/blueberry.jpg"
},

"sp007":{
"name":"Sữa chua vị Bưởi",
"price":27000,
"photo":"./images/sanpham/grapes.jpg"
},

"sp008":{
"name":"Sữa chua vị Táo Xanh",
"price":28000,
"photo":"./images/sanpham/green-apple.jpg"
},

"sp009":{
"name":"Sữa chua vị Dứa",
"price":29000,
"photo":"./images/sanpham/pineapple.jpg"
}
};

function openCart(){
  window.location.href = "donhang.html";
}


function addCart(code){
  var number = parseInt(document.getElementById(code).value);
  console.log(number);
  var current = parseInt(window.localStorage.getItem(code));
  var name = itemList[code].name;
  if(number == 0) return;
  if(typeof localStorage[code] === "undefined"){
      if(number < 100){
          alert("Đã thêm sản phẩm " + name + " với số lượng " + number);
          window.localStorage.setItem(code, number);
      }
      else{
          alert("Bạn chỉ có thể đặt tối đa 100 sản phẩm");
          window.localStorage.setItem(code,100);
      }
  }
  else{
      if((current+number) > 100){
          window.localStorage.setItem(code,100);
          alert("Mỗi sản phẩm chỉ có thể đặt tối đa 100, bạn đã đặt 100 sản phẩm");
          return;
      }
      else{
          window.localStorage.setItem(code,current+number);
          alert("Bạn đã đặt thêm sản phẩm " + name + " với số lượng " + number + " vào giỏ hàng. Số lượng sản phẩm" + name + "hiện có trong giỏ hàng là: " + (number+current));
      } 
  }
}

function showCart(){
  // định dạng đơn vị tiền tệ
  var formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
  });

  // truy cập tbody
  var container = document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
  container.innerHTML="";

  // tạo các biến trong bill
  var sum          = 0; // tổng mõi mặt hàng
  var totalPreTax  = 0; // tổng trước thuế
  var taxRate      = 0.1; // tỉ lệ thuế
  
  for(var i=0; i<window.localStorage.length; i++){

      // kiểm tra sản phẩm có trong localStorage không
      if(typeof itemList[localStorage.key(i)] === "undefined"){
          continue;
      }

      // tạo dòng tr
      var tr = document.createElement("tr");

      // tạo các cột chứa dữ liệu
      var photoCell = document.createElement("td");
      var nameCell = document.createElement("td");
      var priceCell = document.createElement("td");
      var numberCell = document.createElement("td");
      var sumCell = document.createElement("td");
      var removeCell = document.createElement("td");
      var removeLink = document.createElement("a");
      
      // lấy dữ liệu từ đối tượng itemList
      var item = itemList[localStorage.key(i)];

      // hình ảnh
      photoCell.style.textAlign="center";
      photoCell.innerHTML = "<img src='"+item.photo+"' class='round-figure' width='100px'/>";
      // tên
      nameCell.innerHTML = item.name;
      // giá
      priceCell.innerHTML = formatter.format(item.price);
      priceCell.style.textAlign="right";
      // số lượng
      var number = localStorage.getItem(localStorage.key(i));
      numberCell.innerHTML = number;
      numberCell.style.textAlign = "right";
      // tổng
      sum = number*item.price;
      sumCell.innerHTML = formatter.format(sum);
      sumCell.style.textAlign = "right";
      // xóa
      removeLink.innerHTML = "<i class='fa fa-trash icon-pink' id='color-green'></i>";
      removeLink.setAttribute("href", "#");
      removeLink.setAttribute("data-code", localStorage.key(i));
      removeLink.onclick = function(){
          removeCart(this.dataset.code);
      };
      removeCell.style.textAlign = "center";
      removeCell.appendChild(removeLink);
      
      // thêm các td vào tr
      tr.appendChild(photoCell);
      tr.appendChild(nameCell);
      tr.appendChild(numberCell);
      tr.appendChild(priceCell);
      tr.appendChild(sumCell);
      tr.appendChild(removeCell);
      
      //thêm tr vào tbody
      container.appendChild(tr);

      // tính tổng thành tiền ban đầu
      totalPreTax += sum;
      
  }


document.getElementById('money-item').innerHTML = formatter.format(totalPreTax);
document.getElementById('money-ck').innerHTML =formatter.format(taxRate * totalPreTax);
document.getElementById("money-tax").innerHTML = formatter.format((totalPreTax-(taxRate * totalPreTax)*10/100));
document.getElementById("bill").innerHTML = formatter.format(totalPreTax-(taxRate * totalPreTax)+((totalPreTax-(taxRate * totalPreTax)*10/100)));
}



// Hàm xóa sản phẩm khỏi giỏ hàng
function removeCart(code){
  if(typeof window.localStorage[code] !== "undefined"){
      // xóa sản phẩm khỏi localStorage
      window.localStorage.removeItem(code);
      // xóa nội dung sản phẩm vừa xóa trong tbody
      document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML = "";
      // hiển thị lại nội dung sau khi xóa
      alert("Đã xóa sản phẩm " + itemList[code].name)
      showCart();
  }
  
}

window.onstorage = showCart(); 

