import React, { useState } from 'react';

    const StoreContext = React.createContext(null);

    const store = {
        sharing: 'a',
        help: 'b',
        pairing: 'c'
      };


export default StoreContext;
