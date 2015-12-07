const HD_CAMERA = 2742568;
const MACBOOK = 2081286;
const WIN_LAPTOP = 2729663;
const IPAD2 = 2456286;
const IPAD_MINI = 2736848;
const WIN_SURFACE = 2736849;
var deviceIDList = new Array();
createDeviceIDList();

for(var i = 0; i < deviceIDList.length; i++){
    httpRequest(deviceIDList[i]);
}


function httpRequest(deviceID){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.lib.ncsu.edu/websiteclassic/device-test/index.php?key=" + deviceID, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log("Response for device " + deviceID + ": " + xhr.responseText);
            document.write("Response for device " + deviceID + ": " + xhr.responseText + "\n");
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}

function createDeviceIDList(){
    deviceIDList.push(HD_CAMERA);
    deviceIDList.push(MACBOOK);
    deviceIDList.push(WIN_LAPTOP);
    deviceIDList.push(IPAD2);
    deviceIDList.push(IPAD_MINI);
    deviceIDList.push(WIN_SURFACE);
}
