function requestAccess() {
  console.log("asking");
    DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          permissionGranted = true;
        } else {
          permissionGranted = false;
        }
      })
      .catch(console.error);
      button.remove();
}
function ios13DeviceOrientation() {
  if (
    typeof(window?.DeviceOrientationEvent) !== undefined &&
    typeof(window?.DeviceOrientationEvent?.requestPermission) === 'function'
  ) {
    // iOS 13+
    // DeviceOrientationEvent.requestPermission()
    //   .catch(() => {
        // Only show permission dialog on first load, the browser will remember request after "allow"-ing
        button = createButton("Click to Allow sensor access");
        button.style('font-size', "38px");
        button.center();
        button.mousePressed(requestAccess);
      //   // Skip "then"
      //   throw new Error('Ask for the first time');
      // })
      // .catch(console.error)
      // .then(() => {
      //   console.log("then");
      //   // Already granted permission
      //   permissionGranted = true;
      // });
  } else {
    console.log("else");
    permissionGranted = true;
  }
}