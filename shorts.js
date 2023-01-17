// console.log('1')

// document.getElementById("temp").appendChild(

//     <div class="col-lg-2" style="margin: 15px;">
//         <div class="card" id="button-3">
//             <iframe width="225" height="400" src="https://www.youtube.com/embed/0j6eCJEnxUc"
//                 style="border-radius: 10px;" frameborder="0" allowfullscreen></iframe>
//         </div>
//     </div>

// );

// console.log('2')

{/* <div class="col-lg-2" style="margin: 15px;">
    <div class="card" id="button-3">
        <iframe width="225" height="400" src="https://www.youtube.com/embed/XUTzp0RHEJs"
            style="border-radius: 10px;" frameborder="0" allowfullscreen>
        </iframe>
        </div>
</div> */}

// console.log(1)

// keys = Object.keys(localStorage),


// console.log('qqq');


// for (var i = 0, len = localStorage.length; i < len; ++i) {

let idIntArray = []

let idArray = Object.keys(localStorage)

for (let values of idArray) {
    // console.log('values', values)
    idIntArray.push(Number(values))
}

let sortIdIntArray = Object.values(idIntArray).sort((a, b) => b - a)

// console.log('idArray', idArray)
// console.log('idIntArray', idIntArray)
// console.log('sortIdIntArray', sortIdIntArray)
// console.log('localStorage.length', localStorage.length)
// console.log('localStorage', localStorage)

// console.log('localStorage[sortIdIntArray[11]]', localStorage[sortIdIntArray[11]])

// console.log('sortIdIntArray', sortIdIntArray)
// for (let i = localStorage.length - 1; i > -1; i--) {
// for (let i = 0; i < localStorage.length; i++) {

//     var one = document.createElement("div");
//     one.className = "col-lg-2";
//     one.style.margin = "15px";

//     var two = document.createElement("div");
//     two.className = "card";

//     var three = document.createElement("iframe");
//     three.width = "225";
//     three.height = "400";
//     three.src = `https://www.youtube.com/embed/${localStorage[sortIdIntArray[i]]}`;
//     three.style.borderRadius = "10px";
//     three.frame
//     three.allowFullscreen = "allowfullscreen";


//     one.appendChild(two);
//     two.appendChild(three);

//     document.getElementById("tit").appendChild(one);
// }

for (let i = 0; i < localStorage.length; i++) {



    // console.log(i, localStorage[sortIdIntArray[i]])

    if (`${localStorage[sortIdIntArray[i]]}` !== "undefined") {
        // console.log('localStorage', localStorage)

        // for (let values in localStorage) {
        // console.log('values', values)


        // var one = document.createElement("div");
        // one.className = "col-lg-2";
        // one.style.margin = "15px";

        // var two = document.createElement("div");
        // two.className = "card";

        // var three = document.createElement("iframe");
        // three.width = "225";
        // three.height = "400";
        // three.src = `https://www.youtube.com/embed/gdY-vg7jM0g`;
        // three.style.borderRadius = "10px";
        // three.frame
        // three.allowFullscreen = "allowfullscreen";




        // one.appendChild(two);
        // two.appendChild(three);

        // <div class="youtube-player" data-id="dRhS2vW6UCE">fff</div>

        // <svg fill="none" height="100%" viewBox="0 0 87 115" width="100%">
        //     <path clip-rule="evenodd" d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z" fill="#f00" fill-rule="evenodd">
        //     </path>
        //     <path clip-rule="evenodd" d="M33 74L33 41L61 57.5L33 74Z" fill="white" fill-rule="evenodd">
        //     </path>
        // </svg>


        // <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="125px" height="125px" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="bookmark.svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"></defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="17.833333" inkscape:cx="7.4859812" inkscape:cy="15" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1"> <inkscape:grid type="xygrid" id="grid816"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title></dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 8.9999994,292.06249 H 20.999999 c 1.108,0 1.999999,0.892 1.999999,2 l 2e-6,22.00001 -8,-6 -8,6 1e-7,-22 c 0,-1.108 0.892,-1.99989 1.9999999,-2 z" id="rect1417" inkscape:connector-curvature="0" sodipodi:nodetypes="cscccccsc"></path> </g> </g></svg>

        // =========================================================================================================================

        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconG = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        // iconSvg.setAttribute('id', 'asd');
        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('width', '100px');
        iconSvg.setAttribute('height', '100px');
        iconSvg.setAttribute('viewBox', '0 0 50 115');
        iconSvg.setAttribute('fill', 'none');
        iconSvg.style.left = "68px"
        iconSvg.style.top = "155px"
        iconSvg.style.position = "relative"


        // iconSvg.setAttribute('stroke', '#f1f1f1');
        // console.log('asd')
        // iconSvg.classList.add(`post-icon${currentId}`);

        iconPath.setAttribute('d', 'M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z');
        // iconPath.setAttribute('stroke', '#ffffff');
        iconPath.setAttribute('stroke-linecap', 'round');
        iconPath.setAttribute('stroke-width', '0.792');
        iconPath.setAttribute('stroke-linejoin', 'round');
        iconPath.setAttribute('style', 'fill:#f00');
        iconPath.setAttribute('height', '10px');
        // iconPath.setAttribute('stroke-width', '2');

        iconG.setAttribute('transform', 'translate(-23,-0)');

        iconPath2.setAttribute('d', 'M33 74L33 41L61 57.5L33 74Z');
        // iconPath.setAttribute('stroke', '#ffffff');
        iconPath2.setAttribute('stroke-linecap', 'round');
        iconPath2.setAttribute('stroke-width', '0.792');
        iconPath2.setAttribute('stroke-linejoin', 'round');
        iconPath2.setAttribute('style', 'fill:white');

        iconSvg.appendChild(iconG);
        iconG.appendChild(iconPath);
        iconG.appendChild(iconPath2);
        // iconSvg.appendChild(iconPath);
        // iconG.appendChild(iconPath);

        // =========================================================================================================================


        const newIframe = document.createElement('div');
        newIframe.className = "youtube-player col-lg-2"
        newIframe.style.margin = "1%"
        newIframe.setAttribute('data-id', `${localStorage[sortIdIntArray[i]]}`)
        // newIframe.className = "col-lg-2";


        // left: 59px;
        // top: 253px;
        // position: relative;

        const newIframe2 = document.createElement('div');
        // newIframe2.style.margin = "15px";
        newIframe2.style.position = "absolute";
        newIframe2.style.marginTop = "auto";
        newIframe2.style.marginLeft = "auto";
        newIframe2.style.marginBottom = "auto";
        newIframe2.style.marginRight = "auto";
        // newIframe2.style.width = "50%";
        // newIframe2.style.width = "50%";
        newIframe2.style.pointerEvents = "none";
        // newIframe2.style.top = "253px";
        // iconPath2.setAttribute('margin-left', '25%');

        newIframe2.append(iconSvg)
        newIframe.append(newIframe2)



        var temp = {
            onPlayerStateChange: function (event) {
                console.log('----------------------------------')
            }
        }

        document.getElementById("tit").appendChild(newIframe);
        // })

    }
}




// for (var i in tit) {

//     // var element = document.createElement("h2");
//     // element.innerHTML = tit[i];

//     var one = document.createElement("div");
//     one.className = "col-lg-2";
//     one.style.margin = "15px";

//     var two = document.createElement("div");
//     two.className = "card";

//     var three = document.createElement("iframe");
//     three.width = "225";
//     three.height = "400";
//     three.src = `https://www.youtube.com/embed/${}`;
//     three.style.borderRadius = "10px";
//     three.frame
//     three.allowFullscreen = "allowfullscreen";


//     one.appendChild(two);
//     two.appendChild(three);

//     console.log('one', one)

//     document.getElementById("tit").appendChild(one);

// }