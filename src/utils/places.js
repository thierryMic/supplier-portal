
export function placify() {
  return new Promise(function(resolve, reject) {
    var script = document.createElement('script');

    script.async = true;
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkcUs_F2z0YGj-zGnHlGySPeijObe6oWc&libraries=places";


    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}