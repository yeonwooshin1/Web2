// app.js
// ****************** 다른 js에 export 된 자료 가져오기 **********
//

// [1] math.js의 ㅏㅈ료 가져오기
import add from './math.js';
add(3,4);

// [2] config.js 의 자료 가져오기
import config from './config.js';
console.log(config);

// [3] util.js의 자료 가져오기 , default 가 아닌 자료는 { }로 묶는다.
import hello , { PI , E } from './util.js';
hello("신연우");
console.log( PI );
console.log( E );
