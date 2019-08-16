    import React from 'react';
    
    const Scroll = (props) => {
      // console.log(props)
      return (
        <div style={{ overflowY: 'scroll', height: '910px'}}>
          {props.children}
        </div>
      );
    }
    
    export default Scroll;