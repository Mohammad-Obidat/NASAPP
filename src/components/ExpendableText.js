import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ExpendableText = ({ absoluteMax, maxHeight, children }) => {
  const ref = useRef();
  const [shouldShowExpand, setShouldShowExpand] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (ref.current.scrollHeight > maxHeight) {
      setShouldShowExpand(true);
      setExpanded(false);
    }
  }, [maxHeight]);

  const MAX_POSSIBLE_HEIGHT = absoluteMax;

  return (
    <>
      <Card.Text as={'div'} ref={ref}>
        <div
          className='inner'
          style={{ maxHeight: expanded ? MAX_POSSIBLE_HEIGHT : maxHeight }}
        >
          {children}
        </div>
      </Card.Text>

      {shouldShowExpand && (
        <Button
          className='cardBtn'
          onClick={() => setExpanded(!expanded)}
          variant='dark'
          style={{ marginRight: '5px' }}
        >
          {expanded ? 'collapse' : 'Expand'}
        </Button>
      )}
    </>
  );
};

export default ExpendableText;
