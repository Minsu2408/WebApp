// 1. Counter 컴포넌트
function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <button onClick={handleClick}>You pressed me {count} times</button>
    </div>
  );
}