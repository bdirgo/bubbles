function requestPermission() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response === 'granted') {
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove();
}
function ios13DeviceOrientation() {
  if (
    window.DeviceOrientationEvent &&
    window.DeviceOrientationEvent.requestPermission &&
    typeof(window?.DeviceOrientationEvent?.requestPermission) === 'function'
  ) {
    // iOS 13+
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // Only show permission dialog on first load, the browser will remember request after "allow"-ing
        let button = createButton("Click to Allow sensor access");
        button.style('font-size', "42px");
        button.center();
        button.mousePressed(requestPermission);
        // Skip "then"
        throw error;
      })
      .then(() => {
        // Already granted permission
        permissionGranted = true;
      });
  } else {
    permissionGranted = true;
  }
}