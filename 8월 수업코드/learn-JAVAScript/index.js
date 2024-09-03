// // console.log("Hello world");

//  // 숫자 or Number
// const name2 = 'hyunjae'; //문자열 or string
// const rainning = true; // boolean (True/False)
// const empty = null; // null or undefined ->
// //의도적으로 값을 할당하지 않으면 null
// //개발자 의도와 다르게 값이 할당되지 않으면 undefined

// let message; //변수 선언, undefined

// // console.log('null 타입체크', empty === null); //null의 타입 체크법

// // console.log("empty", empty); //값
// // console.log("empty type", typeof empty); //데이터타입
// // console.log("a",a); //값
// // console.log("a type", typeof a); //데이터타입
// // console.log("message", typeof message); //데이터타입

// //아, 프로그래밍 언어, 즉 외국어를 하나 배운다고 생각해야지.
// //ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// //프로그램 언어를 그냥 배우는거야. 책도 하나씩 사.
// //10번 반복하면 쉬워진다. 100번 반복하면 내것이 된다.
// //1000번 반복하면 마스터 하는 것이다.
// //반복이야말로 성취의 근본이다. 6개월간 씹어먹어야 책들은?

// function helloWorld() {
//     console.log('hello world!');}
//     helloWorld();

//     //함수를 정의한다.

//     //함수 표현식. 화살표 함수
//     const welcome = (username, age) => {

//         console.log("welcome", username);
//         console.log("나이는", age, "살 입니다... 아 내 나이가 벌써 ㅜ ㅜ ");
//     }

//     //인자가 있는 함수 호출
//     //함수를 실행한다. 함수를 호출한다
//     welcome("장현재", 35);

//     //선생님이 추천하는 문법은 const로 함수 정의하고 수식

//     // const inputwelcome = () => {
//         //실행문
//         // const name = prompt("What's your name?")
//         // console.log('이름', name); }

//     // inputwelcome()

// //parameter가 num 이다.
// const double = (num) => {

//    return  num * 2 ;
// //return 용법은 함수의 마지막에 써주고, 함수를 종료하는 기능이 있다.
// //리턴 뒤에 붙은 용법은 실행되지 않는다.
//    console.log("next retuen!!");
// }

// //함수 호출
// console.log("ddddouble", double(double(double(4))));

// //return의 용법

// // multiply 라는 함수를 작성을 하는데, 함수 호출 하기

// // const multiply=(a,b)=>{

// //     return a*b

// // };

// // console.log("두개의 곱은", multiply(5,10));

// //인원수당 총 매출액 같은 느낌?

// const ourname = (aa,bb) => {
//     const ourname = aa/3+bb*3+172-aa*bb+1123
//     return ourname

// };

// console.log("이 규칙을 찾으면", ourname(33,44));

// //보통 변수들은 윗쪽에 다 배치를 해줌

// // const account = () => {
// //     const inputprice = prompt("네가 고른 옷이 얼마냐능? 숫자로만 적어라능");
// //     const numprice = Number(inputprice);
// //     const discount = prompt("얼마나 할인 받기를 원하냐능? 0.x 형태로 적어라능");
// //     const numdiscount = Number(discount);
// //     return numprice * (1-numdiscount);
// // }
// // // 할인율을 받아가지고, 해당값으로
// // console.log("총 할인된 가격은",account(),"원 입니다. 손님. 빨리 카드 주세요. 빨리요");

// /**
//  * 2. discount라는 변수를 생성후, 원하는 퍼센테이지를 숫자로 입력
//  * 3. 사용자에게 값을 입력받아서(prompt) inputprice라는 변수 저장
//  * 4. 해당 inputprice의 타입 Numbet로 변환
//  * 5. 할일율 계산한 결과값 return
//  * 6. 함수 호출하여 console에 출력하기
//  * 외국어를 하나 배우는 기분이기 때문에 마음껏 틀려보고 써보고 해보면 됨 ㅇㅇ.
//  * 매우매우 재밌는걸
//  * *********************/

// x = 5;
// console.log(typeof x,"타입입니다.");

// let y;
// console.log(typeof y ,"타입입니다");

// let aaa = 10;
// let bbb = 6;

// const value=(aaa>bbb) ? true : false ;

// console.log (value)

// //밑에는 8월 27일자 과제 퀴즈 입니다

// // function add(a, b) {
// // 	return a + b;
// // }

// //QUIZ1
// // 여기에 화살표 함수로 다시 작성하세요.
// const add = (aaaa,bbbb) => {

//     return aaaa+bbbb
// }

// console.log(add(5, 3)); // 예상 결과: 8

// //QUIZ2

// const minus = ( a,b) => {

//     return a-b;

// }

// console.log(minus(60,20));

// //QUIZ 3

// const introduce = (name, age) => {
//     return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
//         };

//   // 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
// console.log( introduce("장현재",35) );// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

// const score = 30;
// //조건식의 값이 트루인지 펄스인지
//   if (score >= 60) {
//     console.log("합격입니다")
//   }

//   console.log("next!!!");

//   const test = prompt("시험 점수 몇점이야?")
// //if를 만나면 조건문이 시작된다구!
//   if (test >= 80){alert("A등급");}
//     else if (test<80,test >= 40){alert("B등급");}
//     else if (test < 40) {alert("C등급");}
//if 가 되거나 else가 되거나 하나만 됨!! 실행문은 하나만 실행됨!!

//SEO 전문가가 될고얌

const score = 77;

if (score >= 90) {
  console.log('A등급');
} else if (score >= 80) {
  console.log('B등급');
} else if (score >= 70) {
  console.log('C등급');
} else {
  console.log('D등급');
}

//else 는 if 조건문의 가장 마지막에 사용되어야 한다구 ~
//실행하고 끝이 나야하는데 끝이 안나면 에러가 된다구 ~

/**
 * 1. 마트에 아보카도가 있는지 체크 (조건식)
 * 2. 아보카도가 있으면(true) 우유 6개 사기
 * 3. 아보카도가 없으면(false) 우유 1개 사기
 */
const mart = ['🥑', '🥛', '🥕', '🍗', '🍺'];
const isAvocado = mart.some((item) => item === '🥑');
//boolean

// console.log("마트에 아보카도가 있다?", isAvocado)

// if (isAvocado ===true) {
// //아보카도가 있는경우
// console.log("🥛🥛🥛🥛🥛🥛");
// } else {console.log("🥛");

// }

//삼항 연산자는 항이 3개밖에 없다. 즉 조건 ? True : False;

console.log(isAvocado ? '🥛🥛🥛🥛🥛🥛' : '🥛');

// == 같다 === 정확히 같다   != 같지 않다    !== 정확히 같지 않다
// > 크다 >= 크거나 같다 < 작다 <= 작거나 같다
// 비교 연산자는 무조건 boolean  타입을 나타냅니다.

// if (undefined) {
//     console.log("false")

// } else {console.log("true")}

// if (0) {
//     console.log("false")

// } else {console.log("true")}

// if (1) {
//     console.log("false")

// } else {console.log("true")}

// const input ="";

// if (!input) {
//     console.log("false")
// }

// //삼항 연산자
// //  (조건) ? value1 : value2

// const aa = 10;

// (aa>5)? console.log("okay") : console.log("nope");

const bootcampStudents = [
  '김원명',
  '박성민',
  '김현호',
  '주영신',
  '강지영',
  '김영혜',
  '조재원',
  '김태욱',
  '정세헌',
  '장현재',
  '김완재',
  '박준혁',
  '김은호',
];

console.log(bootcampStudents);


const studentLen =  bootcampStudents.length


console.log(studentLen)


console.log(bootcampStudents[9]);

//everybody put your hands up! 
//putputputputput
//put your hands up!!!!
//good bye

const userName = '장현재';
const userAge = '35';
const isUserMale = true;
const userMbti = "ENFP"
//user 는 객체타입이다
const user = {
    name: '장현재',
    age: 35,
    isMale: true,
    mbti: userMbti,
    fn: () => {
        console.log('fn');
    },
};

user.fn()

user.name
console.log("🚀 ~ user.name:", user.name)
user.age
console.log("🚀 ~ user.age:", user.age)
user.isMale
console.log("🚀 ~ user.isMale:", user.isMale)
user.mbti
console.log("🚀 ~ user.mbti:", user.mbti)

const categoryList = [ //배열타입
    {
        id: '1',
        name: '선물관',
        subCategoriList: [
            {
                id: '1-1',
                name: '효도 지원금',
            },
            {
                id: '1-2',
                name: '이색 선물',
            },
            {
                id: '1-3',
                name: '선물핫딜',
            },
            {
                id: '1-4',
                name: '카테고리관',
            },
        ]
    },
    {
        id: '2',
        name: '식품',
        subCategoriList: [
            {
                id: '2-1',
                name: '선착순 쿠폰',
            },
            {
                id: '2-2',
                name: '한우 세트',
            },
            {
                id: '2-3',
                name: '건강다이어트',
            },
            {
                id: '2-4',
                name: '명절맞이',
            },
        ]
    },
    {
        id: '3',
        name: '효도가전',
        subCategoriList: [
            {
                id: '3-1',
                name: '인기디지털',
            },
            {
                id: '3-2',
                name: '렌탈 선물',
            },
            {
                id: '3-3',
                name: '숙면선물',
            },
            {
                id: '3-4',
                name: '헬스골프',
            },
        ]

    },
    {
        id: '4',
        name: '럭셔리',
        subCategoriList: [
            {
                id: '4-1',
                name: '요즘 뷰티',
            },
            {
                id: '4-2',
                name: '럭셔리잡화',
            },
            {
                id: '4-3',
                name: '럭셔리의류',
            },
            {
                id: '4-4',
                name: '주얼리',
            },
        ]

    }

]
console.log("🚀 ~ categoryList:", categoryList)

console.log('한우세트 뽑아오기 위함', categoryList[1].subCategoriList[1].name)



//8-28 (수) 아래부터는 과제 입니다.

const revuCategori = [
    {id : 1,
        Name : `'최다' 인플루언서수`,
        Num : 1158061
    },
    {id : 2,
        Name : `'최다' 캠페인 진행`,
        Num : 942737
    },
    {id : 3,
        Name : ` '최다' 리뷰생성`,
        Num : 8288434 
    }
]
console.log("🚀 ~ revuCategori:", revuCategori[0].Name)



// 8-28 (수) 아래부터는 퀴즈1 입니다.


const age = 20;
let message;

if (age >= 18) {
  message = "성인입니다";
} else {
  message = "미성년자입니다";
  
}

// console.log("🚀 ~ message:", message)
// 여기에 삼항 연산자를 사용하여 다시 작성하세요.


message = (age>=18)? "성인입니다":"미성년자입니다"

console.log(message);


// Q2. 함수와 조건문
// 문제:
// 다음 함수의 출력 결과를 예측하고, 그 이유를 설명하세요.
// JavaScript
// 복사

const compareNumbers = (a, b) => {
  if (a > b) {
    return "a is greater";
  } else if (b > a) {
    return "b is greater";
  }
};

console.log(compareNumbers(5, 5)); // 예상 결과값:

// 아무 값도 나오지 않음. if 조건과 else if 조건에 부합되는 결과가 없음.

//결과값 : undefined


// Q3. 데이터 타입
// 문제: 다음 코드의 출력 결과를 예측하고, 그 이유를 설명하세요.

let x;
console.log(typeof x); // 예상 결과값: undefined (O)

//x라는 변수를 선언만 했지 어떤 값으로 규정하지 않았기 때문에
//undefined 가 나온다.

x = 5;
console.log(typeof x); // 예상 결과값: Number (O)
//x라는 변수는 숫자 5라고 지정이 되었기 때문에 Number 가 뜸


x = "Hello";
console.log(typeof x); // 예상 결과값: string (O)

//x라는 변수가 단어 "Hello" 라고 지정해주었기 때문에, 문자열인
//string 값이 뜬다 


//초기값;  반복조건식;  증감식;

const max=100;





revuCategori.forEach((value,index ) => {
    
    console.log("index", index);
    console.log("value", value)
    
    
    })

//알고리즘 테스트 - 개발자 취업 하려면 - 거기서 배열을 순서대로 정렬해라
//이런 문제들이 있는데, 큰 숫자들 찾기 - 개발자로 취업하려면 ㅇㅇ 
//하다보면 잘하게 되겠지 -- 



for (let i =0; i<bootcampStudents.length; i++) {

    // console.log(i, '번째 실행');


if (bootcampStudents[i].includes("김")) {
    // console.log("학생 이름", i, ":", bootcampStudents[i],
    //     "씨");

        console.log(`학생 이름${i}:${bootcampStudents[i]}씨`)

}

}


// 기능은 같은데, 문법이 간결해진 경우임
const add = (a,b) => {
    return a+b;
}

const add2 = (a,b) => a+b;

add(1,2)
console.log("🚀 ~ add(1,2):", add(1,2))

add2(1,2)
console.log("🚀 ~ add2(1,2):", add2(1,2))


//백틱  ` ` 하나의 문자열을 묶어줌 ${} 처리 하면 변수 취급
const SNL = bootcampStudents.map((student) => `${student}❤️‍🔥`);

console.log("🚀 ~ SNL:", SNL);


const fireStudents = [
    {
        id: 1,
        name: 'mark',
        age: 35,
        mbti: 'ENFP',

    },
    {
        id: 2,
        name: 'jun',
        age: 30,
        mbti: 'ESFP',

    },
    {
        id: 3,
        name: 'ho',
        age: 29,
        mbti: 'ESFP',

    },
]
//str.toUpperCase

const FS = fireStudents.map((student) => student.mbti );
console.log("🚀 ~ FS:", FS);


//output: ['mark','jun','ho'] 
const ttStudent = fireStudents.find((student) => (student.age>=40));
const twentyStudents = fireStudents.filter((student) => (student.mbti==="ESFP"));
const twentyStudent = fireStudents.find((student) => (student.mbti==="ESFP"));
//find는 최대 1개만 리턴해준다.
console.log("🚀 ~ twentyStudents:", twentyStudents);
console.log("🚀 ~ twentyStudents:", twentyStudent);
console.log("🚀 ~ ttStudent:", ttStudent);


//무조건 배열을 리턴한다구. 그리고 각 요소를 반환한다. 

const issomeStudent = fireStudents.every((student) => student.age >=20 );
console.log("🚀 ~ issomeStudent:", issomeStudent);

//---------------------------------------------------



//6일차 과제 입니다----------------------------------------

// # **📌 6일차 Javascript(4)**

// Q1. 다음 코드에서 각 숫자에 1을 더한 새로운 배열을 만들어 주세요 (`map`)


const numberss = [1, 2, 3, 4, 5];
const incrementedNumbers = numberss.map((numberss)=>numberss+1 );


// 여기에 코드를 작성하세요.
console.log("1번문제",incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]


// Q2. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (`filter`)


const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((numbers)=>(numbers%2==0));
console.log("2번문제",evenNumbers); // 예상 결과: [2, 4, 6]

// 3. 다음 코드에서 각 문제를 풀어보세요. (`find`)

// 1. 전공이 "Physics"인 학생의 정보를 찾으세요.
// 2. 이름이 "David"인 학생의 정보를 찾으세요.



// 학생들의 정보가 담긴 배열
const students = [
    { name: "Alice", age: 22, major: "Computer Science" },
    { name: "Bob", age: 21, major: "Mathematics" },
    { name: "Charlie", age: 23, major: "Physics" },
    { name: "David", age: 20, major: "Chemistry" },
    { name: "Eva", age: 22, major: "Biology" }
  ];
  
  // 1. 전공이 "Physics"인 학생을 찾으세요.
  const physicsStudent = students.find((student)=>(student.major=="Physics"))
  
  // 여기에 코드를 작성하세요.
  
  console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },
  
  // 2. 이름이 "David"인 학생을 찾으세요.
  const davidStudent = students.find((student)=>(student.name=="David"));
  
  //여기에 코드를 작성하세요.
  
  console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
  


//----------------Counter 만들기-------------------

//### 프로젝트 요구사항

// 1. 증감: 버튼 클릭 시 1씩 증가/감소
// 2. 최소값: 0
// 3. 최대값: 10
// 4. 변수명: `count`로 저장
// 5. UI 업데이트: `innerText` 메소드 사용
// 6. 함수: 화살표 함수로 작성


//JS 심화 ----------------------------------•	

// 쇼핑 리스트는 객체의 배열로 주어집니다.
// •	각 객체는 name (물건 이름)과 price (물건 가격)를 가지고 있습니다.
// •	물건의 가격은 항상 0보다 큰 정수입니다.
// •	함수는 총합을 계산하여 출력해야 합니다.

const shoppingList = [
    { name: "사과", price: 1000 },
    { name: "바나나", price: 1500 },
    { name: "치즈", price: 4000 },
    { name: "빵", price: 2500 }
];




const slp = shoppingList.map((a)=>a.price);
console.log(slp);

const calculateTotalCost= () => {
    
    let total = 0;
    slp.forEach(a => {
        total += a;
    } )
    
    return total;
    
    // 여기에 코드를 작성하세요.
    
}

console.log(calculateTotalCost());


//-----------------------------------------------------

const sstudents = [
    { name: "홍길동", score: 85 },
    { name: "김철수", score: 70 },
    { name: "이영희", score: 90 },
    { name: "박민수", score: 60 },
    { name: "최지훈", score: 95 }
];

const studentList = sstudents.map((a)=>a.score)
// console.log("🚀 ~ studentList:", studentList)

// const mscore = studentList.forEach()

const highScorers = Math.max(studentList)
function analyzeScores(studentList) {
    let totalScore = 0;
    
    
    // 여기에 코드를 작성하세요.
    
    return highScorers;
}
    console.log("🚀 ~ analyzeScores ~ highScorers:", highScorers)



// console.log("평균 이상의 성적을 받은 학생들: " + analyzeScores(students).join(", "));



// Dom 조작 실습

const inputEl = document.querySelector(".input");
console.log("🚀 ~ inputEl:", inputEl.checked);
console.dir(inputEl);

const inputtextEl = document.querySelector(".text-input");

// 체크 했을때
const checkFn = () => {
    console.log("check!!!");
    if(inputEl.checked)
        {inputtextEl.setAttribute('disabled',true)
    }
    else
    {console.log("해제!!")
        
        inputtextEl.removeAttribute('disabled')


    };


    }
    

inputEl.addEventListener('change', checkFn);

