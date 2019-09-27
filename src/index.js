import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }
}