import { useState, useEffect } from "react";

const Child = ({ state, setState }) => {
  console.log(`111state : ${state}`);

  const handle = (e) => {
    setState(!state);
    console.log(`state : ${state}`);
  };

  // 마운트 되는 순간 콜백함수의 인자로 들어간 state는
  // 변화하지 않고 처음 값 그대로 계속 사용된다.
  // 처음에 false로 넘어왔으므로,
  // handle에서는 false를 계속 true로 바꾸게 되고
  // 컴포넌트 리렌더가 일어나지 않는다.
  //
  //
  // --> 콜백함수로 들어가게 되는 인자는 계속 그 값을 유지한다 !!

  useEffect(() => {
    document.addEventListener("click", handle);
    console.log("리렌더");
    return () => {
      console.log("잘가");
    };
  }, []);

  return (
    <div>
      <button onClick={handle}>state변경</button>
    </div>
  );
};

const Temp = () => {
  useEffect(() => {
    console.log("전체리렌더");
    return () => {
      console.log("전체잘가");
    };
  }, []);
  const [state, setState] = useState(false);
  return (
    <div>
      <Child state={state} setState={setState} />
    </div>
  );
};
export default Temp;
