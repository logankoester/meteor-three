Package.describe({
  summary: "Three.js - A JavaScript 3D library"
});

Package.on_use(function (api) {
  api.use("jquery", "client");
  api.add_files("lib/three/build/three.js", "client");
  api.use("three", "client");
});
