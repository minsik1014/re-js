// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120813
// 요약: n 이하의 홀수를 오름차순 배열로 반환한다.
// 생각: n까지 검사하며 홀수만 배열에 추가한다.
// 배운 점: const로 선언한 배열에도 push로 값을 추가할 수 있다.

function solution(n) {
    const answer = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            answer.push(i);
        }
    }
    return answer;
}
