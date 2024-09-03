// 스위치 버튼 off 라이트모드
// 스위치 버튼 On 다크모드

const htmlEl = document.querySelector('html');
console.log("🚀 ~ htmlEl:", htmlEl);

// const darkmode = document.querySelector("html")

const HJswitch = document.querySelector('.HJswitch')

const checkFn = () => {
    
    if(HJswitch.checked)
        {console.log("다크모드!!");
            htmlEl.setAttribute('data-bs-theme',"dark")
    }
    else
    {console.log("해제!!")
        
        htmlEl.setAttribute('data-bs-theme',"light")


    };
};

    HJswitch.addEventListener('change', checkFn);




