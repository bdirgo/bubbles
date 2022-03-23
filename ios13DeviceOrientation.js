function requestPermission() {
  console.log("asking")
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response === 'granted') {
        console.log("granted")
        permissionGranted = true;
      } else {
        console.log("denied")
        permissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove();
}
function ios13DeviceOrientation() {
if (typeof(window?.DeviceOrientationEvent) !== undefined && typeof(window?.DeviceOrientationEvent?.requestPermission) === 'function') {
  console.log("if");
  // iOS 13+
  DeviceOrientationEvent.requestPermission()
    .catch(() => {
      // Only show permission dialog on first load, the browser will remember request after "allow"-ing
      let button = createButton("Click to Allow sensor access");
      button.style('font-size', "38px");
      button.center();
      button.mousePressed(requestPermission);
      // Skip "then"
      console.log("button");
    })
    .then(() => {
      console.log("then");
      // Already granted permission
      permissionGranted = true;
    });
} else {
  console.log("else");
  permissionGranted = true;
}
}