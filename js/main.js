var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xd17ef0, 1);
document.body.appendChild( renderer.domElement );

$(window).on('resize', function(){
	camera.aspect = window.innerWidth / window.innerHeight;
	 camera.updateProjectionMatrix();

	 renderer.setSize( window.innerWidth, window.innerHeight );
 });

var frog;

var loader = new THREE.JSONLoader();
var params = {
  meshPath: 'frogMesh.json',
  texPath: 'frogTexture.png'
};

loader.load("../models/"+params.meshPath, function(geom,materials) {
    var texture = new THREE.TextureLoader().load( "../models/"+params.texPath , function(texture){

			var material = THREE.MeshPhongMaterial( {
			        color: 0xfffffff,
			        shininess: 10,
			        map:texture,
			        shading: THREE.FlatShading
			});
			var mesh = new THREE.Mesh(geometry,material);
			    scene.add(mesh);
		});
});

var light = new THREE.DirectionalLight('white',1);
light.position.set(20,20,20).normalize();
scene.add(light);

camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
  //
	if (frog) {
		// frog.rotation.x += 0.009;
		// frog.rotation.y += 0.009;
		// frog.rotation.z += 0.009;
	}

	renderer.render( scene, camera );
}
render();
