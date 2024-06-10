let signinForm = document.getElementById("signin-form");
let loginBtn = document.getElementById("login-btn");
let modeBtn = document.getElementById("mode-btn");

let idActive = false;
let pwActive = false;

let animateInputs = document.querySelectorAll('.animate-input');

animateInputs.forEach((item) => {
  let input = item.querySelector("input");

  // trim() : 공백을 제거하는 함수
  input.addEventListener('keyup', () => {
    if(input.value.trim().length > 0) {
      item.classList.add("active");
      if(input.getAttribute("type") === "text") {
        idActive = true;
      } else if(input.getAttribute("type") === "password") {
        pwActive = true;
      }
    } else {
      item.classList.remove("active");
      if(input.getAttribute("type") === "text") {
        idActive = false;
      } else if(input.getAttribute("type") === "password") {
        pwActive = false;
      }
    }

    if(idActive && pwActive) {
      loginBtn.removeAttribute("disabled");
      loginBtn.addEventListener('click', function() {
        signin_form.submit();
      })
    } else {
      loginBtn.setAttribute("disabled", "true");
    }
  })
})


// 비밀번호 표시 / 숨기기
let pwInput = document.getElementById('userpw');
let pwBtn = document.getElementById('pw-btn');

function pwToggle() {
  if(pwInput.getAttribute("type") == "text") {
    pwInput.setAttribute("type", "password");
    pwBtn.innerHTML = "비밀번호 표시";
  } else {
    pwInput.setAttribute("type", "text");
    pwBtn.innerHTML = "숨기기";
  }
}
pwBtn.addEventListener('click', pwToggle);


// darkmode toggle
function modeToggle(e) {
  e.preventDefault();
  let body = document.querySelector("body");
  body.classList.toggle("dark");

  // 삼항연산자
  darkmode_toggle.innerHTML = body.classList.contains("dark") ? "Lightmode" : "Darkmode";
}
modeBtn.addEventListener('click', modeToggle);



