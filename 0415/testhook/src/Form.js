// 4. Form 컴포넌트
function Form() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>Hello, {name}. You are {age}.</p>
    </div>
  );
}