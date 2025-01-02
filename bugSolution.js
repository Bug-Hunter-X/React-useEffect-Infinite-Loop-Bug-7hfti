```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Avoid directly using count. Use a flag to detect changes.
    console.log('Count changed');
  }, []); // Empty dependency array ensures the effect runs only once.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```