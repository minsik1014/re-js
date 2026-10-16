// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120824
// 요약: 배열의 짝수와 홀수 개수를 [짝수 개수, 홀수 개수]로 반환한다.
// 생각: 각 원소를 %로 검사하고 해당 개수를 1씩 늘린다.
// 배운 점: 인덱스 i가 아니라 num_list[i]의 값을 검사한다.

function solution(num_list) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < num_list.length; i ++){
        if ( num_list[i] % 2 ===0){
            evenCount = evenCount + 1;
        } else{
            oddCount = oddCount + 1;
        }
    }
    return [evenCount, oddCount];
}
