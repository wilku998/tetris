const initialColumn = {
    rows: [
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true },
      { fieldEmpty: true }
    ]
  };
  
  const createInitialColumns = () => {
    const columns = [];
  
    for (let i = 0; i < 10; i++) {
      columns.push(initialColumn);
    }
  
    return columns;
  };
  
  const initialColumns = createInitialColumns();
  
export default {
    columns: initialColumns,
    blocks: [],
    gameOver: false,
    pauze: false
  };