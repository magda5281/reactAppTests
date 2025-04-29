import { useState, useEffect } from 'react';
const data = [
  { id: 1, name: 'Magda' },
  { id: 2, name: 'Pawel' },
];

const TestingStateChange = () => {
  const [loaded, setLoaded] = useState(false);
  const [toggleTextVisible, setToggleTextVisible] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [elements, setElements] = useState(data);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded && <h3> Page Loaded </h3>}

      <div>
        <div style={{ padding: '10px' }}>
          <h3>Toggle Text Visible</h3>
          <button
            onClick={() => {
              setToggleTextVisible(!toggleTextVisible);
            }}
          >
            Toggle text
          </button>
          {toggleTextVisible && <p>Text visible</p>}
        </div>
        <div
          style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {' '}
          <button
            onClick={() => {
              setBtnDisabled(!btnDisabled);
            }}
          >
            Toggle button disabled
          </button>
          <button disabled={btnDisabled}>Disabled</button>
        </div>
      </div>
      <div>
        <h3> List State Change </h3>
        {elements.map((item) => (
          <div key={item.id} data-testid='record' style={{ padding: '10px' }}>
            {item.id}: {item.name}
          </div>
        ))}

        <div
          style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <button
            onClick={() => {
              setElements([
                ...elements,
                {
                  id: 3,
                  name: 'Helen',
                },
              ]);
            }}
          >
            {' '}
            Add to list{' '}
          </button>
          <button
            onClick={() => {
              setElements(elements.filter((item) => item.id != 1));
            }}
          >
            {' '}
            Remove from list{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestingStateChange;
