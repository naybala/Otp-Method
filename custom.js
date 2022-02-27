const otpH = document.querySelector(".otp", [0]);
const btn = document.querySelector(".btnRefresh", [0]);
console.log(otpH);


const generatorOtp = () => {
    const digit = "1234567890";
    let otp = "";
    for (let i = 0; i <= 6; i++) {
        otp += digit[(Math.floor(Math.random() * 10))];
    }
    otpH.textContent = otp;
    // return otp;
    // console.log(otp);
};


btn.addEventListener("click", generatorOtp);


