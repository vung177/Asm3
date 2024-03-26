'use strict';

// Ẩn hiện thông tin cá nhân
const buttonS = document.querySelector('.bsub');
buttonS.addEventListener('click', function () {
  // Khung nhập Email
  const submitE = document.querySelector('#submitE');

  // Khung thông tin cá nhân
  const personalI = document.querySelector('#p-info');

  // Giá trị của ô nhập email
  const inputE = document.querySelector('#inputE').value.toLocaleLowerCase();

  // Kiểu mẫu của một Email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // So sánh giá trị của biểu mẫu nhập vào với kiểu mẫu email
  const checkE = inputE.match(regex);

  // Thông báo khi có giá trị nhập vào khung nhập Email
  const noti = document.getElementById('notiE');

  // Hiện thông tin cá nhân khi giá trị input trùng khớp với kiểu mẫu email
  if (checkE) {
    submitE.classList.add('d-none');
    personalI.classList.remove('d-none');
    noti.innerHTML = '';

    // Thông báo khi không nhập đúng kiểu mẫu email
  } else {
    noti.innerHTML = 'Vui lòng kiểm tra địa chỉ email!';
    noti.style.color = 'red';
  }
});

// Hiện nút View More
const view_more = function (btn) {
  const view_more = btn.querySelector('.viewb');
  view_more.classList.remove('d-none');
  // style.visibility = 'visible'
};

// Ẩn nút View More
const view_out = function (btn) {
  const view_out = btn.querySelector('.viewb');
  view_out.classList.add('d-none');
  // style.visibility = 'hidden'
};

// Hiện thông tin khi bấm vào nút View More
const viewcontent = function (btn) {
  // Phần thông tin cá nhân đã được ẩn
  const ttcn = btn.closest('.vmB').querySelector('.ttcn');

  // Nếu trong nút button có innerHTML là "View More"
  if (btn.innerHTML.includes('View More')) {
    // Hiển thị nút button View Less
    btn.innerHTML = 'View Less';
    // Hiện thông tin cá nhân
    ttcn.classList.remove('d-none');
    // style.display = 'block'

    // Nếu nút button không có chữ More
  } else {
    // Hiển thị nút button View More
    btn.innerHTML = 'View More';
    // Ẩn thông tin cá nhân
    ttcn.classList.add('d-none');
    // style.display = 'none'
  }
};
