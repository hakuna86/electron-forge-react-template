import React from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';

import { ipcRenderer } from 'electron';

class App extends React.Component {

    render() {
        return(
            <div>
                <Button variant="contained" color="primary" onClick={() => {ipcRenderer.send('link:open', "https://github.com/anduschain/anduschain-miner")}}>
                    Hello World
                </Button>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("root"));