/* eslint-disable import/prefer-default-export */
import Cytoscape from './components/Cytoscape.react';
import CytoscapeJS from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import cola from 'cytoscape-cola';
import ctxmenu from 'cytoscape-cxtmenu';
import dagre from 'cytoscape-dagre';
import euler from 'cytoscape-euler';
import klay from 'cytoscape-klay';
import spread from 'cytoscape-spread';
import svg from 'cytoscape-svg';

CytoscapeJS.use(coseBilkent);
CytoscapeJS.use(cola);
CytoscapeJS.use(ctxmenu);
CytoscapeJS.use(dagre);
CytoscapeJS.use(euler);
CytoscapeJS.use(klay);
CytoscapeJS.use(spread);
CytoscapeJS.use(svg);

export {
    Cytoscape
};
