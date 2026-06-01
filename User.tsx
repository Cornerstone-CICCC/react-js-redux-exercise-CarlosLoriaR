import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { incrementAge, setFirstname, setLastname } from './UserSlice';

export function User() {
  const dispatch = useDispatch();
  const { firstname, lastname, age } = useSelector((state: RootState) => state.user);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>User Profile</h1>

      <div style={{ marginBottom: '20px' }}>
        <p><strong>First Name:</strong> {firstname}</p>
        <p><strong>Last Name:</strong> {lastname}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter first name"
          value={firstname}
          onChange={(e) => dispatch(setFirstname(e.target.value))}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter last name"
          value={lastname}
          onChange={(e) => dispatch(setLastname(e.target.value))}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
      </div>

      <button
        onClick={() => dispatch(incrementAge())}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Increment Age
      </button>
    </div>
  );
}
