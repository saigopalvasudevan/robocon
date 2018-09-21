//Stat.js feature to show the FPS, GPU clock speed and memory consumed on device

//(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})();

//Addressing some of the global variables
var scene, camera, renderer, width, height, controls, AmbientLight;

//init function contains the scene, camera, renderer, grid, axesHelper, orbitControl, Object3D groups, JsonLoader, Lights, jQuery
var init = function () {

// Scene is the environment
    scene = new THREE.Scene();

//Camera is the tool used to view the scene. Perspective camera with FOV, Aspect Ration, near cutting plane and far cutting plane as the parameters.
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);

//renderer uses WebGl to render the scene and camera, to visualize on screen.
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

// viewport resize functionality

    window.addEventListener('resize', function () {

        width = window.innerWidth;
        height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    });

// Inbuilt Grid generator with size and division as the parameters
    var grid = new THREE.GridHelper(2000,50);
    scene.add(grid);

    grid.position.set(0,-3,0);
    grid.rotation.y= Math.PI/2;

// Inbuilt axes generator with the length as parameter
    var axesHelper = new THREE.AxesHelper( 200 );
    scene.add( axesHelper );

// OrbitControls initialized to the variable  and added to the scene
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    scene.add(controls);

// Adjusting the location and the initial area of focus of the camera
    camera.position.set(1550,750,1500);
    camera.lookAt(new THREE.Vector3(0,0,0));

// Background TUT logo added with a separate scene and camera but rendered by the common renderer
    texture = THREE.ImageUtils.loadTexture( 'img/image1.png' );
    backgroundMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2, 0),
        new THREE.MeshBasicMaterial({
            map: texture
        }));

    backgroundMesh .material.depthTest = false;
    backgroundMesh .material.depthWrite = false;

// Create your background scene
    backgroundScene = new THREE.Scene();
    backgroundCamera = new THREE.Camera();
    backgroundScene .add(backgroundCamera );
    backgroundScene .add(backgroundMesh );


// Create Groups for the imported models and add them to the scene
    group = new THREE.Object3D();
    group0 = new THREE.Object3D();
    group1 = new THREE.Object3D();
    group2 = new THREE.Object3D();
    group3 = new THREE.Object3D();
    group4 = new THREE.Object3D();
    group5 = new THREE.Object3D();
    group6 = new THREE.Object3D();
    GROUP= new THREE.Object3D();

    scene.add(group);
    scene.add(group0);
    scene.add(group1);
    scene.add(group2);
    scene.add(group3);
    scene.add(group4);
    scene.add(group5);
    scene.add(group6);





// Import JSON Models using the JSONLoader

    var loader = new THREE.JSONLoader();


    loader.load( 'model2/table.json', function ( geometry, materials ) {
        table = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: 0x454545, side: THREE.DoubleSide}));
        // obj1.rotation.x = 90;
        // geometry.center();

        scene.add(table);
        table.add(GROUP);
        // obj1.add(group);

    });


    loader.load( 'model2/obj1.json', function ( geometry, materials ) {
        obj1 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        // obj1.rotation.x = 90;
        // geometry.center();

        scene.add(obj1);
        GROUP.add(obj1);
        GROUP.position.set(0,905,0);
        GROUP.rotation.y = Math.PI;
        obj1.add(group);

    });

    loader.load( 'model2/obj2.json', function ( geometry, materials ) {
        obj2 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        // obj2.rotation.x = 90;
        //  geometry.center();
        group.add(obj2);
    });

    loader.load( 'model2/obj3.json', function ( geometry, materials ) {
        obj3 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj3.rotation.x = 90;
        group.add(obj3);

    });

    loader.load( 'model2/obj4.json', function ( geometry, materials ) {
        obj4 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //  obj4.rotation.x = 90;
        // geometry.center();
        group.add(obj4);
    });

    loader.load( 'model2/obj5.json', function ( geometry, materials ) {
        obj5 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj5.rotation.x = 90;
        //  geometry.center();
        group.add(obj5);
    });

    loader.load( 'model2/obj6.json', function ( geometry, materials ) {
        obj6 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0x0000FF, side: THREE.DoubleSide}));
        //  obj6.rotation.x = 90;
        //  geometry.center();
        group.add(obj6);
    });

    loader.load( 'model2/obj7.json', function ( geometry, materials ) {
        obj7 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj7.rotation.x = 90;
        // geometry.center();
        group.add(obj7);
    });

    loader.load( 'model2/obj8.json', function ( geometry, materials ) {
        obj8 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj8.rotation.x = 90;
        // geometry.center();
        group.add(obj8);
    });

    loader.load( 'model2/obj9.json', function ( geometry, materials ) {
        obj9 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj9.rotation.x = 90;geometry.center();
        //  geometry.center();
        group.add(obj9);
    });

    loader.load( 'model2/obj10.json', function ( geometry, materials ) {
        obj10 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));



        obj10.geometry.computeBoundingBox();

        var boundingBox = obj10.geometry.boundingBox;

        var position = new THREE.Vector3();
        position.subVectors( boundingBox.max, boundingBox.min );
        position.multiplyScalar( 0.5 );
        position.add( boundingBox.min );
        position.applyMatrix4( obj10.matrixWorld );

        obj10.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(
            -(position.x),
            -(position.y),
            -(position.z)
            )
        );

        obj10.geometry.verticesNeedUpdate = true;

        obj10.position.x = position.x;
        obj10.position.y = position.y;
        obj10.position.z = position.z;

        // scene.add(obj10);

        group.add(obj10);

        obj10.add(group1);
    });

    loader.load( 'model2/obj11.json', function ( geometry, materials ) {
        obj11 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0x0000FF, side: THREE.DoubleSide}));
        //   obj11.rotation.x = 90;

        obj11.geometry.computeBoundingBox();

        var boundingBox = obj11.geometry.boundingBox;

        position1 = new THREE.Vector3();
        position1.subVectors( boundingBox.max, boundingBox.min );
        position1.multiplyScalar( -.5 );
        position1.add( boundingBox.min );
        position1.applyMatrix4( obj11.matrixWorld );

        obj11.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position1.x),
                    -(position1.y),
                    -(position1.z)
                )
        );

        obj11.geometry.verticesNeedUpdate = true;

        obj11.position.x = position1.x;
        obj11.position.y = position1.y;
        obj11.position.z = position1.z;

        // scene.add(obj11);
        //obj10.add(obj11);

        group1.add(obj11);
        console.log(obj11.position);
        obj11.position.set(-120,-125,-105);
        /* group.add(obj11);

         group1.add(obj11);*/
    });

    loader.load( 'model2/obj12.json', function ( geometry, materials ) {
        obj12 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj12.rotation.x = 90;

        obj12.geometry.computeBoundingBox();

        var boundingBox = obj12.geometry.boundingBox;

        position2 = new THREE.Vector3();
        position2.subVectors( boundingBox.max, boundingBox.min );
        position2.multiplyScalar( -.5 );
        position2.add( boundingBox.min );
        position2.applyMatrix4( obj12.matrixWorld );

        obj12.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position2.x),
                    -(position2.y),
                    -(position2.z)
                )
        );

        obj12.geometry.verticesNeedUpdate = true;

        obj12.position.x = position2.x;
        obj12.position.y = position2.y;
        obj12.position.z = position2.z;

        console.log(obj12.position);
        obj12.position.set(-116,-100,-115);
        group.add(obj12);
        group1.add(obj12);
    });

    loader.load( 'model2/obj13.json', function ( geometry, materials ) {
        obj13 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //    obj13.rotation.x = 90;

        obj13.geometry.computeBoundingBox();

        var boundingBox = obj13.geometry.boundingBox;

        var position3 = new THREE.Vector3();
        position3.subVectors( boundingBox.max, boundingBox.min );
        position3.multiplyScalar( .5 );
        position3.add( boundingBox.min );
        position3.applyMatrix4( obj13.matrixWorld );

        obj13.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position3.x),
                    -(position3.y),
                    -(position3.z)
                )
        );

        obj13.geometry.verticesNeedUpdate = true;

        obj13.position.x = position3.x;
        obj13.position.y = position3.y;
        obj13.position.z = position3.z;

        console.log(obj13.position);
        obj13.position.set(0,415,0);
        //obj12.add(obj13);
        group.add(obj13);
        group1.add(obj13);
        obj13.add(group2)
    });

    loader.load( 'model2/obj14.json', function ( geometry, materials ) {
        obj14 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0x0000FF, side: THREE.DoubleSide}));
        //   obj14.rotation.x = 90;

        obj14.geometry.computeBoundingBox();

        var boundingBox = obj14.geometry.boundingBox;

        var position4 = new THREE.Vector3();
        position4.subVectors( boundingBox.max, boundingBox.min );
        position4.multiplyScalar( .5 );
        position4.add( boundingBox.min );
        position4.applyMatrix4( obj14.matrixWorld );

        obj14.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position4.x),
                    -(position4.y),
                    -(position4.z)
                )
        );

        obj14.geometry.verticesNeedUpdate = true;

        obj14.position.x = position4.x;
        obj14.position.y = position4.y;
        obj14.position.z = position4.z;

        console.log(obj14.position);
        obj14.position.set(0,4,-41);

        group.add(obj14);
        group1.add(obj14);
        group2.add(obj14)
    });

    loader.load( 'model2/obj15.json', function ( geometry, materials ) {
        obj15 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        // obj15.rotation.x = 90;

        obj15.geometry.computeBoundingBox();

        var boundingBox = obj15.geometry.boundingBox;

        var position5 = new THREE.Vector3();
        position5.subVectors( boundingBox.max, boundingBox.min );
        position5.multiplyScalar( .5 );
        position5.add( boundingBox.min );
        position5.applyMatrix4( obj15.matrixWorld );

        obj15.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position5.x),
                    -(position5.y),
                    -(position5.z)
                )
        );

        obj15.geometry.verticesNeedUpdate = true;

        obj15.position.x = position5.x;
        obj15.position.y = position5.y;
        obj15.position.z = position5.z;

        console.log(obj15.position);
        obj15.position.set(0,4,58);

        group.add(obj15);
        group1.add(obj15);
        group2.add(obj15)

    });

    loader.load( 'model2/obj16.json', function ( geometry, materials ) {
        obj16 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj16.rotation.x = 90;

        obj16.geometry.computeBoundingBox();

        var boundingBox = obj16.geometry.boundingBox;

        var position6 = new THREE.Vector3();
        position6.subVectors( boundingBox.max, boundingBox.min );
        position6.multiplyScalar( .5 );
        position6.add( boundingBox.min );
        position6.applyMatrix4( obj16.matrixWorld );

        obj16.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position6.x),
                    -(position6.y),
                    -(position6.z)
                )
        );

        obj16.geometry.verticesNeedUpdate = true;

        obj16.position.x = position6.x;
        obj16.position.y = position6.y;
        obj16.position.z = position6.z;

        console.log(obj16.position);
        obj16.position.set(0,4,64);

        group.add(obj16);
        group1.add(obj16);
        group2.add(obj16)

    });

    loader.load( 'model2/obj17.json', function ( geometry, materials ) {
        obj17 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //    obj17.rotation.x = 90;

        obj17.geometry.computeBoundingBox();

        var boundingBox = obj17.geometry.boundingBox;

        var position7 = new THREE.Vector3();
        position7.subVectors( boundingBox.max, boundingBox.min );
        position7.multiplyScalar( .5 );
        position7.add( boundingBox.min );
        position7.applyMatrix4( obj17.matrixWorld );

        obj17.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position7.x),
                    -(position7.y),
                    -(position7.z)
                )
        );

        obj17.geometry.verticesNeedUpdate = true;

        obj17.position.x = position7.x;
        obj17.position.y = position7.y;
        obj17.position.z = position7.z;

        console.log(obj17.position);
        obj17.position.set(0,4,24);


        group.add(obj17);
        group1.add(obj17);
        group2.add(obj17)


    });

    loader.load( 'model2/obj18.json', function ( geometry, materials ) {
        obj18 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj18.rotation.x = 90;

        obj18.geometry.computeBoundingBox();

        var boundingBox = obj18.geometry.boundingBox;

        var position8 = new THREE.Vector3();
        position8.subVectors( boundingBox.max, boundingBox.min );
        position8.multiplyScalar( .5 );
        position8.add( boundingBox.min );
        position8.applyMatrix4( obj18.matrixWorld );

        obj18.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position8.x),
                    -(position8.y),
                    -(position8.z)
                )
        );

        obj18.geometry.verticesNeedUpdate = true;

        obj18.position.x = position8.x;
        obj18.position.y = position8.y;
        obj18.position.z = position8.z;

        console.log(obj18.position);
        obj18.position.set(0,8,119);

        group.add(obj18);
        group1.add(obj18);
        group2.add(obj18)

    });

    loader.load( 'model2/obj19.json', function ( geometry, materials ) {
        obj19 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //  obj19.rotation.x = 90;

        obj19.geometry.computeBoundingBox();

        var boundingBox = obj19.geometry.boundingBox;

        var position9 = new THREE.Vector3();
        position9.subVectors( boundingBox.max, boundingBox.min );
        position9.multiplyScalar( .5 );
        position9.add( boundingBox.min );
        position9.applyMatrix4( obj19.matrixWorld );

        obj19.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position9.x),
                    -(position9.y),
                    -(position9.z)
                )
        );

        obj19.geometry.verticesNeedUpdate = true;

        obj19.position.x = position9.x;
        obj19.position.y = position9.y;
        obj19.position.z = position9.z;

        console.log(obj19.position);
        obj19.position.set(0,218,125);

        group.add(obj19);
        group1.add(obj19);
        group2.add(obj19)

    });

    loader.load( 'model2/obj20.json', function ( geometry, materials ) {
        obj20 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        ///   obj20.rotation.x = 90;

        obj20.geometry.computeBoundingBox();

        var boundingBox = obj20.geometry.boundingBox;

        var position10 = new THREE.Vector3();
        position10.subVectors( boundingBox.max, boundingBox.min );
        position10.multiplyScalar( .5 );
        position10.add( boundingBox.min );
        position10.applyMatrix4( obj20.matrixWorld );

        obj20.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position10.x),
                    -(position10.y),
                    -(position10.z)
                )
        );

        obj20.geometry.verticesNeedUpdate = true;

        obj20.position.x = position10.x;
        obj20.position.y = position10.y;
        obj20.position.z = position10.z;

        console.log(obj20.position);
        obj20.position.set(0,368,125);

        group.add(obj20);
        group1.add(obj20);
        group2.add(obj20)


    });

    loader.load( 'model2/obj21.json', function ( geometry, materials ) {
        obj21 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //  obj21.rotation.x = 90;

        obj21.geometry.computeBoundingBox();

        var boundingBox = obj21.geometry.boundingBox;

        var position11 = new THREE.Vector3();
        position11.subVectors( boundingBox.max, boundingBox.min );
        position11.multiplyScalar( .5 );
        position11.add( boundingBox.min );
        position11.applyMatrix4( obj21.matrixWorld );

        obj21.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position11.x),
                    -(position11.y),
                    -(position11.z)
                )
        );

        obj21.geometry.verticesNeedUpdate = true;

        obj21.position.x = position11.x;
        obj21.position.y = position11.y;
        obj21.position.z = position11.z;

        console.log(obj21.position);
        obj21.position.set(0,371,125);

        group.add(obj21);
        group1.add(obj21);
        group2.add(obj21)

    });

    loader.load( 'model2/obj22.json', function ( geometry, materials ) {
        obj22 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //  obj22.rotation.x = 90;

        obj22.geometry.computeBoundingBox();

        obj22.geometry.computeBoundingBox();

        var boundingBox = obj22.geometry.boundingBox;

        var position12 = new THREE.Vector3();
        position12.subVectors( boundingBox.max, boundingBox.min );
        position12.multiplyScalar( .5 );
        position12.add( boundingBox.min );
        position12.applyMatrix4( obj22.matrixWorld );

        obj22.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position12.x),
                    -(position12.y),
                    -(position12.z)
                )
        );

        obj22.geometry.verticesNeedUpdate = true;

        obj22.position.x = position12.x;
        obj22.position.y = position12.y;
        obj22.position.z = position12.z;

        console.log(obj22.position);
        obj22.position.set(0,45,-1);

        group.add(obj22);
        group1.add(obj22);
        group2.add(obj22)
        obj21.add(obj22);
        obj22.add(group3);

    });

    loader.load( 'model2/obj23.json', function ( geometry, materials ) {
        obj23 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0x0000FF, side: THREE.DoubleSide}));
        //  obj23.rotation.x = 90;

        obj23.geometry.computeBoundingBox();

        obj23.geometry.computeBoundingBox();

        var boundingBox = obj23.geometry.boundingBox;

        var position13 = new THREE.Vector3();
        position13.subVectors( boundingBox.max, boundingBox.min );
        position13.multiplyScalar( .5 );
        position13.add( boundingBox.min );
        position13.applyMatrix4( obj23.matrixWorld );

        obj23.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position13.x),
                    -(position13.y),
                    -(position13.z)
                )
        );

        obj23.geometry.verticesNeedUpdate = true;

        obj23.position.x = position13.x;
        obj23.position.y = position13.y;
        obj23.position.z = position13.z;

        console.log(obj23.position);
        obj23.position.set(0,4,34);

        group.add(obj23);
        group1.add(obj23);
        group2.add(obj23)
        group3.add(obj23)

    });

    loader.load( 'model2/obj24.json', function ( geometry, materials ) {
        obj24 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj24.rotation.x = 90;

        obj24.geometry.computeBoundingBox();

        var boundingBox = obj24.geometry.boundingBox;

        var position14 = new THREE.Vector3();
        position14.subVectors( boundingBox.max, boundingBox.min );
        position14.multiplyScalar( .5 );
        position14.add( boundingBox.min );
        position14.applyMatrix4( obj24.matrixWorld );

        obj24.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position14.x),
                    -(position14.y),
                    -(position14.z)
                )
        );

        obj24.geometry.verticesNeedUpdate = true;

        obj24.position.x = position14.x;
        obj24.position.y = position14.y;
        obj24.position.z = position14.z;

        console.log(obj24.position);
        obj24.position.set(0,4,-39);

        group.add(obj24);
        group1.add(obj24);
        group2.add(obj24)
        group3.add(obj24)

    });

    loader.load( 'model2/obj25.json', function ( geometry, materials ) {
        obj25 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //    obj25.rotation.x = 90;

        obj25.geometry.computeBoundingBox();

        var boundingBox = obj25.geometry.boundingBox;

        var position15 = new THREE.Vector3();
        position15.subVectors( boundingBox.max, boundingBox.min );
        position15.multiplyScalar( .5 );
        position15.add( boundingBox.min );
        position15.applyMatrix4( obj25.matrixWorld );

        obj25.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position15.x),
                    -(position15.y),
                    -(position15.z)
                )
        );

        obj25.geometry.verticesNeedUpdate = true;

        obj25.position.x = position15.x;
        obj25.position.y = position15.y;
        obj25.position.z = position15.z;

        console.log(obj25.position);
        obj25.position.set(0,4,-45);

        group.add(obj25);
        group1.add(obj25);
        group2.add(obj25)
        group3.add(obj25)


    });

    loader.load( 'model2/obj26.json', function ( geometry, materials ) {
        obj26 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj26.rotation.x = 90;

        obj26.geometry.computeBoundingBox();

        var boundingBox = obj26.geometry.boundingBox;

        var position16 = new THREE.Vector3();
        position16.subVectors( boundingBox.max, boundingBox.min );
        position16.multiplyScalar( .5 );
        position16.add( boundingBox.min );
        position16.applyMatrix4( obj26.matrixWorld );

        obj26.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position16.x),
                    -(position16.y),
                    -(position16.z)
                )
        );

        obj26.geometry.verticesNeedUpdate = true;

        obj26.position.x = position16.x;
        obj26.position.y = position16.y;
        obj26.position.z = position16.z;

        console.log(obj26.position);
        obj26.position.set(0,4,-14);

        group.add(obj26);
        group1.add(obj26);
        group2.add(obj26);
        group3.add(obj26);



    });

    loader.load( 'model2/obj27.json', function ( geometry, materials ) {
        obj27 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj27.rotation.x = 90;

        obj27.geometry.computeBoundingBox();

        var boundingBox = obj27.geometry.boundingBox;

        var position17 = new THREE.Vector3();
        position17.subVectors( boundingBox.max, boundingBox.min );
        position17.multiplyScalar( .5 );
        position17.add( boundingBox.min );
        position17.applyMatrix4( obj27.matrixWorld );

        obj27.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position17.x),
                    -(position17.y),
                    -(position17.z)
                )
        );

        obj27.geometry.verticesNeedUpdate = true;

        obj27.position.x = position17.x;
        obj27.position.y = position17.y;
        obj27.position.z = position17.z;

        console.log(obj27.position);
        obj27.position.set(0,1,-75);

        group.add(obj27);
        group1.add(obj27);
        group2.add(obj27);
        group3.add(obj27);
        //obj26.add(obj27);
        obj27.add(group4);


    });

    loader.load( 'model2/obj28.json', function ( geometry, materials ) {
        obj28 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0x0000FF, side: THREE.DoubleSide}));
        //    obj28.rotation.x = 90;

        obj28.geometry.computeBoundingBox();

        var boundingBox = obj28.geometry.boundingBox;

        var position18 = new THREE.Vector3();
        position18.subVectors( boundingBox.max, boundingBox.min );
        position18.multiplyScalar( .5 );
        position18.add( boundingBox.min );
        position18.applyMatrix4( obj28.matrixWorld );

        obj28.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position18.x),
                    -(position18.y),
                    -(position18.z)
                )
        );

        obj28.geometry.verticesNeedUpdate = true;

        obj28.position.x = position18.x;
        obj28.position.y = position18.y;
        obj28.position.z = position18.z;

        console.log(obj28.position);
        obj28.position.set(0,-36,-4);

        group.add(obj28);
        group1.add(obj28);
        group2.add(obj28);
        group3.add(obj28);
        group4.add(obj28);


    });

    loader.load( 'model2/obj29.json', function ( geometry, materials ) {
        obj29 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //    obj29.rotation.x = 90;

        obj29.geometry.computeBoundingBox();

        var boundingBox = obj29.geometry.boundingBox;

        var position19 = new THREE.Vector3();
        position19.subVectors( boundingBox.max, boundingBox.min );
        position19.multiplyScalar( .5 );
        position19.add( boundingBox.min );
        position19.applyMatrix4( obj29.matrixWorld );

        obj29.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position19.x),
                    -(position19.y),
                    -(position19.z)
                )
        );

        obj29.geometry.verticesNeedUpdate = true;

        obj29.position.x = position19.x;
        obj29.position.y = position19.y;
        obj29.position.z = position19.z;

        console.log(obj29.position);
        obj29.position.set(0,39,-4);


        group.add(obj29);
        group1.add(obj29);
        group2.add(obj29);
        group3.add(obj29);
        group4.add(obj29);



    });

    loader.load( 'model2/obj30.json', function ( geometry, materials ) {
        obj30 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj30.rotation.x = 90;

        obj30.geometry.computeBoundingBox();

        var boundingBox = obj30.geometry.boundingBox;

        var position20 = new THREE.Vector3();
        position20.subVectors( boundingBox.max, boundingBox.min );
        position20.multiplyScalar( .5 );
        position20.add( boundingBox.min );
        position20.applyMatrix4( obj30.matrixWorld );

        obj30.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position20.x),
                    -(position20.y),
                    -(position20.z)
                )
        );

        obj30.geometry.verticesNeedUpdate = true;

        obj30.position.x = position20.x;
        obj30.position.y = position20.y;
        obj30.position.z = position20.z;

        console.log(obj30.position);
        obj30.position.set(0,43,-4);

        group.add(obj30);
        group1.add(obj30);
        group2.add(obj30);
        group3.add(obj30);
        group4.add(obj30);



    });

    loader.load( 'model2/obj31.json', function ( geometry, materials ) {
        obj31 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj31.rotation.x = 90;

        obj31.geometry.computeBoundingBox();

        var boundingBox = obj31.geometry.boundingBox;

        var position21 = new THREE.Vector3();
        position21.subVectors( boundingBox.max, boundingBox.min );
        position21.multiplyScalar( .5 );
        position21.add( boundingBox.min );
        position21.applyMatrix4( obj31.matrixWorld );

        obj31.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position21.x),
                    -(position21.y),
                    -(position21.z)
                )
        );

        obj31.geometry.verticesNeedUpdate = true;

        obj31.position.x = position21.x;
        obj31.position.y = position21.y;
        obj31.position.z = position21.z;

        console.log(obj31.position);
        obj31.position.set(0,9,-4);

        group.add(obj31);
        group1.add(obj31);
        group2.add(obj31);
        group3.add(obj31);
        group4.add(obj31);


    });

    loader.load( 'model2/obj32.json', function ( geometry, materials ) {
        obj32 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //    obj32.rotation.x = 90;

        obj32.geometry.computeBoundingBox();

        var boundingBox = obj32.geometry.boundingBox;

        var position22 = new THREE.Vector3();
        position22.subVectors( boundingBox.max, boundingBox.min );
        position22.multiplyScalar( .5 );
        position22.add( boundingBox.min );
        position22.applyMatrix4( obj32.matrixWorld );

        obj32.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position22.x),
                    -(position22.y),
                    -(position22.z)
                )
        );

        obj32.geometry.verticesNeedUpdate = true;

        obj32.position.x = position22.x;
        obj32.position.y = position22.y;
        obj32.position.z = position22.z;

        console.log(obj32.position);
        obj32.position.set(0,88,-4);

        group.add(obj32);
        group1.add(obj32);
        group2.add(obj32);
        group3.add(obj32);
        group4.add(obj32);



    });

    loader.load( 'model2/obj33.json', function ( geometry, materials ) {
        obj33 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0x0000FF, side: THREE.DoubleSide}));
        //   obj33.rotation.x = 90;

        obj33.geometry.computeBoundingBox();

        var boundingBox = obj33.geometry.boundingBox;

        var position23 = new THREE.Vector3();
        position23.subVectors( boundingBox.max, boundingBox.min );
        position23.multiplyScalar( .5 );
        position23.add( boundingBox.min );
        position23.applyMatrix4( obj33.matrixWorld );

        obj33.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position23.x),
                    -(position23.y),
                    -(position23.z)
                )
        );

        obj33.geometry.verticesNeedUpdate = true;

        obj33.position.x = position23.x;
        obj33.position.y = position23.y;
        obj33.position.z = position23.z;

        console.log(obj33.position);
        obj33.position.set(0,90,30);

        group.add(obj33);
        group1.add(obj33);
        group2.add(obj33);
        group3.add(obj33);
        group4.add(obj33);




    });

    loader.load( 'model2/obj34.json', function ( geometry, materials ) {
        obj34 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //  obj34.rotation.x = 90;

        obj34.geometry.computeBoundingBox();

        var boundingBox = obj34.geometry.boundingBox;

        var position24 = new THREE.Vector3();
        position24.subVectors( boundingBox.max, boundingBox.min );
        position24.multiplyScalar( .5 );
        position24.add( boundingBox.min );
        position24.applyMatrix4( obj34.matrixWorld );

        obj34.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position24.x),
                    -(position24.y),
                    -(position24.z)
                )
        );

        obj34.geometry.verticesNeedUpdate = true;

        obj34.position.x = position24.x;
        obj34.position.y = position24.y;
        obj34.position.z = position24.z;

        console.log(obj34.position);
        obj34.position.set(0,92,-43);

        group.add(obj34);
        group1.add(obj34);
        group2.add(obj34);
        group3.add(obj34);
        group4.add(obj34);



    });

    loader.load( 'model2/obj35.json', function ( geometry, materials ) {
        obj35 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xCACCCE, side: THREE.DoubleSide}));
        //   obj35.rotation.x = 90;

        obj35.geometry.computeBoundingBox();

        var boundingBox = obj35.geometry.boundingBox;

        var position25 = new THREE.Vector3();
        position25.subVectors( boundingBox.max, boundingBox.min );
        position25.multiplyScalar( .5 );
        position25.add( boundingBox.min );
        position25.applyMatrix4( obj35.matrixWorld );

        obj35.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position25.x),
                    -(position25.y),
                    -(position25.z)
                )
        );

        obj35.geometry.verticesNeedUpdate = true;

        obj35.position.x = position25.x;
        obj35.position.y = position25.y;
        obj35.position.z = position25.z;

        console.log(obj35.position);
        obj35.position.set(0,92,-49);

        group.add(obj35);
        group1.add(obj35);
        group2.add(obj35);
        group3.add(obj35);
        group4.add(obj35);



    });

    loader.load( 'model2/obj36.json', function ( geometry, materials ) {
        obj36 = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: 0xDDDDDD, side: THREE.DoubleSide}));
        //   obj36.rotation.x = 90;

        obj36.geometry.computeBoundingBox();

        var boundingBox = obj36.geometry.boundingBox;

        var position26 = new THREE.Vector3();
        position26.subVectors( boundingBox.max, boundingBox.min );
        position26.multiplyScalar( .5 );
        position26.add( boundingBox.min );
        position26.applyMatrix4( obj36.matrixWorld );

        obj36.geometry.applyMatrix(
            new THREE.Matrix4()
                .makeTranslation(
                    -(position26.x),
                    -(position26.y),
                    -(position26.z)
                )
        );

        obj36.geometry.verticesNeedUpdate = true;

        obj36.position.x = position26.x;
        obj36.position.y = position26.y;
        obj36.position.z = position26.z;

        console.log(obj36.position);
        obj36.position.set(0,0,-19);

        group.add(obj36);
        group1.add(obj36);
        group2.add(obj36);
        group3.add(obj36);
        group4.add(obj36);
        obj35.add(obj36);



    });


// Different Light sources are added  with varying properties and parameters

    AmbientLight= new THREE.AmbientLight(0xFFFFFF, 5);
    //scene.add(AmbientLight);

    var pointLight = new THREE.PointLight(0xFF00FF, 1.5, 30);
    pointLight.position.set(50,80,20); // setting in cartesian coordinates
    scene.add(pointLight);

    var directionalLight= new THREE.DirectionalLight(0xFF0000, 1);
    directionalLight.position.set(60,30,30);
    scene.add(directionalLight);

    var directionalLight= new THREE.DirectionalLight(0x00FF00, 1);
    directionalLight.position.set(-30,-20,-20);
    scene.add(directionalLight);

    var directionalLight= new THREE.DirectionalLight(0x0000FF, 1);
    directionalLight.position.set(-60,-30,-30);
    scene.add(directionalLight);

    var directionalLight= new THREE.DirectionalLight(0x00FF00, 1);
    directionalLight.position.set(30,10,30);
    scene.add(directionalLight);


};

submit1, submit2, submit3, submit4, submit5, submit6 = 0; // Text boxes initialized as global variables

var update = function () {

//Getting the input from the textboxs by jQuery



    $("#submit1").change(function () {
        submit1 = $("#submit1").val();
    });

    $("#submit2").change(function () {
        submit2 = $("#submit2").val();
    });

    $("#submit3").change(function () {
        submit3 = $("#submit3").val();

    });

    $("#submit4").change(function () {
        submit4 = $("#submit4").val();

    });

    $("#submit5").change(function () {
        submit5 = $("#submit5").val();

    });

    $("#submit6").change(function () {
        submit6 = $("#submit6").val();

    });

//var update= function () {


    $(function () {

        $('#Enter').click(function () {

            if (submit1 == 0) {
                alert('Enter all Joint values');
            }
            else if (submit2 == 0) {
                alert('Enter all Joint values');
            }
            else if (submit3 == 0) {
                alert('Enter all Joint values');
            }
            else if (submit4 == 0) {
                alert('Enter all Joint values');
            }
            else if (submit5 == 0) {
                alert('Enter all Joint values');
            }
            else if (submit6 == 0) {
                alert('Enter all Joint values');
            }

            b1= (submit1);
            b2= (submit2);
            b3= (submit3);
            b4= (submit4);
            b5= (submit5);
            b6= (submit6);

            angles = {a1:b1 , a2:b2, a3:b3, a4:b4, a5:b5, a6:b6};
            console.log(angles.a3);





            /*var http = require('http');
            var fs = require('fs');

            var server = http.createServer(function(req,res){

                console.log('the request was made:' +req.url);
                res.writeHead(200, {'Content-Type': 'text/plain'});
               // var myReadStream = fs.createReadStream(__dirname + '/angle.txt', 'utf8');
                // var myWriteStream = fs.createWriteStream(__dirname + '/writestream.txt')
              //  myReadStream.pipe(res);
                 res.end(angles.a3);
            });

            server.listen(3000, '127.0.0.1');
            console.log('Server is listening to port 3003');*/







            j1= THREE.Math.degToRad(submit1);
            j2= THREE.Math.degToRad(submit2);
            j3= THREE.Math.degToRad(submit3);
            j4= THREE.Math.degToRad(submit4);
            j5= THREE.Math.degToRad(submit5);
            j6= THREE.Math.degToRad(submit6);


// The rotation axis for the individual joints, being entered by user in degrees and being converted to Radians
            group.rotation.y = j1;
            obj10.rotation.z = j2;
            obj13.rotation.y = j3;
            obj22.rotation.y = j4;
            obj27.rotation.z = j5;
            obj36.rotation.z = j6;


        });


    /*angles = [submit1,submit2,submit3,submit4,submit5,submit6];
    module.exports.angles= angles;*/
// Reset implemented- The joints resume home position

        $('#Reset').click(function () {
            group.rotation.y = 0;
            obj10.rotation.z = 0;
            obj13.rotation.y = 0;
            obj22.rotation.y = 0;
            obj27.rotation.z = 0;
            obj36.rotation.z = 0;
        })

    });
};

//NODE.js will rock your world




// The function animate renders the scene and refreshes the screen to display a dynamic output every second
var animate = function () {


    setTimeout( function() {

        requestAnimationFrame( animate );

    }, 1000 / 0 );

    renderer.autoClear = false;
    renderer.clear();
    renderer.render(backgroundScene , backgroundCamera );
    renderer.render(scene, camera);



};

//The functions are then executed
init();
update();
setInterval(animate, 3200);
