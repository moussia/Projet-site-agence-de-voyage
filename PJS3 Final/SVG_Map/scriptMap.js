var transMatrix = [2,0,0,2,0,0];

function init(evt)
{
    if ( window.svgDocument == null )
    {
        svgDoc = evt.target.ownerDocument;

    }
    mapMatrix = svgDoc.getElementById("map-matrix");
    width  = evt.target.getAttributeNS(null, "width");
    height = evt.target.getAttributeNS(null, "height");
}

function pan(dx, dy)
{

    transMatrix[4] += dx;
    transMatrix[5] += dy;

    newMatrix = "matrix(" +  transMatrix.join(' ') + ")";
    mapMatrix.setAttributeNS(null, "transform", newMatrix);
}

function zoom(scale)
{
    for (var i=0; i<transMatrix.length; i++)
    {
        transMatrix[i] *= scale;
    }
    transMatrix[4] += (1-scale)*width/2;
    transMatrix[5] += (1-scale)*height/2;

    newMatrix = "matrix(" +  transMatrix.join(' ') + ")";
    mapMatrix.setAttributeNS(null, "transform", newMatrix);
}

function RedirectionJavascript(){
	document.location.href="../mexique.html"; 
}